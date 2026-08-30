import Header from "@/components/Header";
import Link from "next/link";

// ─── カラーパレット定義 ───
const colors = [
  { name: "--fg", value: "#111111", label: "テキスト（メイン）" },
  { name: "--fg-muted", value: "#707070", label: "テキスト（サブ）" },
  { name: "--bg", value: "#ffffff", label: "背景" },
  { name: "--border", value: "#e8e8e8", label: "ボーダー" },
  { name: "--color-primary", value: "#1395ac", label: "プライマリ" },
  { name: "--color-teal", value: "#3c9d9b", label: "ティール" },
  { name: "--color-dark-blue", value: "#2c5a6d", label: "ダークブルー" },
  { name: "--color-accent", value: "#f6e500", label: "アクセント（イエロー）" },
  { name: "--color-bg-gray", value: "#edf2f4", label: "背景グレー" },
  { name: "--card-bg", value: "#ffffff", label: "カード背景" },
];

export default function DesignSystem() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="section-heading">Design System</h1>
        <p className="mt-4 text-sm" style={{ color: "var(--fg-muted)" }}>
          このサイトで使用しているデザインルールの一覧です。
        </p>

        {/* ─── カラー ─── */}
        <section className="mt-16">
          <h2 className="section-heading">Colors</h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {colors.map((color) => (
              <div key={color.name}>
                <div
                  className="h-16 w-full rounded-lg border border-[var(--border)]"
                  style={{ backgroundColor: color.value }}
                />
                <p className="mt-2 text-xs font-medium" style={{ color: "var(--fg)" }}>
                  {color.label}
                </p>
                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  {color.value}
                </p>
                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  {color.name}
                </p>
              </div>
            ))}
          </div>

          {/* グラデーション */}
          <div className="mt-6">
            <div
              className="h-16 w-full rounded-lg"
              style={{ background: "linear-gradient(132deg, rgb(77, 135, 200) 0%, rgb(19, 149, 172) 78%)" }}
            />
            <p className="mt-2 text-xs font-medium" style={{ color: "var(--fg)" }}>グラデーション</p>
            <p className="text-xs" style={{ color: "var(--fg-muted)" }}>--gradient-nav</p>
            <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
              linear-gradient(132deg, rgb(77,135,200) 0%, rgb(19,149,172) 78%)
            </p>
          </div>
        </section>

        {/* ─── タイポグラフィ ─── */}
        <section className="mt-10">
          <h2 className="section-heading">Typography</h2>

          <div className="mt-8 space-y-8">
            {/* H1 */}
            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">H1 — entry-header &gt; h1</p>
              <h1 style={{
                lineHeight: 1.4666,
                fontSize: "2.5em",
                letterSpacing: ".03em",
                background: "linear-gradient(132deg, rgb(77, 135, 200) 0%, rgb(19, 149, 172) 78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}>
                見出し H1 / Heading 1
              </h1>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                font-size: 2.5em　font-weight: 600　グラデーションテキスト
              </p>
            </div>

            {/* H2 section-heading */}
            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">H2 — .section-heading（セクション見出し）</p>
              <h2 className="section-heading">見出し H2 / Section Heading</h2>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                font-size: 1.6rem　font-weight: 700　左グラデーションバー付き
              </p>
            </div>

            {/* H2 entry-content */}
            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">H2 — .entry-content &gt; h2（記事内見出し）</p>
              <div className="entry-content">
                <h2>見出し H2 / Article Heading</h2>
              </div>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                font-size: 1.4em　font-weight: 700　左グラデーションバー付き（4px幅）
              </p>
            </div>

            {/* H3 */}
            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">H3 — .entry-content &gt; h3</p>
              <div className="entry-content">
                <h3>見出し H3 / Sub Heading</h3>
              </div>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                font-size: 1.4em　background: #1395acb3（ティール半透明）　color: #fff
              </p>
            </div>

            {/* 本文 */}
            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">本文テキスト — p</p>
              <p>
                これは本文テキストのサンプルです。ポートフォリオサイトで使用される標準的な本文スタイルです。
                読みやすさを重視した行間と文字サイズを設定しています。
              </p>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                font-size: 16px（base）　line-height: 1.8　color: #707070（--fg-muted）
              </p>
            </div>

            {/* ラベル */}
            <div className="pb-6">
              <p className="label mb-3">ラベル — .label</p>
              <span className="label">CATEGORY LABEL</span>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                font-size: 0.75rem　font-weight: 500　letter-spacing: 0.08em　uppercase
              </p>
            </div>
          </div>
        </section>

        {/* ─── リンク ─── */}
        <section className="mt-10">
          <h2 className="section-heading">Links</h2>

          <div className="mt-8 space-y-6">
            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">テキストリンク（通常）</p>
              <a href="#" style={{ color: "var(--fg)", textDecoration: "none" }}>
                通常のリンクテキスト（ホバーで opacity: 0.55）
              </a>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                color: #111111　hover: opacity 0.55　transition: 0.5s ease
              </p>
            </div>

            <div className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <p className="label mb-3">テキストリンク（ティール・下線付き）</p>
              <a href="#" style={{ color: "var(--color-teal)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                Back to list
              </a>
              <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                color: #3c9d9b（--color-teal）　text-decoration: underline
              </p>
            </div>

            <div className="pb-6">
              <p className="label mb-3">View More ボタン</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border px-8 py-3 text-sm font-medium tracking-widest uppercase transition-colors hover:text-white"
                style={{ border: "1px solid var(--fg)", color: "var(--fg)" }}
              >
                View More
              </Link>
              <p className="mt-3 text-xs" style={{ color: "var(--fg-muted)" }}>
                border: 1px solid #111111　padding: 12px 32px　uppercase　hover: bg #111 / text #fff
              </p>
            </div>
          </div>
        </section>

        {/* ─── タグ ─── */}
        <section className="mt-10">
          <h2 className="section-heading">Tags</h2>

          <div className="mt-8">
            <p className="label mb-3">タグ（カード内）</p>
            <div className="flex flex-wrap gap-2">
              {["LP", "レスポンシブデザイン", "コーポレートサイト", "UI Design"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{ border: "1px solid var(--border)", color: "var(--fg-muted)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs" style={{ color: "var(--fg-muted)" }}>
              border-radius: 9999px　padding: 2px 12px　font-size: 0.75rem
            </p>
          </div>
        </section>

        {/* ─── カード ─── */}
        <section className="mt-10">
          <h2 className="section-heading">Cards</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card">
              <p className="label">CATEGORY</p>
              <h3 className="mt-2 text-base font-bold" style={{ color: "var(--fg)" }}>
                カードタイトル
              </h3>
              <p className="mt-2 text-sm">
                カードの本文テキストサンプルです。ホバーで背景色が変化します。
              </p>
            </div>
            <div className="card">
              <p className="label">CATEGORY</p>
              <h3 className="mt-2 text-base font-bold" style={{ color: "var(--fg)" }}>
                カードタイトル
              </h3>
              <p className="mt-2 text-sm">
                border: 1px solid #e8e8e8　border-radius: 12px　padding: 1.75rem
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--fg-muted)" }}>
            hover: background #edf2f4　box-shadow: 0 2px 12px rgba(0,0,0,0.06)
          </p>
        </section>

        {/* ─── スペーシング・ボーダー ─── */}
        <section className="mt-10">
          <h2 className="section-heading">Spacing & Border</h2>

          <div className="mt-8">
            <p className="label mb-2">罫線（HR）</p>
            <hr style={{ borderTop: "1px solid var(--border)" }} />
            <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
              border-top: 1px solid #e8e8e8（--border）
            </p>
          </div>
        </section>

        {/* ─── フォント ─── */}
        <section className="mt-10 pb-20">
          <h2 className="section-heading">Font Family</h2>
          <div className="mt-8 rounded-lg p-6" style={{ border: "1px solid var(--border)" }}>
            <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
              dnp-shuei-gothic-gin-std
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--fg-muted)" }}>
              Hiragino Sans → ヒラギノ角ゴシック → Hiragino Kaku Gothic ProN →
              ヒラギノ角ゴ ProN W3 → メイリオ → Meiryo → sans-serif
            </p>
            <p className="mt-4 text-2xl">
              あいうえおABCDEFG 0123456789
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
