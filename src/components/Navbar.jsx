function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-xl font-black tracking-wide text-white transition hover:text-cyan-400"
        >
          Elias<span className="text-cyan-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <li>
            <a href="#inicio" className="transition hover:text-cyan-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre-mi" className="transition hover:text-cyan-400">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="transition hover:text-cyan-400">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#skills" className="transition hover:text-cyan-400">
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#contacto" className="transition hover:text-cyan-400">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;