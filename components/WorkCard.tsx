import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

type Work = {
  slug: string;
  title: string;
  titleJp?: string;
  date: string;
  thumbnail: string;
  overview_text: string;
  role: string[];
  siteUrl: string;
  tags: string[];
};

export default function WorkCard({ work, hideDate, hideTitle, hideTags }: { work: Work; hideDate?: boolean; hideTitle?: boolean; hideTags?: boolean }) {
  return (
    <TransitionLink href={`/works/${work.slug}`} className="work-card">
      <article>
        <div className="work-card__thumb">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="work-card__thumb-img"
            />
          ) : (
            <div className="work-card__no-image">
              <span>No Image</span>
            </div>
          )}
          <div className="work-card__overlay">
            <span className="work-card__overlay-text">View More</span>
          </div>
        </div>

        {!hideTitle && (
          <h3 className="work-card__title">{work.title}</h3>
        )}
        {!hideTitle && work.titleJp && (
          <p className="work-card__title_jp">{work.titleJp}</p>
        )}

        {!hideDate && !hideTags && (work.tags.length > 0 || work.date) && (
          <div className="work-card__meta">
            <div className="work-card__meta-inner">
              {work.tags.length > 0 && (
                <span>{["コーポレートサイト", "採用サイト", "ポータルサイト"].includes(work.tags[0]) ? "WEBサイト" : work.tags[0]}</span>
              )}
              {work.tags.length > 0 && work.date && (
                <span>｜</span>
              )}
              {work.date && (
                <span>{work.date.slice(0, 4)}</span>
              )}
            </div>
          </div>
        )}
      </article>
    </TransitionLink>
  );
}
