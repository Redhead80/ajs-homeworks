import Zombie from '../zombie';

test('should return an object with attack 40 and defense 10. Type - Zombie.', () => {
  const zombie = {
    name: 'test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('test')).toMatchObject(zombie);
});