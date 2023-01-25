import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

export const ListaParticipantes = () => {
  const participantes = useListaParticipantes();
  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};
