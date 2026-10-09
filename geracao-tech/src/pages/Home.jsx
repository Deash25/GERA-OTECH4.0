
import { Link } from "react-router-dom";
import { MainContent, Card } from "../components";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">TECNOLOGIA • EDUCAÇÃO • FUTURO</span>

          <h1>
            O futuro começa com <span>conhecimento.</span>
          </h1>

          <p>
            O Geração Tech 4.0 conecta pessoas à tecnologia,
            incentivando o aprendizado, a criatividade e a inovação.
          </p>

          <Link to="/about" className="hero-button">
            Conheça o projeto →
          </Link>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="tech-orbit orbit-one"></div>
          <div className="tech-orbit orbit-two"></div>
          <div className="tech-core">GT<span>4.0</span></div>
          <span className="tech-symbol symbol-one">&lt;/&gt;</span>
          <span className="tech-symbol symbol-two">01</span>
          <span className="tech-symbol symbol-three">✦</span>
        </div>
      </section>

      <div className="home-content">
        <MainContent title="Sobre o Geração Tech 4.0">
          <p>
            A tecnologia abre portas para novas oportunidades.
            Nosso projeto valoriza a aprendizagem, o desenvolvimento
            de habilidades digitais e a preparação para o futuro.
          </p>
        </MainContent>

        <MainContent title="O que você encontra aqui?">
          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon">⌘</span>
              <h3>Tecnologia</h3>
              <p>Conhecimentos e ferramentas para o mundo digital.</p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">✦</span>
              <h3>Inovação</h3>
              <p>Ideias criativas para solucionar desafios.</p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">↗</span>
              <h3>Aprendizado</h3>
              <p>Desenvolvimento contínuo de novas habilidades.</p>
            </article>
          </div>
        </MainContent>

        <MainContent title="Nossa equipe">
          <div className="team-grid">
            <Card nome="Equipe Geração Tech" cargo="Tecnologia e inovação">
              <p>Construindo possibilidades por meio do conhecimento.</p>
            </Card>

            <Card nome="Desenvolvimento" cargo="Criação e programação">
              <p>Transformando ideias em experiências digitais.</p>
            </Card>

            <Card nome="Aprendizagem" cargo="Educação e futuro">
              <p>Aprender hoje para criar as soluções de amanhã.</p>
            </Card>
          </div>
        </MainContent>

        <section className="route-promo">
          <div>
            <span className="hero-tag">CONTINUE EXPLORANDO</span>
            <h2>Conheça mais sobre o projeto</h2>
            <p>Navegue pelas páginas e descubra os recursos do site.</p>
          </div>

          <div className="route-actions">
            <Link to="/about" className="secondary-button">Sobre</Link>
            <Link to="/contact" className="secondary-button">Contato</Link>
          </div>
        </section>
      </div>
    </div>
  );
}