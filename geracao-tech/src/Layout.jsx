
import { Link, Outlet, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const links = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
  { to: "/store", label: "Loja" },
  { to: "/user/1", label: "Perfil" },
];

  return (
    <header className="site-header">
      <Link to="/" className="site-brand">
        <span className="brand-mark">GT</span>
        <span>
          <strong>Geração Tech</strong>
          <small>4.0 · Tecnologia e inovação</small>
        </span>
      </Link>

      <nav className="site-nav">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={
              location.pathname === link.to ||
              (link.to === "/user/1" &&
                location.pathname.startsWith("/user/"))
                ? "nav-link active"
                : "nav-link"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <strong>Geração Tech 4.0</strong>
      <p>Aprender, criar e transformar através da tecnologia.</p>
      <small>© 2026 · Todos os direitos reservados.</small>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="pagina">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}