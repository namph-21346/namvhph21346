const game = {
    team1: "Manchester United",
    team2: "PSG",
    players: [
        [
            'David de Gea',
            'Maguire',
            'McTominay',
            'Martinez',
            'Casemiro',
            'Bruno',
            'Eriksen',
            'Rashford',
            'Martial',
            'Sancho',
            'Luke Shaw',
        ],
        [
            'Donnarumma',
            'Kimpembe',
            'Ramos',
            'Marquinhos',
            'Diallo',
            'Mendes',
            'Hakimi',
            'Verratt',
            'Mbappes',
            'Messi',
            'Neymar',
        ],
    ],

    score: '3:0',
    scored: ['Rashford', 'Casemiro', 'Rashford'],
    date: 'nov 9th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const playyers1Final = [...players1, 'Atony', 'Ronaldo', 'Fred'];
//5
const {
    odds: { team1, x: draw, team2 }
} = game;
console.log(team1, draw, team2);
//6
function printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
// printGoals('Hakimi', 'Neymar', 'Messi');
// printGoals('Hakimi', 'Neymar');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');