
export function MainContent({ title, children }) {
  return (
    <section className="secao">
      <h2>{title}</h2>
      <div className="linha"></div>

      <div className="texto-conteudo">
        {children}
      </div>
    </section>
  );
}

export function Card({ nome, cargo, children }) {
  return (
    <div className="card">
      <div className="avatar"></div>

      <h3>{nome}</h3>
      <span>{cargo}</span>

      {children && (
        <div className="card-extra">
          {children}
        </div>
      )}
    </div>
  );
}