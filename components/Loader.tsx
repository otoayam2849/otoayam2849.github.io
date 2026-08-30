"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
  const [phase, setPhase] = useState<"loading" | "opening" | "done">("loading");
  const [transitionPhase, setTransitionPhase] = useState<"idle" | "closing" | "opening">("idle");
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  // 初回ローディング
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase("opening");
    }, 1500);

    const timer2 = setTimeout(() => {
      setPhase("done");
      isFirstLoad.current = false;
      (window as any).__initialLoadDone = true;
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // ページ遷移開始イベントを受信（遷移前にカーテンを閉じる）
  useEffect(() => {
    const handleTransitionStart = () => {
      setTransitionPhase("closing");
    };

    window.addEventListener("pageTransitionStart", handleTransitionStart);
    return () => window.removeEventListener("pageTransitionStart", handleTransitionStart);
  }, []);

  // ページ遷移完了後にカーテンを開く
  useEffect(() => {
    if (isFirstLoad.current) return;
    if (transitionPhase !== "closing") return;

    // パスが変わった = 遷移完了 → カーテンを開く
    setTransitionPhase("opening");

    const timer = setTimeout(() => {
      setTransitionPhase("idle");
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 初回ローディング
  if (phase !== "done") {
    return (
      <div className="loader_overlay">
        <div className={`loader_curtain_top ${phase === "opening" ? "is_open" : ""}`}></div>
        <div className={`loader_curtain_bottom ${phase === "opening" ? "is_open" : ""}`}></div>
        <div className={`loader_text ${phase === "opening" ? "is_hidden" : ""}`}>
          Loading
        </div>
      </div>
    );
  }

  // ページ遷移中
  if (transitionPhase === "closing") {
    return (
      <div className="loader_overlay loader_transition">
        <div className="loader_curtain_top is_closing"></div>
        <div className="loader_curtain_bottom is_closing"></div>
      </div>
    );
  }

  if (transitionPhase === "opening") {
    return (
      <div className="loader_overlay loader_transition">
        <div className="loader_curtain_top is_transition"></div>
        <div className="loader_curtain_bottom is_transition"></div>
      </div>
    );
  }

  return null;
}
