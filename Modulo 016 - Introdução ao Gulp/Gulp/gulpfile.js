const gulp = require('gulp'); 


function funcaoPadrao(callback) {
    console.log('Executando uma função');
    callback();
}

function dizOi(callback) {
    console.log('Ola, Gulp!');
    dizTchau();
    callback();
}

function dizTchau() {
    console.log('Tchau Gulp');
}

exports.default = gulp.series(funcaoPadrao, dizOi) ;
exports.dizOi = dizOi;

// taredas públicas = aquelas que exportamos e conseguimos chamar via linha de camnado.
// taredas privadas = uma função js que será chamada por outra função/tarefa. Não vai usar o exports na tarefa privada. Não será acessivel na linha de comando
// função = tarefa

// tarefas em série or série de tarefas = referem-se a uma sequência de tarefas que são executadas uma após a outra, em ordem definida. Isso é útil quando você tem várias tarefas que dependem do resultado de tarefas anteriores, ou quando você deseja garantir uma ordem específica de execução das tarefas.