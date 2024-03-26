const gulp = require('gulp');


function funcaoPadrao(callback) {
    setTimeout(() => {
        console.log('Executando uma função');
        callback();
    }, 2000);
}

function dizOi(callback) {
    setTimeout(() => {
        console.log('Ola, Gulp!');
        dizTchau();
        callback();
    }, 1000);


}

function dizTchau() {
    console.log('Tchau Gulp');
}

//exports.default = gulp.series(funcaoPadrao, dizOi);
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;

// taredas públicas = aquelas que exportamos e conseguimos chamar via linha de camnado.
// taredas privadas = uma função js que será chamada por outra função/tarefa. Não vai usar o exports na tarefa privada. Não será acessivel na linha de comando
// função = tarefa

// tarefas em série or série de tarefas = referem-se a uma sequência de tarefas que são executadas uma após a outra, em ordem definida. Isso é útil quando você tem várias tarefas que dependem do resultado de tarefas anteriores, ou quando você deseja garantir uma ordem específica de execução das tarefas.

// tarefas em paralelo = referem a um conjunto de tarefas que podem ser executadas simultaneamente, sem depender do resultado de uma tarefa para iniciar outra. Isso é útil quando você tem tarefas que podem ser executadas de forma independente e não têm dependências entre si.