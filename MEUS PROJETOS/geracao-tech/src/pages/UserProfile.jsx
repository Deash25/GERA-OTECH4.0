
import { useParams, Link } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();

  return (
    <div className="inner-page">
      <section className="page-heading">
        <span className="hero-tag">ÁREA DO USUÁRIO</span>
        <h1>Perfil do usuário</h1>
        <p>Esta página demonstra o uso de parâmetros dinâmicos nas rotas.</p>
      </section>

      <section className="page-panel">
        <h2>Informações do perfil</h2>
        <p>Identificador recebido pela URL:</p>
        <span className="profile-id">ID: {id}</span>
        <p>
          Altere o número no endereço, por exemplo, para
          <strong> /user/25 </strong>, e veja o identificador mudar.
        </p>
        <Link to="/" className="page-link">← Voltar ao início</Link>
      </section>
    </div>
  );
}