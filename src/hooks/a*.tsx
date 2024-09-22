interface Node {
  state: number[];
  g: number;
  h: number;
  f: number;
  parent?: Node;
}

const getManhattanDistance = (state: number[], final: number[]): number => {
  let distance = 0;
  for (let i = 0; i < state.length; i++) {
    const value = state[i];
    if (value !== 0) {
      const targetIndex = final.indexOf(value);
      const targetRow = Math.floor(targetIndex / 3);
      const targetCol = targetIndex % 3;
      const currentRow = Math.floor(i / 3);
      const currentCol = i % 3;
      distance += Math.abs(targetRow - currentRow) + Math.abs(targetCol - currentCol);
    }
  }
  return distance;
};

const getNeighbors = (state: number[]): number[][] => {
  const neighbors: number[][] = [];
  const zeroIndex = state.indexOf(0);
  const row = Math.floor(zeroIndex / 3);
  const col = zeroIndex % 3;
  const directions = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
  ];

  for (const { row: dRow, col: dCol } of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;
    if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3) {
      const newIndex = newRow * 3 + newCol;
      const newState = [...state];
      [newState[zeroIndex], newState[newIndex]] = [newState[newIndex], newState[zeroIndex]];
      neighbors.push(newState);
    }
  }

  return neighbors;
};

export const aStarSearch = (
  initialState: number[],
  finalState: number[]
): { path: number[][]; steps: number; time: number } => {
  const openList: Node[] = [];
  const closedList: Set<string> = new Set();
  const startNode: Node = {
    state: initialState,
    g: 0,
    h: getManhattanDistance(initialState, finalState),
    f: 0,
  };
  startNode.f = startNode.g + startNode.h;

  openList.push(startNode);
  const startTime = performance.now();

  while (openList.length > 0) {
    openList.sort((a, b) => a.f - b.f);
    const currentNode = openList.shift()!;

    if (currentNode.state.toString() === finalState.toString()) {
      const endTime = performance.now();
      const path = [];
      let tempNode: Node | undefined = currentNode;
      while (tempNode) {
        path.unshift(tempNode.state);
        tempNode = tempNode.parent;
      }
      return { path, steps: closedList.size, time: endTime - startTime };
    }

    closedList.add(currentNode.state.toString());

    const neighbors = getNeighbors(currentNode.state);
    for (const neighbor of neighbors) {
      if (closedList.has(neighbor.toString())) continue;

      const gScore = currentNode.g + 1;
      const hScore = getManhattanDistance(neighbor, finalState);
      const fScore = gScore + hScore;

      const existingNodeIndex = openList.findIndex((node) => node.state.toString() === neighbor.toString());
      if (existingNodeIndex === -1 || fScore < openList[existingNodeIndex].f) {
        const newNode: Node = {
          state: neighbor,
          g: gScore,
          h: hScore,
          f: fScore,
          parent: currentNode,
        };

        if (existingNodeIndex === -1) {
          openList.push(newNode);
        } else {
          openList[existingNodeIndex] = newNode;
        }
      }
    }
  }

  return { path: [], steps: closedList.size, time: performance.now() - startTime };
};
