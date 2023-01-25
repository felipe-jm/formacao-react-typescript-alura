import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { Rodape } from "./Rodape";

jest.mock("../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("<Rodape />", () => {
  describe("onde não existem participantes suficientes", () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });

    test("a brincadeira não pode ser iniciada", () => {
      render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      const botao = screen.getByRole("button");

      expect(botao).toBeDisabled();
    });
  });

  describe("onde existem participantes suficientes", () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue([
        "Ana",
        "Felipe",
        "José",
      ]);
    });

    test("a brincadeira pode ser iniciada", () => {
      render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      const botao = screen.getByRole("button");

      expect(botao).not.toBeDisabled();
    });

    test("a brincadeira foi iniciada", () => {
      render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      const botao = screen.getByRole("button");
      fireEvent.click(botao);

      expect(mockNavegacao).toHaveBeenCalledTimes(1);
      expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
      expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
  });
});
