import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import { Formulario } from "./Formulario";

describe("<Formulario />", () => {
  test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // encontrar input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar botão
    const botao = screen.getByRole("button");

    // garantir que input está na dom
    expect(input).toBeInTheDocument();

    // garantir que botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("Adicionar um participante caso um exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // encontrar input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar botão
    const botao = screen.getByRole("button");

    // inserir valor no input
    fireEvent.change(input, {
      target: {
        value: "Felipe",
      },
    });

    // clicar no botão de submeter
    fireEvent.click(botao);

    // garantir que input esteja com foco ativo
    expect(input).toHaveFocus();

    // garantir que input não tenha valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Felipe",
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Felipe",
      },
    });

    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Felipe",
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Felipe",
      },
    });

    fireEvent.click(botao);

    let mensagemDeErro: HTMLElement | null = screen.getByRole("alert");

    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    // esperar N segundos
    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
