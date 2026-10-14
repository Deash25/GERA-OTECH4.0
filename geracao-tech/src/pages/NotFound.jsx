
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="inner-page">
      <section className="page-heading">
        <div className="error-code">404</div>
        <h1>Página não encontrada</h1>
        <p>
          O endereço acessado não corresponde a nenhuma página
          disponível neste projeto.
        </p>
        <Link to="/" className="hero-button">
          Voltar ao início
        </Link>
      </section>
    </div>
  );
}