import TeamIterator from '../TeamIterator';
import TeamGenerator from '../TeamGenerator';

const testData = [
  {
    name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Маг', type: 'Magician', health: 50, level: 1, attack: 10, defence: 40,
  },
  {
    name: 'Мечник', type: 'Swordsman', health: 50, level: 1, attack: 25, defence: 25,
  },
];

test('Team Iterator test', () => {
  const testTeamIterator = new TeamIterator(...testData);
  const newData = [];
  for (const member of testTeamIterator) {
    newData.push(member);
  }
  expect(newData).toEqual(testData);
});

test('Team Generator test', () => {
  const testTeamGenerator = new TeamGenerator(...testData);
  const newData = [];
  for (const member of testTeamGenerator) {
    newData.push(member);
  }
  expect(newData).toEqual(testData);
});
