import Header from "@/components/Header";
import WorkCard from "@/components/WorkCard";
import Carousel from "@/components/Carousel";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import TransitionLink from "@/components/TransitionLink";
import { works } from "@/data/works";
import Link from "next/link";

export default function Home() {
  const featuredWorks = works.slice(0, 6);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        {/* <section className="hero-section">
          <p className="label mb-4">web design</p>
          <p className="hero-title-text">
            DAIKI TOHYAMA<br />PORTFOLIO
          </p>
          <p className="hero-sub">遠山大希 作品集</p>
        </section> */}

        {/* Carousel */}
        {/* <Carousel />
        <div className="btn_more btn_works">
            <Link href="/works">View All Works</Link>
          </div> */}

        {/* Works */}
        {/* <section id="works" className="top-section">
          <h2 className="section-heading">Works</h2>

          <div className="works-grid">
            {featuredWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>

          <div className="btn_more btn_works">
            <Link href="/works">View More</Link>
          </div>
        </section> */}

        {/* Profile */}
        
        <section id="profile" className="top-section">        
          <ScrollFadeIn delay={2000} transitionDelay={800} direction="none">
          <div className="profile_scroll">
            <p className="profile_scroll_name">TOHYAMA DAIKI <span className="sp_break">PORTFOLIO SITE</span></p>
            <h2 className="profile_scroll_title">
              <img src="/title_.svg" alt="Tohyama Daiki" />
              <div className="scroll_box">
                <div className="arrow"><img src="/arrow.svg" alt="" /></div>
                <div className="scroll">
                  <img className="scroll_shadow" src="/scroll_shadow.svg" alt="scroll" />
                  <img className="scroll_img" src="/scroll.svg" alt="scroll" />
                </div>  
              </div>
            </h2>
            <ul className="profile_scroll_list">
              <li></li>
              <li>Role</li>
              <li></li>
              <li>Web Designer</li>
              <li></li>
            </ul>
            <ul className="profile_scroll_list">
              <li></li>
              <li>Focus</li>
              <li></li>
              <li className="list_focus">{"Web Design /\nGraphic Design /\nService Growth"}</li>
              <li></li>
            </ul>
          </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={2000} transitionDelay={800} direction="none">
          <div className="top_profile">
            <div className="profile_img_wrap">
              <img src="/img_prof.jpg" alt="遠山 大希" className="profile_img" />
            </div>
            
            <div className="profile_text_area">
              <p className="prof_name">
                TOHYAMA<br className="sp_break" /> DAIKI <span className="prof_name_jp">遠山 大希</span>
              </p>
              <div className="prof_txtbox">
                <p className="prof_txt">
                  1989年生まれ、岐阜県出身。<br />シンプルで直感的、あらゆる人が使いやすくわかりやすいデザインを制作することを大切に、日々の業務を行なっています。
                </p>
              </div>
              <div className="btn_more"><TransitionLink href="/profile">View More</TransitionLink></div>
            </div>
          </div>
          </ScrollFadeIn>
        </section>
        <section className="top_works">
          <div className="wrap_works">
            <div className="works_list">
              {works.slice(0, 3).map((work, index) => (
                <ScrollFadeIn key={work.slug} delay={index * 150}>
                <div className="works_item">
                  <div className="works_item_bg"></div>
                  <Link href={`/works/${work.slug}`} className="works_item_content">
                    <div className="works_box">
                      <div className="works_img_wrap">
                        <img className="works_img" src={work.thumbnail} alt={work.title} />
                      </div>
                      <div className="works_title">
                        <p className="works_num">Works<br />No.<span className="num_b">{String(index + 1).padStart(2, "0")}</span></p>
                        <p className="works_title_en">{work.title}</p>
                        {work.titleJp && <p className="works_title_sub">{work.titleJp}</p>}
                        <p className="works_btn">VIEW MORE</p>
                        <div className="viewmore_bg"></div>
                      </div>
                    </div>
                  </Link>
                </div>
                </ScrollFadeIn>
              ))}
            </div>
            <div className="btn_more_works"><TransitionLink href="/works">View More</TransitionLink></div>
          </div>
        </section>
      </main>
    </>
  );
}
