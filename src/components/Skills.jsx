const groups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Java", "Ruby", "Sinatra", "Python", "TypeScript"],
  },
  {
    title: "Bases de datos",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Herramientas",
    items: ["Git", "GitHub", "VS Code", "Vercel", "SupaBase"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          Tecnologías
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Herramientas con las que trabajo
        </h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;