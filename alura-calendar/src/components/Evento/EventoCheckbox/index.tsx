import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import useAtualizarEvento from "../../../state/hooks/useAtualizarEvento";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const atualizarEvento = useAtualizarEvento();

  const aoAlterarStatus = () => {
    const eventoAlterado = {
      ...evento,
    };
    eventoAlterado.completo = !evento.completo;

    atualizarEvento(eventoAlterado);
  };

  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];

  return <i className={estilos.join(" ")} onClick={aoAlterarStatus}></i>;
};

export default EventoCheckbox;
