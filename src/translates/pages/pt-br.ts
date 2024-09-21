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
  },
};
