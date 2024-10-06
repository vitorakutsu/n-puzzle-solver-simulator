export enum SolveSteps {
  FINAL_STATE = 'finalState',
  INITIAL_STATE = 'initialState',
  ALGORITHM = 'algorithm',
  PROCESSING = 'processing',
  RESULT = 'result',
}

export interface ISolve {
  step: SolveSteps;
  state: ISolveState;
  shuffle: IShuffleState;
  info: IInfoState;
  onChangeStep: (step: SolveSteps) => void;
  onChangeState: (type: State, newState: number[]) => void;
  onSelectAlgorithm: (algorithm: string) => void;
  onSelectSearchLevel: (level: string) => void;
  onSelectDistance: (distance: string) => void;
  onCompareAlgorithms: () => void;
  handleShuffle: (type: State) => void;
  handleSolve: () => void;
  onStepByStep: () => void;
}

export type Algorithm = 'A*' | 'Greedy';
export type State = 'final' | 'initial';

export interface ISolveState {
  final: number[];
  initial: number[];
  algorithm: Algorithm;
  level: number;
  distance: string;
}

export interface IShuffleState {
  final: boolean;
  initial: boolean;
}

export interface IInfoState {
  path?: number[][];
  openedList?: number;
  closedList?: number;
  time?: number;
  algorithm?: Algorithm;
  distance?: string;
}
