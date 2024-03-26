function funcaoPadrao(callback) {
    console.log('Executando uma função');
    callback();
}

function dizOi(callback) {
    console.log('Ola, Gulp!');
    dizTchau()
    callback();
}

function dizTchau() {
    console.log('Tchau Gulp')
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;

// taredas públicas = aquelas que exportamos e conseguimos chamar via linha de camnado.
// taredas privadas = uma função js que será chamada por outra função/tarefa. Não vai usar o exports na tarefa privada. Não será acessivel na linha de comando
// função = tarefa