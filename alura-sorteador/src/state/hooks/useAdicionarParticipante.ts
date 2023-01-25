import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantes } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantes);
  const lista = useRecoilValue(listaParticipantes);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setErro("");
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
