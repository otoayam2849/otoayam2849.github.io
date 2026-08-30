import { works } from "@/data/works";
import Header from "@/components/Header";
import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";
import "./work-detail.css";

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = works.findIndex((item) => item.slug === slug);
  const work = works[currentIndex];

  if (!work) {
    return <main className="page_main page_section">Not Found</main>;
  }

  // PREV / NEXT（ループ）
  const prevWork = works[(currentIndex - 1 + works.length) % works.length];
  const nextWork = works[(currentIndex + 1) % works.length];

  return (
    <>
      <Header />
      <nav className="breadcrumb" aria-label="breadcrumb">
        <ol className="breadcrumb_list">
          <li className="breadcrumb_item"><Link href="/"><i className="fa-regular fa-house"></i> Home</Link></li>
          <li className="breadcrumb_item"><Link href="/works">Works</Link></li>
          <li className="breadcrumb_item">{work.title}</li>
        </ol>
      </nav>

      <main>
        <article className="work_detail">

          {/* H1 */}
          <div className="work_detail_inner">
            <div className="title_group">
              <h1 className="work_detail_title_en">{work.title}</h1>
              {work.titleJp && <p className="work_detail_title_jp">{work.titleJp}</p>}
            </div>
          </div>

          {/* Hero image (full width) */}
          {work.images?.hero && (
            <div className="work_detail_hero">
              <img src={work.images.hero} alt={work.title} className="work_detail_hero_img" />
            </div>
          )}

          {/* Meta info (2 columns) */}
          <div className="work_detail_inner_b">
            <div className="work_detail_meta">
              <div className="work_detail_meta_left">
                <h2 className="work_detail_heading">Overview</h2>
                <p className="work_detail_txt">{work.overview_text}</p>
              </div>
              <div className="work_detail_meta_right">
                <dl className="work_detail_info">
                  {work.client && (
                    <>
                      <dt>CLIENT</dt>
                      <dd>{work.client}</dd>
                    </>
                  )}
                  {work.production && (
                    <>
                      <dt>PRODUCTION</dt>
                      <dd>{work.production}</dd>
                    </>
                  )}
                  {work.date && (
                    <>
                      <dt>DATE</dt>
                      <dd>{work.date}</dd>
                    </>
                  )}
                  {work.role && work.role.length > 0 && (
                    <>
                      <dt>ROLE</dt>
                      <dd>{work.role.join(" / ")}</dd>
                    </>
                  )}
                  {work.siteUrl && (
                    <>
                      <dt>LINK</dt>
                      <dd><a href={work.siteUrl} target="_blank" rel="noopener noreferrer">{work.siteUrl}</a></dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>

          {/* Second image (full width) */}
          {work.images?.sub && (
            <div className="work_detail_hero">
              <img src={work.images.sub} alt="Sub" className="work_detail_hero_img" />
            </div>
          )}

          {/* Body text */}
          {work.bodyText && (
            <div className="work_detail_inner">
              <div className="work_detail_body">
                <p className="work_detail_desc">{work.bodyText}</p>
              </div>
            </div>
          )}

          {/* Gallery images (no parallax, multiple) */}
          {work.images?.gallery && work.images.gallery.length > 0 && (
            <div className="work_detail_inner">
              <div className="work_detail_gallery">
                {work.images.gallery.map((item: { src: string; caption: string }, i: number) => (
                  <figure key={i} className="work_detail_gallery_item">
                    <img src={item.src} alt={`${work.title} ${i + 1}`} />
                    {item.caption && <figcaption className="work_detail_gallery_caption">{item.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* PREV / Back to List / NEXT */}
          <div className="work_detail_inner_b">
            <div className="work_detail_pager">
              {/* <TransitionLink href={`/works/${prevWork.slug}`} className="work_detail_pager_btn">
                <i className="fa-solid fa-arrow-left"></i>
                <div>
                  <span>PREV</span>
                <p>aaaaaaaaaaaaaaa</p>
                </div>
              </TransitionLink> */}
              <div className="btn_more_link">
                <TransitionLink href="/works">Back to List</TransitionLink>
              </div>
              {/* <TransitionLink href={`/works/${nextWork.slug}`} className="work_detail_pager_btn">
                <span>NEXT</span>
                <i className="fa-solid fa-arrow-right"></i>
              </TransitionLink> */}
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
