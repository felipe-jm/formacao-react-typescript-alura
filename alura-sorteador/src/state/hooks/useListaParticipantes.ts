import { useRecoilValue } from "recoil";
import { listaParticipantes } from "../atom";

export const useListaParticipantes = () => {
  return useRecoilValue(listaParticipantes);
};
