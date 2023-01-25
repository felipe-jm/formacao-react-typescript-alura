import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { ListaParticipantes } from "./ListaParticipantes";

jest.mock("../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe("<ListaParticipantes />", () => {
  const participantes = ["Ana", "Felipe"];

  test("uma lista vazia de participantes", () => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);

    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });

  test("uma lista preenchida de participantes", () => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);

    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
