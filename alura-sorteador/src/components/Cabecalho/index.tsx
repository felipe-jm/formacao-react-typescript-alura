import "./styles.css";

export const Cabecalho = () => (
  <header className="cabecalho">
    <div
      className="imagem-logo"
      role="img"
      aria-label="Logo do Sorteador"
    ></div>
    <img
      className="participante"
      src="/imagens/participante.png"
      alt="Participante com um presente na mão"
    />
  </header>
);
