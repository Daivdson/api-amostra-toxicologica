
# API - Amostra toxicológica

## Executar localmente

Para executar localmente, use

```
npm install

docker-compose up

npm run dev
```

API - http://localhost:3000/amostra/api/

Documentação swagger - http://localhost:3000/amostra/docs/

## Como utilizar api

 - Analisar uma amostra: faça uma requisição **POST** para: `http://localhost:3000/amostra/api/toxicologica`

   ` Body para requisição: {
    	"codigoAmostra":  "02383322",
    	"cocaina":  0.678,
    	"anfetamina":  0.3,
    	"metanfetamina":  0.2,
    	"mda":  0.2,
    	"mdma":  0.2,
    	"thc":  0.1,
    	"morfina":  0.2,
    	"codeina":  0.2,
    	"heroina":  0.2,
    	"benzoilecgonina":  0.06,
    	"cocaetileno":  0.06,
    	"norcocaina":  0.06
    }`
    

> Conforme o os indices a api retornara o resultado sendo positivo ou negativo para o teste 

 - Listar analises: faça uma requisição **GET** para: `http://localhost:3000/amostra/api/toxicologica`


## Para executar os testes

```
npm run test
```