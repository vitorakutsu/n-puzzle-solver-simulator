export const ptBrPageTranslations = {
  pages: {
    home: {
      title: 'NPuzzle Solver',
      paragraph:
        'Esta aplicação em ReactJS simula a resolução do NPuzzle utilizando algoritmos de busca heurística. O usuário pode configurar livremente tanto o estado inicial quanto o estado final do quebra-cabeça, permitindo personalizar as posições das peças. A interface visualiza o processo de resolução em tempo real, mostrando como o algoritmo navega entre diferentes estados para encontrar a solução. Ideal para entender o funcionamento de algoritmos de busca heurística de forma interativa e dinâmica.',
      button: {
        howItWorks: 'Como funciona?',
        start: 'Começar',
      },
    },
    about: {
      title: 'NPuzzle Solver',
      subtitle: 'Sobre',
      paragraph:
        'A aplicação NPuzzle Solver em ReactJS foi desenvolvida para simular a resolução do NPuzzle utilizando algoritmos de busca heurística. Ela permite que o usuário personalize o estado inicial e final do quebra-cabeça, escolhendo diferentes heurísticas para resolver o problema e visualizar o processo de busca em tempo real. Criada com o objetivo de fornecer uma ferramenta educacional interativa, a aplicação foi construída com ReactJS e outras bibliotecas para otimizar a visualização e o cálculo das soluções. Feito por Vitor Eyki Akutsu e Pedro Correia Felitto, ambos do Sexto Termo de Bacharelado em Ciência da Unoeste.',
      button: {
        start: 'Começar',
      },
    },
    finalState: {
      title: 'Escolha o estado final',
      subtitle: 'Vamos começar',
      paragraph:
        'Você precisará definir o estado final do NPuzzle. Esse estado representa o objetivo que o algoritmo tentará alcançar, ou seja, a disposição correta das peças no tabuleiro. Você poderá arrastar e soltar as peças para organizar o puzzle da forma que deseja ou escolher entre algumas configurações pré-definidas. Este será o layout que o algoritmo terá como referência ao tentar resolver o puzzle.',
      button: {
        shuffle: 'Embaralhar',
        next: 'Próximo',
      },
    },
    initialState: {
      title: 'Escolha o estado inicial',
      subtitle: 'Vamos começar',
      paragraph:
        'Após definir o estado final, você deve configurar o estado inicial do NPuzzle. Aqui, você monta a configuração inicial do quebra-cabeça, que é o ponto de partida para o algoritmo. Assim como na seleção do estado final, você poderá mover as peças para escolher como elas estarão dispostas no início da simulação. É a partir dessa configuração que o algoritmo começará a busca pela solução, realizando os movimentos necessários até atingir o estado final.',
      button: {
        shuffle: 'Embaralhar',
        back: 'Voltar',
        next: 'Próximo',
      },
    },
    algorithm: {
      title: 'Escolha o algoritmo',
      subtitle: 'Vamos começar',
      paragraph:
        'Com o estado final e o estado inicial definidos,  você poderá escolher entre diferentes tipos de algoritmos heurísticos, cada um com uma abordagem única para resolver o NPuzzle. Por exemplo, alguns algoritmos podem priorizar a solução mais rápida, enquanto outros focam em explorar diferentes caminhos de maneira eficiente. Você poderá selecionar o algoritmo que deseja testar para visualizar a resolução do puzzle.',
      button: {
        chooseAnAlgorithm: 'Escolher um algoritmo',
        back: 'Voltar',
        start: 'Iniciar',
      },
      radio: {
        label: 'Escolha um algoritmo',
      },
    },
    howItWorks: {
      title: 'NPuzzle Solver',
      subtitle: 'Como funciona?',
      steps: [
        {
          title: '1. Escolha do Estado Inicial e Final:',
          text: [
            {
              paragraph:
                '• O usuário pode definir o estado inicial do NPuzzle, ou seja, a disposição das peças no início do jogo.',
            },
            {
              paragraph:
                '• O estado final, que representa o objetivo, também pode ser configurado. Geralmente, o estado final corresponde às peças organizadas em ordem numérica, mas o usuário pode personalizá-lo.',
            },
          ],
        },
        {
          title: '2. Seleção do Algoritmo Heurístico:',
          text: [
            {
              paragraph:
                '• A aplicação oferece diferentes algoritmos de busca heurística para resolver o quebra-cabeça.',
            },
            {
              paragraph:
                '• O usuário pode selecionar o algoritmo desejado, cada um com sua própria estratégia para encontrar a solução mais eficiente.',
            },
          ],
        },
        {
          title: '3. Início da Simulação:',
          text: [
            {
              paragraph:
                '• Ao iniciar a simulação, o algoritmo começa a explorar os possíveis movimentos, buscando uma solução que leve o estado inicial ao estado final.',
            },
            {
              paragraph:
                '• A interface exibe visualmente cada etapa do processo, permitindo ao usuário acompanhar como o algoritmo navega entre diferentes estados do puzzle.',
            },
          ],
        },
        {
          title: '4. Visualização do Processo de Resolução:',
          text: [
            {
              paragraph:
                '• A aplicação mostra a sequência de movimentos que o algoritmo faz para resolver o puzzle, como quais peças são movidas e em que direção.',
            },
          ],
        },
      ],
      button: {
        start: 'Começar',
      },
    },
    processing: {
      title: 'Resolvendo',
    },
    result: {
      title: 'Pronto!',
      info: {
        title: 'Informações da Resolução',
        algorithm: 'Algoritmo:',
        openedList: 'Open List:',
        closedList: 'Closed List:',
        time: 'Tempo:',
        distance: 'Distância:',
      },
      button: {
        stepByStep: 'Ver passo a passo',
        tryAgain: 'Tentar novamente',
        compare: 'Comparar algoritmos',
      },
    },
  },
};
