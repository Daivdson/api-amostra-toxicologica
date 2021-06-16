const mongooseConfig = require('./config/mongoose')
const validador = require('../src/controlador/valida-amostra');
const Repositorio = require('../src/repositorio/repositorio-amostra');

describe("insert", () => {
  let servico;
  let conexao = new mongooseConfig();

  beforeAll(() => {
    conexao.abreConexao();
    servico = new Repositorio();
  });

  afterAll(()  => {
    conexao.fechaConexao();
  });

  test("Analise - deve retorna  resultado NEGATIVO", async () => {
    const moock = {
      codigoAmostra: '02383322',
      cocaina: 0.678,
      anfetamina: 0.1,
      metanfetamina: 0.1,
      mda: 0.1,
      mdma: 0,
      thc: 0.1,
      morfina: 0.1,
      codeina: 0.1,
      heroina: 0.1,
      benzoilecgonina: 0,
      cocaetileno: 0,
      norcocaina: 0
    }
    const resultValidador = validador.toxicologica(moock);
    expect(resultValidador.resultado).toEqual('negativo');
  });

  test("Analise - deve retorna  resultado POSITIVO", async () => {
    const moock = {
      codigoAmostra: '02383322',
      cocaina: 0.678,
      anfetamina: 0.3,
      metanfetamina: 0.3,
      mda: 0.2,
      mdma: 0.2,
      thc: 0.1,
      morfina: 0.2,
      codeina: 0.2,
      heroina: 0.2,
      benzoilecgonina: 0.5,
      cocaetileno: 0.5,
      norcocaina: 0.5
    }
    const resultValidador = validador.toxicologica(moock);
    expect(resultValidador.resultado).toEqual('positivo');
  });

  test("Inserindo analise - deve retorna analise", async () => {
    const moock = {
      codigoAmostra: '02383322',
      cocaina: 0.678,
      anfetamina: 0.3,
      metanfetamina: 0.3,
      mda: 0.2,
      mdma: 0.2,
      thc: 0.1,
      morfina: 0.2,
      codeina: 0.2,
      heroina: 0.2,
      benzoilecgonina: 0.5,
      cocaetileno: 0.5,
      norcocaina: 0.5
    }
    const resultValidador = validador.toxicologica(moock);

    const resultado = await servico.novo(resultValidador);
    expect(resultado.resultado).toEqual('positivo');
  });

});