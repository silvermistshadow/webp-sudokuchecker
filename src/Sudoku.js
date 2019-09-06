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
}
