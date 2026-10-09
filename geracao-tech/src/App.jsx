
import { MainContent, Card } from "./components";
import "./App.css";

import FeedbackForm from "./FeedbackForm";

export default function App() {
  return (
    <div className="pagina">
      <header>
        <h1>Geração Tech 4.0</h1>
      </header>

      <div className="banner"></div>

      <main className="conteudo">
        <MainContent title="Geração Tech 4.0">
          <p>
            A Geração Tech 4.0 é focada no ensino de
            tecnologia e programação. Aprendemos na
            prática a criar páginas web funcionais e
            modernas, utilizando HTML, CSS e outras
            ferramentas essenciais para o mercado de
            trabalho.
          </p>
        </MainContent>

        <section className="equipe">
          <h2>Equipe</h2>
          <div className="linha"></div>

          <div className="times">
            <Card nome="Equipe 1" cargo="Desenvolvedor">
              <p>
                Responsável pelo desenvolvimento web.
              </p>
            </Card>

            <Card nome="Equipe 2" cargo="Desenvolvedor">
              <p>
                Responsável pela interface do projeto.
              </p>
            </Card>

            <Card nome="Equipe 3" cargo="Desenvolvedor">
              <p>
                Responsável pela estilização da página.
              </p>
            </Card>
          </div>
        </section>
        <FeedbackForm />
      </main>

      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}