interface Node {
  state: number[];
  h: number;
  parent?: Node;
}

const getMisplacedTiles = (state: number[], final: number[]): number => {
  let misplacedTiles = 0;
  for (let i = 0; i < state.length; i++) {
    if (state[i] !== 0 && state[i] !== final[i]) {
      misplacedTiles++;
    }
  }
  return misplacedTiles;
};

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

// const getEuclideanDistance = (state: number[], final: number[]): number => {
//   let distance = 0;
//   for (let i = 0; i < state.length; i++) {
//     const value = state[i];
//     if (value !== 0) {
//       const targetIndex = final.indexOf(value);
//       const targetRow = Math.floor(targetIndex / 3);
//       const targetCol = targetIndex % 3;
//       const currentRow = Math.floor(i / 3);
//       const currentCol = i % 3;
//       distance += Math.sqrt(Math.pow(targetRow - currentRow, 2) + Math.pow(targetCol - currentCol, 2));
//     }
//   }
//   return distance;
// };

export const greedySearch = (
  initialState: number[],
  finalState: number[],
  level: number,
  isManhattan: boolean
): { path: number[][]; openedList: number; closedList: number; time: number } => {
  const openList: Node[] = [];
  const closedList: Set<string> = new Set();
  const nodeMap = new Map<string, Node>();

  const startNode: Node = {
    state: initialState,
    h: isManhattan
      ? getManhattanDistance(initialState, finalState)
      : getMisplacedTiles(initialState, finalState),
  };

  openList.push(startNode);
  nodeMap.set(startNode.state.toString(), startNode);

  const startTime = performance.now();

  while (openList.length > 0) {
    openList.sort((a, b) => a.h - b.h);
    const currentNode = openList.shift()!;

    if (currentNode.state.toString() === finalState.toString()) {
      const endTime = performance.now();
      const path = [];
      let tempNode: Node | undefined = currentNode;
      while (tempNode) {
        path.unshift(tempNode.state);
        tempNode = tempNode.parent;
      }
      return { path, openedList: openList.length, closedList: closedList.size, time: endTime - startTime };
    }

    closedList.add(currentNode.state.toString());
    nodeMap.delete(currentNode.state.toString());

    const neighbors = getNeighbors(currentNode.state);

    for (const neighbor of neighbors) {
      if (closedList.has(neighbor.toString())) continue;

      let hScore = isManhattan
        ? getManhattanDistance(neighbor, finalState)
        : getMisplacedTiles(neighbor, finalState);

      if (level === 2) {
        const secondLevelNeighbors = getNeighbors(neighbor);
        for (const secondNeighbor of secondLevelNeighbors) {
          const secondLevelHScore = isManhattan
            ? getManhattanDistance(secondNeighbor, finalState)
            : getMisplacedTiles(secondNeighbor, finalState);
          hScore = Math.min(hScore, secondLevelHScore);
        }
      }

      const neighborNode: Node = {
        state: neighbor,
        h: hScore,
        parent: currentNode,
      };

      if (!nodeMap.has(neighbor.toString())) {
        openList.push(neighborNode);
        nodeMap.set(neighbor.toString(), neighborNode);
      } else if (hScore < nodeMap.get(neighbor.toString())!.h) {
        openList[openList.findIndex((n) => n.state.toString() === neighbor.toString())] = neighborNode;
        nodeMap.set(neighbor.toString(), neighborNode);
      }
    }
  }

  return {
    path: [],
    openedList: openList.length,
    closedList: closedList.size,
    time: performance.now() - startTime,
  };
};
