import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-5xl px-6 py-24">

          <h1 className="text-5xl font-bold">
            DAIKI TOYAMA
          </h1>

          <p className="mt-4 text-xl">
            Product Designer / UI Designer
          </p>

          <p className="mt-8 max-w-xl leading-8">
            Webサービスの課題整理から、
            UI設計・改善まで担当しています。
            デザインと開発の間に立ち、
            ユーザー体験を改善するプロダクトデザインを行います。
          </p>

        </section>


        <section id="about"
          className="mx-auto max-w-5xl px-6 py-20">

          <h2 className="text-3xl font-bold">
            About
          </h2>

          <p className="mt-6">
            Webデザイン、UI設計、サービス改善を中心に
            制作しています。
          </p>

        </section>


        <section id="works"
          className="mx-auto max-w-5xl px-6 py-20">

          <h2 className="text-3xl font-bold">
            Works
          </h2>

          <p className="mt-6">
            制作実績を掲載予定です。
          </p>

        </section>

      </main>
    </>
  );
}