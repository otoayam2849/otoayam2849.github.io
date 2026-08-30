"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export default function Carousel() {
  const items = works.filter((w) => w.thumbnail).slice(0, 6);
  const splideRef = useRef<HTMLDivElement>(null);
  const splideInstance = useRef<Splide | null>(null);

  useEffect(() => {
    if (!splideRef.current || splideInstance.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      perPage: 1,
      perMove: 1,
      focus: "center",
      gap: "3%",
      padding: "29%",
      pagination: false,
      arrows: false,
      speed: 600,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: true,
      breakpoints: {
        767: {
          padding: "20%",
          gap: "2%",
        },
      },
    });

    // 参考サイトと同様: スライドの距離に応じてscaleを動的計算
    const updateScales = () => {
      const index = splide.index;
      const length = splide.length;
      const track = splideRef.current?.querySelector(".splide__list");
      if (!track) return;

      const allSlides = Array.from(track.children) as HTMLElement[];
      const perSlideWidth = track.scrollWidth / allSlides.length;
      const currentTranslate = parseFloat(
        (track as HTMLElement).style.transform?.replace(/[^0-9\-.,]/g, "") || "0"
      );

      allSlides.forEach((slideEl, i) => {
        const inner = slideEl.querySelector(".carousel-inner") as HTMLElement;
        if (!inner) return;

        // Splideがクローンに付与するクラスからインデックスを推定
        const isClone = slideEl.classList.contains("splide__slide--clone");
        let slideIndex: number;

        if (!isClone) {
          // 実スライドのインデックスはDOM順序から算出
          const realSlides = allSlides.filter(s => !s.classList.contains("splide__slide--clone"));
          slideIndex = realSlides.indexOf(slideEl);
        } else {
          // クローンはaria-labelから取得 "X of Y"
          const label = slideEl.getAttribute("aria-label") || "";
          const match = label.match(/(\d+)\s+of/);
          slideIndex = match ? parseInt(match[1], 10) - 1 : 0;
        }

        let diff = slideIndex - index;
        if (diff > length / 2) diff -= length;
        if (diff < -length / 2) diff += length;
        const absDiff = Math.abs(diff);

        const scale = Math.max(1 - absDiff * 0.268, 0.2);
        inner.style.scale = String(scale);
      });
    };

    splide.on("mounted move", updateScales);
    splide.on("dragging", updateScales);

    splide.mount();
    splideInstance.current = splide;

    return () => {
      splide.destroy();
      splideInstance.current = null;
    };
  }, [items.length]);

  const handlePrev = () => splideInstance.current?.go("<");
  const handleNext = () => splideInstance.current?.go(">");

  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        {/* Splide root */}
        <div className="splide carousel-splide" ref={splideRef}>
          <div className="splide__track">
            <ul className="splide__list">
              {items.map((work) => (
                <li key={work.slug} className="splide__slide carousel-slide">
                  <div className="carousel-inner">
                    <Link href={`/works/${work.slug}`} className="carousel-slide__link">
                      <figure className="carousel-slide__figure">
                        <Image
                          src={work.thumbnail}
                          alt={work.title}
                          width={720}
                          height={540}
                          className="carousel-slide__img"
                        />
                      </figure>
                      <div className="carousel-overlay">
                        <span className="carousel-overlay__text">{work.title}</span>
                      </div>
                      <p className="carousel-slide__title-sp">{work.title}</p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PREV / NEXT ボタン - 前回と同じ位置 */}
        <div className="carousel-arrow carousel-arrow--prev">
          <button onClick={handlePrev} className="carousel-nav-btn" type="button">
            <i className="fa-solid fa-arrow-left carousel-nav-btn__icon" />
            <span className="carousel-nav-btn__text">PREV</span>
          </button>
        </div>
        <div className="carousel-arrow carousel-arrow--next">
          <button onClick={handleNext} className="carousel-nav-btn" type="button">
            <span className="carousel-nav-btn__text">NEXT</span>
            <i className="fa-solid fa-arrow-right carousel-nav-btn__icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
