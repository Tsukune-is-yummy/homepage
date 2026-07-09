export const metadata = {
  title: "プライバシーポリシー | Tsukune Server",
  description: "Tsukune Serverのプライバシーポリシーです。",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 border-slate-200 dark:border-slate-700">
        プライバシーポリシー
      </h1>

      <p className="mb-8 leading-relaxed">
        Tsukune Server（以下、「当サイト」といいます）は、本ウェブサイト上で提供するサービスにおける、
        ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
      </p>

      <div className="space-y-8">
        {/* 第1条 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            第1条（広告について）
          </h2>
          <div className="space-y-2 leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              当サイトは、第三者配信の広告サービス「Google AdSense」を利用しています。
              Google AdSenseはCookieを使用して、ユーザーが当サイトや他のサイトへの過去のアクセス情報に基づいて広告を配信します。
            </p>
            <p>
              Googleが広告配信にCookieを使用することにより、当サイトや他のサイトにアクセスしたユーザーの興味に応じた広告を表示しています。
              Cookieを無効にする方法や、Google AdSenseに関する詳細は、
              <a
                href="https://policies.google.com/technologies/ads?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-500 mx-1"
              >
                Googleのポリシーと規約
              </a>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* 第2条 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            第2条（アクセス解析ツールについて）
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            当サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを利用する場合があります。
            このツールはCookieを利用してデータを収集しますが、個人を特定する情報は含まれません。
          </p>
        </section>

        {/* 第3条 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            第3条（個人情報の収集方法）
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            当サイトは、お問い合わせフォームからの送信時に、氏名やメールアドレス等の個人情報をお尋ねすることがあります。
            これらの情報は、お問い合わせへの対応や必要な情報提供のためにのみ利用いたします。
          </p>
        </section>

        {/* 第4条 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            第4条（個人情報の第三者提供）
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            当サイトは、法令に基づく場合を除き、本人の同意を得ずに第三者に個人情報を提供することはありません。
          </p>
        </section>

        {/* 第5条 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            第5条（プライバシーポリシーの変更）
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            当サイトは、必要に応じて、本ポリシーの内容を変更することがあります。
            変更後のプライバシーポリシーについては、当ページに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        {/* 第6条 */}
        <section className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            第6条（お問い合わせ窓口）
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
          </p>
          <p className="mt-3 text-sm">
            お問い合わせページ：
            <a
              href="/contact"
              className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-500 ml-1 font-medium"
            >
              /contact
            </a>
          </p>
        </section>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-500 mt-12 text-right">
        制定日：2026年7月9日
      </p>
    </main>
  );
}
