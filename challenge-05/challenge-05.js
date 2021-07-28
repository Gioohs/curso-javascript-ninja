/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var coisas = ['giovanna', 'teste', 'cansada', 1234, 551]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function teste(arg){
  return arg; }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
 teste(coisas)[1]; 
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function testeParametros(p1, p2){
   return p1[p2]; 
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
 var arr = ['giovanna ', 1.58, 26, null, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(testeParametros(arr, 0)); 
console.log(testeParametros(arr, 1)); 
console.log(testeParametros(arr, 2)); 
console.log(testeParametros(arr, 3)); 
console.log(testeParametros(arr, 4)); 
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
    const bname = {
        'GF- biografia':{
            quantidadePaginas: 150, 
            autor: "giovanna", 
            editora: "Gioohs"
        }, 
        'testando a paciencia':{
            quantidadePaginas: 50, 
            autor: "Claudio", 
            editora: "Gioohs"
        }, 
        'como ser o melhor streamer':{
            quantidadePaginas: 50, 
            autor: "Alanzoka", 
            editora: "lives do alanzoka"
        }
    }; 
  return !bookName ? bname : bname[bookName]; 
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro testando a paciencia tem " + book('testando a paciencia').quantidadePaginas +  'páginas!'); 
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro GF - biografia é " + book('GF- biografia').autor ); 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro como ser o melhor streamer foi publicado pela editora' +  book('como ser o melhor streamer').editora + "." ); 



