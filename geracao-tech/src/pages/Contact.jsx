
import { useState } from "react";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem(event) {
    event.preventDefault();
    alert(`Obrigado, ${nome}! O formulário foi enviado para demonstração.`);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <div className="inner-page">
      <section className="page-heading">
        <span className="hero-tag">VAMOS CONVERSAR</span>
        <h1>Contato</h1>
        <p>
          Preencha os campos abaixo para experimentar
          o formulário de contato do projeto.
        </p>
      </section>

      <section className="page-panel">
        <h2>Envie sua mensagem</h2>

        <form className="page-form" onSubmit={enviarMensagem}>
          <label htmlFor="contato-nome">Nome</label>
          <input
            id="contato-nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome"
            required
          />

          <label htmlFor="contato-email">E-mail</label>
          <input
            id="contato-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@email.com"
            required
          />

          <label htmlFor="contato-mensagem">Mensagem</label>
          <textarea
            id="contato-mensagem"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            placeholder="Escreva sua mensagem"
            rows={5}
            required
          />

          <button type="submit">Enviar mensagem</button>
        </form>
      </section>
    </div>
  );
}