import { start } from "repl";

export const ptBrPageTranslations = {
  pages: {
    about: {
      title: 'NPuzzle Solver',
      subtitle: 'Sobre',
      paragraph: 'A aplicação NPuzzle Solver em ReactJS foi desenvolvida para simular a resolução do NPuzzle utilizando algoritmos de busca heurística. Ela permite que o usuário personalize o estado inicial e final do quebra-cabeça, escolhendo diferentes heurísticas para resolver o problema e visualizar o processo de busca em tempo real. Criada com o objetivo de fornecer uma ferramenta educacional interativa, a aplicação foi construída com ReactJS e outras bibliotecas para otimizar a visualização e o cálculo das soluções. Feito por Vitor Eyki Akutsu e Pedro Correia Felitto, ambos do Sexto Termo de Bacharelado em Ciência da Unoeste.',
      button: {
        start: 'Começar',
      }
    },
    finalStateChoice: {
      title: 'Escolha o estado final',
      subtitle: 'Vamos começar',
      paragraph: 'Você precisará definir o estado final do NPuzzle. Esse estado representa o objetivo que o algoritmo tentará alcançar, ou seja, a disposição correta das peças no tabuleiro. Você poderá arrastar e soltar as peças para organizar o puzzle da forma que deseja ou escolher entre algumas configurações pré-definidas. Este será o layout que o algoritmo terá como referência ao tentar resolver o puzzle.',
      button: {
        shuffle: 'Embaralhar',
        next: 'Próximo',
      }
    },
    startStateChoice: {
      title: 'Escolha o estado inicial',
      subtitle: 'Vamos começar',
      paragraph: 'Após definir o estado final, você deve configurar o estado inicial do NPuzzle. Aqui, você monta a configuração inicial do quebra-cabeça, que é o ponto de partida para o algoritmo. Assim como na seleção do estado final, você poderá mover as peças para escolher como elas estarão dispostas no início da simulação. É a partir dessa configuração que o algoritmo começará a busca pela solução, realizando os movimentos necessários até atingir o estado final.',
      button: {
        shuffle: 'Embaralhar',
        back: 'Voltar',
        next: 'Próximo',
      }
    },
    algorithmChoice: {
      title: 'Escolha o algoritmo',
      subtitle: 'Vamos começar',
      paragraph: 'Com o estado final e o estado inicial definidos,  você poderá escolher entre diferentes tipos de algoritmos heurísticos, cada um com uma abordagem única para resolver o NPuzzle. Por exemplo, alguns algoritmos podem priorizar a solução mais rápida, enquanto outros focam em explorar diferentes caminhos de maneira eficiente. Você poderá selecionar o algoritmo que deseja testar para visualizar a resolução do puzzle.',
      button: {
        chooseAnAlgorithm: 'Escolher um algoritmo',
        back: 'Voltar',
        next: 'Próximo',
      }
    },
  },
};
