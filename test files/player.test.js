import Player from '../classes/player.js';

test('creation of instance of player class works', () => {
  const player = new Player();
  expect(player.wins).toEqual(0);
});

test('when addWin method runs, player win total goes up by one', () => {
  const player = new Player();
  expect(player.addWin()).toEqual(1);
});

test('when addLoss method runs, player loss total goes up by one', () => {
  const player = new Player();
  expect(player.addLoss()).toEqual(1);
});

test('when addDraw method runs, player draw total goes up by one', () => {
  const player = new Player();
  expect(player.addDraw()).toEqual(1);
});
