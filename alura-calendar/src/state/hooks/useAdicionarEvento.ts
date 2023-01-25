import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../utils";
import { listaDeEventosState } from "../atom";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        "Eventos não podem ser cadastrados com a data menor que a atual"
      );
    }
    evento.id = obterId();
    return setListaDeEventos((listAntiga) => [...listAntiga, evento]);
  };
};

export default useAdicionarEvento;
