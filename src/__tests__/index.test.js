import Team from '../index';

test('проверка конструктора', () => {
	const setResult = new Set();
	setResult.add('user1');
	setResult.add('user2');
	setResult.add('user3');

	const team = new Team();

	team.add('user1');
	team.add('user2');
	team.add('user3');
	expect(team.members).toEqual(setResult);
});

test('проверка добавления нескольких одинаковых персонажей', () => {
	const start = () => {
		const team = new Team;
		team.add('user1');
		team.add('user2');
		team.add('user3');
		team.add('user3');
	};
	expect(start).toThrow('Such a character is present');
});

test('проверка добавления нескольких персонажей', () => {
	const arr = ['user4', 'user5'];
	const setResult = new Set();
	setResult.add('user1');
	setResult.add('user2');
	setResult.add('user3');
	arr.forEach((element) => {
		setResult.add(element);
	});
	const team = new Team();
	team.add('user1');
	team.add('user2');
	team.add('user3');
	team.addAll(arr)
	expect(team.members).toEqual(setResult);
});

test('проверка конвертации в массив', () => {
	const setResult = ['user1', 'user2', 'user3', 'user4'];
	const team = new Team();
	team.add('user1');
	team.add('user2');
	team.add('user3');
	team.add('user4');
	expect(team.toArray()).toEqual(setResult);
  });