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
    let mainArray = [];
    this.grid.forEach(function(column) {
      for(let x=0; x<9; x++){
        let tempArray = [];
        for(let y=0; y<9; y++){
          tempArray.push(grid[x][y])
        }
        mainArray.push(tempArray)
        let tempSudoku = new Sudoku(mainArray);
        check = tempSudoku.checkRows();
      }

    })
    return check;
  }

}
