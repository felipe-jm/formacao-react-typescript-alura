import { Card } from "../components/Card";
import { Formulario } from "../components/Formulario";
import { ListaParticipantes } from "../components/ListaParticipantes";
import { Rodape } from "../components/Rodape";

export const Configuracao = () => (
  <Card>
    <section>
      <h2>Vamos começar!</h2>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </section>
  </Card>
);
