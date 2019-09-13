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
    let check = true;
    let box1 = this.boxMaker(0, 0, 2, 2);
    let box2 = this.boxMaker(3, 0, 5, 2);
    let box3 = this.boxMaker(6, 0, 8, 2);
    let box4 = this.boxMaker(0, 3, 2, 5);
    let box5 = this.boxMaker(3, 3, 5, 5);
    let box6 = this.boxMaker(6, 3, 8, 5);
    let box7 = this.boxMaker(0, 6, 2, 8);
    let box8 = this.boxMaker(3, 6, 5, 8);
    let box9 = this.boxMaker(6, 6, 8, 8);
    let gridOfBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    gridOfBoxes.forEach(function(box) {
      for(let x=1; x<=9; x++){
        if(!(box.includes(x))){
          check = false;
        }
      }
    })
    return check;
  }

  boxMaker(minX, minY, maxX, maxY) {
    var boxContainer = [];
    for (let x = minX; x<=maxX; x++) {
      for (let y = minY; y<=maxY; y++) {
        boxContainer.push(this.grid[y][x]);
      }

    }
    return boxContainer;
  }


}
