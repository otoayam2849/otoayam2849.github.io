"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function TransitionLink({ href, className, children, onClick }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 同一ページの場合は何もしない
    const isSamePage = pathname === href;
    if (isSamePage) return;

    if (onClick) onClick();

    // カーテンを閉じるイベントを発火
    window.dispatchEvent(new CustomEvent("pageTransitionStart"));

    // カーテンが閉じきってから遷移（500ms後）
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
