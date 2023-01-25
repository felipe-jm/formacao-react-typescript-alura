import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";
import { useListaParticipantes } from "./useListaParticipantes";

export const useSorteador = () => {
  const participantes = useListaParticipantes();

  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => {
    const resultado = realizarSorteio(participantes);

    setResultado(resultado);
  };
};
