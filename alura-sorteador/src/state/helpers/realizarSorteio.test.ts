import { realizarSorteio } from "./realizarSorteio";

describe("realizaSorteio()", () => {
  test("cada participante não sorteie o próprio nome", () => {
    const participantes = ["Ana", "Felipe", "José", "Catarina", "João"];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
