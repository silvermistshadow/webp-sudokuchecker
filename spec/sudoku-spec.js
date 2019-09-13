import { Sudoku } from '../src/Sudoku'

describe('Sudoku', function() {
  let grid = [
    [5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]
  ];
  
  let failGrid = [
    [5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],[2,8,7,4,1,1,6,3,5],[3,4,5,2,8,6,1,7,9]
  ];
  let goodSudoku = new Sudoku(grid);
  let badSudoku = new Sudoku(failGrid);
  it('should test if all entries have valid rows', function() {
    expect(goodSudoku.checkRows()).toEqual(true);
    expect(badSudoku.checkRows()).toEqual(false);
  })

  it('should check if all entries have valid columns', function() {
    expect(goodSudoku.checkColumns()).toEqual(true);
    expect(badSudoku.checkColumns()).toEqual(false);
  })

})