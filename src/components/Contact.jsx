import { useState } from "react";



function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mbdzbwjy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSent(true);
      e.target.reset();
    }
  };
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          Contacto
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Hablemos
        </h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 p-8 shadow-xl backdrop-blur-sm">
          <p className="leading-7 text-slate-300">
            Estoy buscando oportunidades para seguir creciendo como
            desarrollador, sumar experiencia y participar en proyectos donde
            pueda aportar valor. Podés contactarme por mail o encontrarme en mis
            perfiles profesionales.
          </p>

          <div className="mt-6 space-y-3 text-slate-300">
            <p>Email: eliasraimundo2005@gmail.com</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/elias-raimundo-0a4290290/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                linkedin.com/in/elias-raimundo-0a4290290
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Elias-Raimundo"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                github.com/Elias-Raimundo
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/5 p-8 shadow-xl backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 outline-none placeholder:text-slate-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 outline-none placeholder:text-slate-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tu mensaje"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 outline-none placeholder:text-slate-500"
            ></textarea>

            <button
              type="submit"
              className="rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:scale-105"
            >
              Enviar mensaje
            </button>

            {sent && (
              <p className="text-green-400">Mensaje enviado correctamente 🚀</p>
            )}

            <input type = "hidden" name = "_next" value="http://localhost:5173/#contacto" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;