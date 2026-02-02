/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
     const m = grid.length;
        const n = grid[0].length;

        const queue = [];
        let fresh = 0;

        // 1. Initialize queue with all rotten oranges
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) queue.push([i, j]);
                else if (grid[i][j] === 1) fresh++;
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let minutes = 0;
        let index = 0;

        // 2. Level-by-level BFS
        while (index < queue.length && fresh > 0) {
            const size = queue.length - index;

            for (let i = 0; i < size; i++) {
                const [x, y] = queue[index++];

                for (const [dx, dy] of dirs) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (
                        nx >= 0 && nx < m &&
                        ny >= 0 && ny < n &&
                        grid[nx][ny] === 1
                    ) {
                        grid[nx][ny] = 2;
                        fresh--;
                        queue.push([nx, ny]);
                    }
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
};