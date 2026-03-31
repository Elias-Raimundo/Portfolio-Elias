function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]"></div>

      <div className="mx-auto grid min-h-[90vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Portfolio personal
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Hola, soy{" "}
            <span className="text-cyan-400">Elias Raimundo</span>
          </h1>

          <h2 className="mt-4 text-xl text-slate-300 md:text-2xl">
            Analista en Sistemas y desarrollador en formación
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
            Me enfoco en construir aplicaciones web funcionales, claras y bien
            diseñadas. Disfruto aprender nuevas tecnologías, resolver problemas
            y seguir creciendo dentro del mundo del desarrollo de software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contactarme
            </a>

            <a
                href="/Curriculum.pdf"
                download
                className="rounded-xl border border-cyan-400/30 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
                Descargar CV
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>

          <p className="text-sm text-slate-400">Stack principal</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Java", "C", "SQL", "Git", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-5 text-slate-300">
            <div className="rounded-3xl border border-white/5 p-4 shadow-xl backdrop-blur-sm">
              <p className="text-sm text-slate-500">Ubicación</p>
              <p className="mt-1 font-medium">Córdoba, Argentina</p>
            </div>

            <div className="rounded-3xl border border-white/5 p-4 shadow-xl backdrop-blur-sm">
              <p className="text-sm text-slate-500">Perfil</p>
              <p className="mt-1 font-medium">
                Frontend, backend, bases de datos y lógica
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 p-4 shadow-xl backdrop-blur-sm">
              <p className="text-sm text-slate-500">Objetivo</p>
              <p className="mt-1 font-medium">
                Conseguir experiencia real y crecer como desarrollador
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;