const nome = "luana";
let nome2 = ""
let pessoaDefault = {
    nome: "Luana",
    idade: "29",
    profissão: "urbanista"
}

let nomes = ["nome1", "nome2", "nome3"];

let pessoas = [{
    nome: "Luana",
    idade: "29",
    profissão: "urbanista"
},
{
    nome: "Mariana",
    idade: "39",
    profissão: "Dev"
}];

let pessoasListaVazia = [];

function alterarnome() {
    nome2 = "marcos";
    console.log("valor novamente alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor novamente alterado:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    console.log("Idade:");
    console.log(pessoa.idade);
    console.log("Profissão:");
    console.log(pessoa.profissão);

}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);

}

function imprimirPessoas(){
    pessoas.forEach((item) => {
        console.log("NOME:");
        console.log(item.nome);
        
    });
}

imprimirPessoas();

adicionarPessoa({
    nome: "Tiago",
    idade: "30",
    profissão: "médico"

});

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Lua",
//    idade: "29",
//    profissão: "urbanista"
//})

//recebeEalteraNome("Luana Rodrigues");

//alterarnome();