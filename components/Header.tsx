"use client";

import Link from "next/link";
import TransitionLink from "@/components/TransitionLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className="site_header header_border"
        style={{
          boxShadow: scrolled && !menuOpen ? "0 0px 30px 0 rgba(0, 0, 0, 0.1)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <nav className="site_header_nav">
          <TransitionLink href="/" className="nav_title">
            <h1 className="site_header_h1">
              <img src="/logo.svg" alt="Daiki Tohyama" className="header_logo" />
              <p className="header_title">TOHYAMA<br />DAIKI</p>
            </h1>
          </TransitionLink>

          <div className="site_header_links">
            <TransitionLink href="/" className={`nav_btn ${pathname === "/" ? "nav_btn_current" : ""}`}>Home</TransitionLink>
            <TransitionLink href="/profile" className={`nav_btn ${pathname === "/profile" ? "nav_btn_current" : ""}`}>Profile</TransitionLink>
            <TransitionLink href="/works" className={`nav_btn ${pathname === "/works" ? "nav_btn_current" : ""}`}>Works</TransitionLink>
            {/* <TransitionLink href="/gallery" className={`nav_btn ${pathname === "/gallery" ? "nav_btn_current" : ""}`}>Gallery</TransitionLink> */}
          </div>

          <button
            className="site_header_hamburger header_hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="メニュー"
            type="button"
          >
            <span className="site_header_text">{menuOpen ? "CLOSE" : "MENU"}</span>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 384 512" fill="currentColor">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" fill="currentColor">
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
              </svg>
            )}
          </button>
        </nav>
      </header>

      <div
        className="sp_menu_overlay"
        style={{
          visibility: menuOpen ? "visible" : "hidden",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="sp_menu_overlay_inner">
          <TransitionLink href="/" className={`nav_btn sp-menu_link ${pathname === "/" ? "nav_btn_current" : ""}`} onClick={() => setMenuOpen(false)}>Home</TransitionLink>
          <TransitionLink href="/profile" className={`nav_btn sp-menu_link ${pathname === "/profile" ? "nav_btn_current" : ""}`} onClick={() => setMenuOpen(false)}>Profile</TransitionLink>
          <TransitionLink href="/works" className={`nav_btn sp-menu_link ${pathname === "/works" ? "nav_btn_current" : ""}`} onClick={() => setMenuOpen(false)}>Works</TransitionLink>
          {/* <TransitionLink href="/gallery" className={`nav_btn sp-menu_link ${pathname === "/gallery" ? "nav_btn_current" : ""}`} onClick={() => setMenuOpen(false)}>Gallery</TransitionLink> */}
        </div>
      </div>
    </>
  );
}
