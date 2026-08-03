'use client';

import { useEffect, useState } from 'react';
import * as jose from 'jose';

// ※静的ビルドでクライアント側に露出させるため NEXT_PUBLIC_ を付けます
const PROPERTY_ID = process.env.NEXT_PUBLIC_GA_PROPERTY_ID;
const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_GA_PRIVATE_KEY;

export default function VisitorCounter() {
  const [stats, setStats] = useState<{ activeUsers: number; pageViews: number } | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      if (!PROPERTY_ID || !CLIENT_EMAIL || !PRIVATE_KEY) return;

      try {
        // 1. JWTの作成
        const keyPem = PRIVATE_KEY.replace(/\\n/g, '\n');
        const privateKey = await jose.importPKCS8(keyPem, 'RS256');

        const jwt = await new jose.SignJWT({
          iss: CLIENT_EMAIL,
          scope: 'https://www.googleapis.com/auth/analytics.readonly',
          aud: 'https://oauth2.googleapis.com/token',
        })
          .setProtectedHeader({ alg: 'RS256' })
          .setIssuedAt()
          .setExpirationTime('1h')
          .sign(privateKey);

        // 2. Googleからアクセストークンを取得
        const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
          }),
        });

        const tokenData = await tokenRes.json();
        if (!tokenData.access_token) return;

        // 3. GA4 Data API を直接呼び出し
        const gaRes = await fetch(
          `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              dateRanges: [{ startDate: '2020-01-01', endDate: 'today' }],
              metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }],
            }),
          }
        );

        const gaData = await gaRes.json();
        const activeUsers = gaData.rows?.[0]?.metricValues?.[0]?.value || '0';
        const pageViews = gaData.rows?.[0]?.metricValues?.[1]?.value || '0';

        setStats({
          activeUsers: Number(activeUsers),
          pageViews: Number(pageViews),
        });
      } catch (err) {
        console.error('GA Fetch Error:', err);
      }
    }

    fetchAnalytics();
  }, []);

  return (
    <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl backdrop-blur-md text-slate-100 shadow-xl">
      <div className="flex flex-col">
        <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
          Total Visitors
        </span>
        <span className="text-xl font-bold tracking-tight font-mono text-emerald-400">
          {stats ? stats.activeUsers.toLocaleString() : '---'}
        </span>
      </div>

      <div className="h-8 w-px bg-slate-700/60" />

      <div className="flex flex-col">
        <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
          Page Views
        </span>
        <span className="text-xl font-bold tracking-tight font-mono text-sky-400">
          {stats ? stats.pageViews.toLocaleString() : '---'}
        </span>
      </div>
    </div>
  );
}
