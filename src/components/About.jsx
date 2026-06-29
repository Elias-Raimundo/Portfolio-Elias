function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          Sobre mí
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Un poco sobre mi perfil
        </h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 p-8 shadow-xl backdrop-blur-sm">
          <p className="leading-7 text-slate-300">
            Soy Analista en Sistemas y desarrollador Full Stack. Disfruto
            diseñar y desarrollar aplicaciones web, integrando frontend, backend
            y bases de datos para construir soluciones completas y escalables.
            Me gusta aprender nuevas tecnologías y seguir mejorando mis
            habilidades técnicas.
          </p>
        </div>

        <div className="rounded-3xl border border-white/5 p-8 shadow-xl backdrop-blur-sm">
          <p className="leading-7 text-slate-300">
            A lo largo de distintos proyectos trabajé con tecnologías como Java,
            Spring Boot, Angular, React, Node.js, Ruby, Python y PostgreSQL.
            Busco escribir código claro, trabajar con lógica ordenada y seguir
            creciendo profesionalmente dentro del desarrollo de software.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;