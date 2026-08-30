const processes = [
  {
    title: "Requirement",
    text: "目的や課題を整理し、ユーザー視点・ビジネス視点から必要な要件を整理します。",
  },
  {
    title: "Design",
    text: "情報設計、UI設計、プロトタイプ作成を行い、使いやすい体験を設計します。",
  },
  {
    title: "AI Support",
    text: "AIを活用して情報整理、アイデア出し、文章作成、改善案検討などの制作効率化を行います。",
  },
  {
    title: "Development",
    text: "GitやWeb開発環境への理解を持ち、エンジニアと仕様や実装方法を相談しながら進行します。",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="section-heading">Process</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {processes.map((item, index) => (
          <article key={item.title} className="card">
            <p className="label">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-lg font-bold text-[var(--fg)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}