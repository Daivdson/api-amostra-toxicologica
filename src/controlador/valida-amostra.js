
const toxicologica = (obj) => {
    if(notaCorte(obj)) {
        return Object.assign(obj ,{resultado: 'positivo'})
    } else {
        return Object.assign(obj, {resultado: 'negativo'})
    }
}

const notaCorte = (dados) => {
    if(dados.anfetamina >= 0.2 
        && dados.metanfetamina >= 0.2 
        && dados.mda >= 0.2 
        && dados.mdma >= 0.2
        && dados.thc >= 0.05
        && dados.morfina >= 0.2
        && dados.codeina >= 0.2
        && dados.heroina >= 0.2
        && analiseCocaina(dados)) {
            return true;
        } else {
            return false;
        }
}

const analiseCocaina = (dados) => {
    if(dados.cocaina >= 0.5 
        && dados.benzoilecgonina > 0.04
        && dados.cocaetileno > 0.04
        && dados.norcocaina > 0.04) {
            return true;
        } else {
            return false;
        }
}

module.exports = {
    toxicologica
}