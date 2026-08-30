"use client";

import Header from "@/components/Header";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";
import Link from "next/link";
import { useState, useMemo } from "react";
import "./works.css";

export default function WorksList() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    works.forEach((work) => work.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, []);

  const filteredWorks = activeTag
    ? works.filter((work) => work.tags.includes(activeTag))
    : works;

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allTags.forEach((tag) => {
      counts[tag] = works.filter((work) => work.tags.includes(tag)).length;
    });
    return counts;
  }, [allTags]);

  return (
    <>
      <Header />
      <nav className="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb_list">
            <li className="breadcrumb_item"><Link href="/"><i className="fa-regular fa-house"></i> Home</Link></li>
            <li className="breadcrumb_item">Works</li>
          </ol>
        </nav>
      <main className="page_main">
        

        <section className="page_section">
          <div className="title_group">
            <h1 className="page_h1">Works</h1>
            <p className="title_text_jp">実績</p>
          </div>

          {/* <div className="filter-wrap filter-wrap--between">
            <p className="filter-count">{filteredWorks.length} projects</p>

            <div className="filter-select-wrap">
              <select
                value={activeTag ?? ""}
                onChange={(e) => setActiveTag(e.target.value || null)}
                className="filter-select"
              >
                <option value="">All ({works.length})</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>#{tag} ({tagCounts[tag]})</option>
                ))}
              </select>
              <i className="fa-solid fa-angle-down filter-icon"></i>
            </div>
          </div> */}

          <div className="card-grid">
            {filteredWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
