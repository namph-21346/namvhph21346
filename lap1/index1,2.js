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
for (const [i, player] of game.scored.entries())
    console.log(`goal ${i + 1}: ${player}`);
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}