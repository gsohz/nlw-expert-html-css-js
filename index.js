const perguntas = [
  {
    pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
    respostas: [
      'Exibir uma mensagem de erro',
      'Imprimir dados no console',
      'Criar uma variável'
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
    respostas: [
      'Comparação de valores sem considerar o tipo',
      'Atribuição de valores',
      'Comparação estrita de valores e tipos'
    ],
    correta: 2
  },
  {
    pergunta: 'Como se declara uma variável em JavaScript?',
    respostas: [
      'let myVar;',
      'const myVar = 10;',
      'ambas as opções acima estão corretas'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é uma função em JavaScript?',
    respostas: [
      'Um tipo de dado',
      'Um bloco de código reutilizável',
      'Uma variável global'
    ],
    correta: 1
  },
  {
    pergunta:
      "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      'Nenhuma, são sinônimos',
      'let é usado para valores constantes, const para variáveis',
      'let permite reatribuição, const cria variáveis imutáveis'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é o DOM em JavaScript?',
    respostas: [
      'Um método de criptografia',
      'Um modelo de objeto para manipular documentos HTML',
      'Uma linguagem de programação'
    ],
    correta: 1
  },
  {
    pergunta:
      'Como se realiza uma iteração sobre os elementos de um array em JavaScript?',
    respostas: [
      "Usando a estrutura 'if-else'",
      "Com a declaração 'switch'",
      "Utilizando loops como 'for' ou 'forEach'"
    ],
    correta: 2
  },
  {
    pergunta: 'O que é o JSON em JavaScript?',
    respostas: [
      'Um método de formatação de texto',
      'Uma linguagem de estilização',
      'Um formato de dados leve e intercambiável'
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      'São iguais, usados de forma intercambiável',
      "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
      'Ambos representam valores vazios'
    ],
    correta: 1
  },
  {
    pergunta:
      'Como se adiciona um evento a um elemento HTML usando JavaScript?',
    respostas: [
      'Apenas com CSS',
      "Usando o atributo 'event'",
      "Através do método 'addEventListener'"
    ],
    correta: 2
  }
]

//seleciona elemento onde o js vai adicionar as perguntas e respostas
const quiz = document.querySelector('#quiz')
//seleciona elemento de template para as perguntas e respostas
const template = document.querySelector('template')

//para cada pergunta dentro do array vamos adicionar os elementos na pagina
for (const item of perguntas) {
  //clona o nó completo do template incluindo os filhos
  const quizItem = template.content.cloneNode(true)

  //seleciona o elemento h3 onde está localizada a pergunta e define com a pergunta do index atual
  quizItem.querySelector('h3').textContent = item.pergunta

  //para cada resposta disponivel em uma pergunta vamos adiciona-la na pagina
  for (const resposta of item.respostas) {
    //clona o nó 'dt' completo permitindo acesso ao filhos
    const dt = quizItem.querySelector('dl dt').cloneNode(true)

    //substitui o texto de span para a resposta do index atual
    dt.querySelector('span').textContent = resposta

    //escreve na tela adicionando o nó em dl
    quizItem.querySelector('dl').appendChild(dt)
  }

  //remove o primeiro dt de todas as perguntas que é nosso template 'Resposta A'
  quizItem.querySelector('dl dt').remove()

  //adiciona o nó montado como filho da div #quiz
  quiz.appendChild(quizItem)
}
