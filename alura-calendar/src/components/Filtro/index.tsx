import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos";
import { filtroDeEventos } from "../../state/atom";
import style from "./Filtro.module.scss";

const Filtro = () => {
  const [data, setData] = useState("");
  const setFiltroDeEventos =
    useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroDeEventos = {};
    if (data) {
      filtro.data = new Date(data);
    } else {
      filtro.data = null;
    }
    setFiltroDeEventos(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
