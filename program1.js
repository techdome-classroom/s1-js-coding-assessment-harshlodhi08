const getTotalIsles = function (grid) {
  function numIslands(grid) {
    // Edge case: empty grid
    if (!grid || grid.length === 0) {
      return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Depth-First Search (DFS) function to explore the island
    function dfs(r, c) {
      // Check if we're out of bounds, or it's water ('W'), or already visited
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
        return;
      }

      visited[r][c] = true; // Mark the current cell as visited

      // Explore all four adjacent cells (up, down, left, right)
      dfs(r + 1, c); // Down
      dfs(r - 1, c); // Up
      dfs(r, c + 1); // Right
      dfs(r, c - 1); // Left
    }

    let islandCount = 0; // To keep track of the number of islands

    // Traverse through the grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // If we find an unvisited land ('L'), it indicates a new island
        if (grid[r][c] === 'L' && !visited[r][c]) {
          dfs(r, c); // Perform DFS to mark the whole island
          islandCount++; // Increment the island count
        }
      }
    }

    return islandCount;
  }

  return numIslands(grid);
}

// Example usage:
const grid1 = [
  ['L', 'L', 'L', 'L', 'W'],
  ['L', 'L', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
];

const grid2 = [
  ['L', 'L', 'W', 'W', 'W'],
  ['L', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L'],
];

console.log(getTotalIsles(grid1)); // Output: 1
console.log(getTotalIsles(grid2)); // Output: 3

module.exports = getTotalIsles;
