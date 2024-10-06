import { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import { aStarSearch } from '~/hooks/a-star-search';
import { greedySearch } from '~/hooks/greedy-search';
import { Algorithm, IInfoState, IShuffleState, ISolve, ISolveState, SolveSteps, State } from './types';
import { useTranslation } from '~/translates/use-translation';

const INITIAL_STATE = {
  final: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  initial: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  algorithm: 'A*' as Algorithm,
  level: 1,
  distance: 'Manhattan',
};

const INITIAL_SHUFFLE_STATE = {
  final: false,
  initial: false,
};

export const useSolve = (): ISolve => {
  const translate = useTranslation('document');

  const [step, setStep] = useState(SolveSteps.FINAL_STATE);
  const [state, setState] = useState<ISolveState>(INITIAL_STATE);
  const [shuffle, setShuffle] = useState<IShuffleState>(INITIAL_SHUFFLE_STATE);
  const [result, setResult] = useState<IInfoState>({
    path: [],
    openedList: 0,
    closedList: 0,
    time: 0,
    algorithm: state.algorithm,
    distance: state.distance,
  });

  const currentStepRef = useRef(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const onChangeStep = (newStep: SolveSteps) => {
    if (newStep === SolveSteps.INITIAL_STATE) setState({ ...state, initial: state.final });
    if (newStep === SolveSteps.FINAL_STATE) {
      setState(INITIAL_STATE);
      setShuffle(INITIAL_SHUFFLE_STATE);
    }
    setStep(newStep);
  };

  const onChangeState = (type: State, newState: number[]) => {
    if (type === 'final') setState({ ...state, final: newState });
    if (type === 'initial') setState({ ...state, initial: newState });
  };

  const handleShuffle = (type: State) => {
    setShuffle({ ...shuffle, [type]: true });
    setTimeout(() => {
      setShuffle({ ...shuffle, [type]: false });
    }, 5000);
  };

  const onSelectAlgorithm = (algorithm: string) => {
    setState({ ...state, algorithm: algorithm as Algorithm });
  };

  const onSelectSearchLevel = (level: string) => {
    setState({ ...state, level: parseInt(level) });
  };

  const onSelectDistance = (distance: string) => {
    setState({ ...state, distance });
  };

  const handleSolve = async () => {
    onChangeStep(SolveSteps.PROCESSING);

    const { algorithm, initial, final, level } = state;

    await new Promise<{ path: number[][]; openedList: number; closedList: number; time: number }>(
      (resolve) => {
        let result;

        if (algorithm === 'A*') {
          result = aStarSearch(initial, final, level, state.distance === 'Manhattan');
        } else if (algorithm === 'Greedy') {
          result = greedySearch(initial, final, level, state.distance === 'Manhattan');
        }

        setResult({ ...result, algorithm, distance: state.distance });
        result && resolve(result);
      }
    ).finally(() => {
      setTimeout(() => {
        onChangeStep(SolveSteps.RESULT);
      }, 3000);
    });
  };

  const onStepByStep = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    currentStepRef.current = 0;

    if (result.path && result.path.length > 0) {
      intervalIdRef.current = setInterval(() => {
        if (result.path && currentStepRef.current < result.path.length) {
          onChangeState('initial', result.path[currentStepRef.current]);
          currentStepRef.current += 1;
        } else {
          clearInterval(intervalIdRef.current!);
        }
      }, 500);
    }
  };

  const compareAlgorithms = async () => {
    const { initial, final, level, distance } = state;

    const aStarResult = aStarSearch(initial, final, level, distance === 'Manhattan');

    const greedyResult = greedySearch(initial, final, level, distance === 'Manhattan');

    const data = {
      aStar: {
        pathLength: aStarResult.path.length,
        openedList: aStarResult.openedList,
        closedList: aStarResult.closedList,
        time: aStarResult.time,
      },
      greedy: {
        pathLength: greedyResult.path.length,
        openedList: greedyResult.openedList,
        closedList: greedyResult.closedList,
        time: greedyResult.time,
      },
      distance,
    };

    generatePdfReport(data);
  };

  const generatePdfReport = (data: any) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(translate('comparisonReport'), 10, 10);

    doc.setFontSize(14);
    doc.text(translate('distanceUsed'), 10, 20);
    doc.setFontSize(12);
    doc.text(`${translate('distance')}: ${data.distance}`, 10, 30);

    doc.setFontSize(14);
    doc.text(translate('aStarTitle'), 10, 50);
    doc.setFontSize(12);
    doc.text(`${translate('pathLength')}: ${data.aStar.pathLength}`, 10, 60);
    doc.text(`${translate('openedNodes')}: ${data.aStar.openedList}`, 10, 70);
    doc.text(`${translate('closedNodes')}: ${data.aStar.closedList}`, 10, 80);
    doc.text(`${translate('time')}: ${data.aStar.time.toFixed(2)} ms`, 10, 90);

    doc.setFontSize(14);
    doc.text(translate('greedyTitle'), 10, 110);
    doc.setFontSize(12);
    doc.text(`${translate('pathLength')}: ${data.greedy.pathLength}`, 10, 120);
    doc.text(`${translate('openedNodes')}: ${data.greedy.openedList}`, 10, 130);
    doc.text(`${translate('closedNodes')}: ${data.greedy.closedList}`, 10, 140);
    doc.text(`${translate('time')}: ${data.greedy.time.toFixed(2)} ms`, 10, 150);

    doc.setFontSize(14);
    doc.text(translate('conclusion'), 10, 170);
    if (data.aStar.time < data.greedy.time) {
      doc.text(translate('aStarFaster'), 10, 180);
    } else {
      doc.text(translate('greedyFaster'), 10, 180);
    }

    doc.save('algorithm_comparison.pdf');
  };

  return {
    step,
    state,
    shuffle,
    info: result,
    onChangeStep,
    onChangeState,
    onSelectAlgorithm,
    onSelectSearchLevel,
    onSelectDistance,
    onCompareAlgorithms: compareAlgorithms,
    handleShuffle,
    handleSolve,
    onStepByStep,
  };
};
