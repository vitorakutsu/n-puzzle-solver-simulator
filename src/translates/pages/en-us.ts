export const enUsPageTranslations = {
  pages: {
    home: {
      title: 'NPuzzle Solver',
      paragraph:
        'This ReactJS application simulates the solution of NPuzzle using heuristic search algorithms. The user can freely configure both the initial and final states of the puzzle, allowing for custom piece arrangements. The interface visualizes the solving process in real-time, showing how the algorithm navigates between different states to find the solution. Ideal for understanding the workings of heuristic search algorithms interactively and dynamically.',
      button: {
        howItWorks: 'How does it work?',
        start: 'Start',
      },
    },
    about: {
      title: 'NPuzzle Solver',
      subtitle: 'About',
      paragraph:
        'The NPuzzle Solver application in ReactJS was developed to simulate the resolution of NPuzzle using heuristic search algorithms. It allows the user to customize the initial and final state of the puzzle, choosing different heuristics to solve the problem and visualizing the search process in real-time. Created as an interactive educational tool, the application was built with ReactJS and other libraries to optimize visualization and calculation of solutions. Made by Vitor Eyki Akutsu and Pedro Correia Felitto, both from the Sixth Term of the Bachelor’s Degree in Computer Science at Unoeste.',
      button: {
        start: 'Start',
      },
    },
    finalState: {
      title: 'Choose the final state',
      subtitle: 'Let’s get started',
      paragraph:
        'You will need to define the final state of the NPuzzle. This state represents the goal that the algorithm will try to reach, meaning the correct arrangement of pieces on the board. You will be able to drag and drop the pieces to organize the puzzle as you wish or choose from some pre-defined configurations. This will be the layout that the algorithm will reference when trying to solve the puzzle.',
      button: {
        shuffle: 'Shuffle',
        next: 'Next',
      },
    },
    initialState: {
      title: 'Choose the initial state',
      subtitle: 'Let’s get started',
      paragraph:
        'After defining the final state, you must set up the initial state of the NPuzzle. Here, you build the initial configuration of the puzzle, which is the starting point for the algorithm. Just like in the selection of the final state, you will be able to move the pieces to choose how they will be arranged at the beginning of the simulation. It is from this configuration that the algorithm will start searching for the solution, making the necessary moves until it reaches the final state.',
      button: {
        shuffle: 'Shuffle',
        back: 'Back',
        next: 'Next',
      },
    },
    algorithm: {
      title: 'Choose the algorithm',
      subtitle: 'Let’s get started',
      paragraph:
        'With the final state and the initial state defined, you can choose from different types of heuristic algorithms, each with a unique approach to solving the NPuzzle. For example, some algorithms may prioritize the fastest solution, while others focus on exploring different paths efficiently. You will be able to select the algorithm you want to test to visualize the puzzle resolution.',
      button: {
        chooseAnAlgorithm: 'Choose an algorithm',
        back: 'Back',
        start: 'Start',
      },
      radio: {
        label: 'Choose an algorithm',
      },
    },
    howItWorks: {
      title: 'NPuzzle Solver',
      subtitle: 'How does it work?',
      steps: [
        {
          title: '1. Choosing the Initial and Final States:',
          text: [
            {
              paragraph:
                '• The user can define the initial state of the NPuzzle, meaning the arrangement of pieces at the start of the game.',
            },
            {
              paragraph:
                '• The final state, which represents the goal, can also be configured. Generally, the final state corresponds to the pieces organized in numerical order, but the user can customize it.',
            },
          ],
        },
        {
          title: '2. Selection of the Heuristic Algorithm:',
          text: [
            {
              paragraph:
                '• The application offers different heuristic search algorithms to solve the puzzle.',
            },
            {
              paragraph:
                '• The user can select the desired algorithm, each with its own strategy for finding the most efficient solution.',
            },
          ],
        },
        {
          title: '3. Starting the Simulation:',
          text: [
            {
              paragraph:
                '• When the simulation starts, the algorithm begins to explore possible moves, searching for a solution that takes the initial state to the final state.',
            },
            {
              paragraph:
                '• The interface visually displays each step of the process, allowing the user to follow how the algorithm navigates through different states of the puzzle.',
            },
          ],
        },
        {
          title: '4. Visualization of the Resolution Process:',
          text: [
            {
              paragraph:
                '• The application shows the sequence of moves that the algorithm makes to solve the puzzle, including which pieces are moved and in which direction.',
            },
          ],
        },
      ],
      button: {
        start: 'Start',
      },
    },
    processing: {
      title: 'Resolving',
    },
    result: {
      title: 'Done!',
      info: {
        title: 'Resolution Information',
        algorithm: 'Algorithm:',
        openedList: 'Open List:',
        closedList: 'Closed List:',
        time: 'Time:',
        distance: 'Distance:',
      },
      button: {
        stepByStep: 'View step by step',
        tryAgain: 'Try again',
        compare: 'Compare algorithms',
      },
    },
  },
};
