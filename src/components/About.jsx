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
        <div className="rounded-3xl border border-white/5 p-8 shandow-xl blackdrop-blur-sm">
          <p className="leading-7 text-slate-300">
            Soy Analista en Sistemas y me interesa el desarrollo de software,
            especialmente la creación de aplicaciones web y la resolución de
            problemas mediante código. Me gusta aprender nuevas tecnologías y
            seguir mejorando mis habilidades técnicas.
          </p>
        </div>

        <div className="rounded-3xl border border-white/5 p-8 shandow-xl blackdrop-blur-sm">
          <p className="leading-7 text-slate-300">
            Disfruto trabajar con una lógica ordenada, escribir código claro y
            construir proyectos que me permitan aplicar lo aprendido. Busco
            oportunidades donde pueda aportar valor y seguir creciendo
            profesionalmente dentro del área IT.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;