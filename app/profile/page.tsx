import Header from "@/components/Header";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import Link from "next/link";
import "./profile.css";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <nav className="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb_list">
            <li className="breadcrumb_item"><Link href="/"><i className="fa-regular fa-house"></i> Home</Link></li>
            <li className="breadcrumb_item">Profile</li>
          </ol>
      </nav>
      <main className="page_main">
        <section className="page_section">
          <ScrollFadeIn delay={2000} transitionDelay={800} direction="none">
          <div className="title_group">
            <h1 className="page_h1">Profile</h1>
            <p className="title_text_jp">プロフィール</p>
          </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={2000} transitionDelay={800} direction="none">
          <div className="prof_intro">
            <div className="prof_intro_img_wrap">
              <img src="/img_prof.jpg" alt="遠山 大希" className="prof_intro_img" />
            </div>

            <div className="prof_intro_text">
              <p className="prof_intro_name">
                TOHYAMA<br className="sp_break" /> DAIKI <span className="prof_intro_name_jp">遠山 大希</span>
              </p>
              <div className="prof_txtbox">
                <p className="prof_txt">
                  1989年生まれ、岐阜県出身。愛知淑徳大学、HAL名古屋 夜間部を卒業後、愛知、北海道、東京でWebデザイナーとして3社勤務。
                </p>
                <p className="prof_txt">
                  シンプルで直感的、あらゆる人が使いやすくわかりやすいデザインを制作することを大切に、日々の業務を行なっています。業務以外には趣味で自主制作、レザークラフトなど色々な物を作ったり描いたりしています。
                </p>
              </div>

              <div className="prof_cont_txtbox">
                  <h5 className="page_h5">Skills & Tools</h5>
                  <div className="prof_txtbox">
                    <p className="prof_txt">
                      Web Design / Graphic Design / Service Growth
                    </p>
                    <p className="prof_txt">
                      Figma / Photoshop / Illustrator / After Effects / HTML / CSS / JavaScript
                    </p>
                  </div>
                  
              </div>
            </div>
          </div>
          </ScrollFadeIn>
        </section>
        <section className="page_section_career">
          <ScrollFadeIn>
          <div className="profile_detail">
            <div className="profile_text_area">
              <h2 className="page_h2">Career</h2>

              <table className="career_table">
                <tbody>
                  <tr>
                    <th>2008〜2012年</th>
                    <td>
                      愛知淑徳大学（文学部 図書館情報学科） 卒<br />
                      HAL名古屋（夜間部 グラフィックデザイン学科） 卒</td>
                  </tr>
                  <tr>
                    <th>2013〜2017年</th>
                    <td>
                      <span className="table_title">株式会社アビリティコンサルタント（現株式会社アビリブ） 入社。</span>
                      Webデザイナーとして名古屋本社で2年、北海道支店で2年半勤務。</td>
                  </tr>
                  <tr>
                    <th>2018〜2022年</th>
                    <td>
                      <span className="table_title">株式会社アンティー・ファクトリー 入社。</span>
                      大規模〜中規模のコーポレートサイト、LP、動画の画面デザインなど幅広く制作業務を担当。</td>
                  </tr>
                  <tr>
                    <th>2022年〜</th>
                    <td>
                      <span className="table_title">株式会社LIFULL 入社。</span>
                      主要サービスのLIFULL HOME&apos;Sにおけるサービスグロースや、新規事業のデザイン制作、一部グラフィック業務を担当。担当業務内でのデザインシステム設計など実行。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </ScrollFadeIn>
        </section>
      </main>
    </>
  );
}
