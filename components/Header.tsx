export default function Header() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="font-bold">
          DAIKI TOYAMA
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#about">
            About
          </a>

          <a href="#works">
            Works
          </a>

          <a href="#process">
            Process
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}