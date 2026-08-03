'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as jose from 'jose';

const PROPERTY_ID = process.env.NEXT_PUBLIC_GA_PROPERTY_ID;
const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_GA_PRIVATE_KEY;

export default function CounterPage() {
  const [stats, setStats] = useState<{ activeUsers: number; pageViews: number } | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      if (!PROPERTY_ID || !CLIENT_EMAIL || !PRIVATE_KEY) return;

      try {
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="w-full flex-1 pb-24 px-4">
        {/* トップに戻る */}
        <div className="mx-auto max-w-5xl mt-16 mb-6">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            ← BACK TO HOME
          </Link>
          <h1 className="text-2xl font-bold tracking-widest text-white mt-4 font-sans">
            COUNTER
          </h1>
          <p className="text-xs text-zinc-400 mt-1">TsukuneServerのアクセス統計</p>
        </div>

        {/* メインの統計カード */}
        <div className="mx-auto max-w-5xl rounded-lg border border-zinc-700 bg-zinc-800/50 p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* 右側：アクセスカウンター表示部 */}
            <div className="flex-1 text-gray-300 space-y-6 font-sans w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-zinc-700/50 pb-3">
                アクセス解析統計
              </h2>

              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                Google Analytics (GA4) の API から自動取得されたリアルタイムな計測データです。
              </p>

              {/* カウンター数値表示グリッド */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* 累計訪問者数 */}
                <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/80 p-6 flex flex-col justify-between">
                  <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                    TOTAL VISITORS
                  </span>
                  <div className="mt-3 text-3xl md:text-4xl font-bold font-mono text-rose-800 tracking-tight">
                    {stats ? stats.activeUsers.toLocaleString() : '---'}
                  </div>
                </div>

                {/* 総ページビュー数 */}
                <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/80 p-6 flex flex-col justify-between">
                  <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                    PAGE VIEWS
                  </span>
                  <div className="mt-3 text-3xl md:text-4xl font-bold font-mono text-rose-800 tracking-tight">
                    {stats ? stats.pageViews.toLocaleString() : '---'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
