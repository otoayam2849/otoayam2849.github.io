const skills = [
  {
    title: "Design",
    items: ["UI Design", "UX Improvement", "Information Architecture", "Design System"],
  },
  {
    title: "Tools",
    items: ["Figma", "Illustrator", "Photoshop", "ChatGPT"],
  },
  {
    title: "Development",
    items: ["HTML / CSS", "JavaScript", "Git / GitHub", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="section-heading">Skills</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.title} className="card">
            <h3 className="text-base font-bold text-[var(--fg)]">{skill.title}</h3>

            <ul className="mt-4 space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="text-sm text-[var(--fg-muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}