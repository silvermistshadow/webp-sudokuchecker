export class Sudoku {
  constructor(grid) {
    this.grid = grid;
  }
  checkRows() {
    let check = true;
    this.grid.forEach(function(row) {
      for(var x=1; x<=9; x++){
        if (!(row.includes(x))){
          check = false;
        }
      }
    })
    return check;
  }
  checkColumns() {
    let check = true;
    var newGrid = [];
    for (var x = 0; x<9;x++){
        var column = [];
        for (var y = 0; y<9; y++)
        {
            column.push(this.grid[y][x])
        }
        newGrid.push(column);
    }
    var newSudoku = new Sudoku(newGrid)
    return newSudoku.checkRows();
  }

  checkGrid() {
    
  }

}
