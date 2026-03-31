import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const projects = [
  {
    title: "Vault - Virtual Wallet",
    description:
      "Billetera virtual que permite ingresar, transferir y retirar dinero, crear reservas y consultar la actividad de la cuenta.",
    tech: ["Ruby", "Sinatra", "ActiveRecord", "SQLite", "Docker", "HTML", "CSS"],
    github: "https://github.com/Elias-Raimundo/Vault-app",
    demo: "#",
    learn:
      "Trabajé lógica de negocio, persistencia de datos, operaciones financieras y organización de una aplicación web con Ruby.",
    images: ["/projects/Vault.png"],
  },
  {
    title: "Morticia SAS",
    description:
      "Sistema web para la gestión de pedidos y clientes, con panel para administración de productos, saldos, pagos y estadísticas.",
    tech: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
    github: "https://github.com/Elias-Raimundo/Morticia-Sas",
    demo: "#",
    learn:
      "Implementé funcionalidades para clientes y administradores, integrando frontend y backend, manejando datos en una base relacional y desplegando servicios en la nube.",
    images: ["/projects/Morticia1.png", "/projects/Morticia2.png"],
  },
  {
    title: "Portfolio personal",
    description:
      "Sitio web responsive para presentar mi perfil profesional, tecnologías, proyectos y medios de contacto.",
    tech: ["React", "Tailwind", "Vercel"],
    github: "https://github.com/TU-USUARIO/TU-REPO-PORTFOLIO",
    demo: "#",
    learn:
      "Me permitió trabajar diseño responsive, componentes reutilizables y una mejor presentación profesional de mis proyectos.",
    images: ["/projects/Portfolio.png"],
  },
];

function ImageModal({ images, current, title, onClose, onPrev, onNext, onGoTo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrev, onNext]);

  if (!images?.length) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-screen w-screen items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          ✕
        </button>

        {images.length > 1 && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-3 text-2xl text-white"
          >
            ‹
          </button>
        )}

        <img
          src={images[current]}
          alt=""
          className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white object-contain shadow-2xl"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-3 text-2xl text-white"
          >
            ›
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onGoTo(index)}
                className={`h-3 w-3 rounded-full ${
                  index === current ? "bg-cyan-400" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

function ProjectCarousel({ images = [], title }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple || isHovered || isOpen) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, hasMultiple, isHovered, isOpen]);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  if (!hasImages) {
    return (
      <div className="mb-5 flex h-56 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-slate-500">
        Vista previa
      </div>
    );
  }

  return (
    <>
      <div
        className="group/carousel relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="block w-full cursor-zoom-in"
          aria-label={`Abrir imágenes de ${title}`}
        >
          <img
            src={images[current]}
            alt={`${title} preview ${current + 1}`}
            className="h-56 w-full object-cover object-top transition-all duration-500 group-hover/carousel:scale-[1.03]"
          />
        </button>

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover/carousel:bg-black/10" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover/carousel:opacity-100">
          <span className="rounded-full border border-white/30 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-sm">
            Click para ampliar
          </span>
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-white opacity-0 backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400 group-hover/carousel:opacity-100"
              aria-label="Imagen anterior"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-white opacity-0 backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400 group-hover/carousel:opacity-100"
              aria-label="Imagen siguiente"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === current
                      ? "bg-cyan-400"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isOpen && (
        <ImageModal
          images={images}
          current={current}
          title={title}
          onClose={() => setIsOpen(false)}
          onPrev={goToPrev}
          onNext={goToNext}
          onGoTo={goToSlide}
        />
      )}
    </>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          Proyectos
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Algunos trabajos que hice
        </h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
          >
            <ProjectCarousel images={project.images} title={project.title} />

            <h3 className="text-xl font-bold text-white">{project.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {project.description}
            </p>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              {project.learn}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Código
              </a>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;