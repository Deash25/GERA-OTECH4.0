
import { useState } from "react";

export default function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function enviarFeedback(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !comentario.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(
      `Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
    );
  }

  return (
    <section className="secao">
      <h2>Deixe seu Feedback</h2>
      <div className="linha"></div>

      <form className="feedback-form" onSubmit={enviarFeedback}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Digite seu nome"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite seu email"
        />

        <label htmlFor="comentario">Comentário</label>
        <textarea
          id="comentario"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
          placeholder="Escreva seu comentário"
          rows="4"
        />

        <button type="submit">Enviar feedback</button>
      </form>
    </section>
  );
}