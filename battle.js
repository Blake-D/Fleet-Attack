// var fleet = [
//     {
//         name: 'ship0',
//         power: 93480,
//         role: 'Support'
//     },
//     {
//         name: 'ship1',
//         power: 96946,
//         role: 'Support'
//     }, 
//     {
//         name: 'ship2',
//         power: 85170,
//         role: 'Tank'
//     },
//     {
//         name: 'ship3',
//         power: 97503,
//         role: 'Attacker'
//     },
//     {
//         name: 'ship4',
//         power: 71758,
//         role: 'Attacker'
//     }
// ]

// var enemy = [
//     {
//         name: 'ship0',
//         power: 89801,
//         role: 'Attacker'
//     },
//     {
//         name: 'ship1',
//         power: 76271,
//         role: 'Tank'
//     }, 
//     {
//         name: 'ship2',
//         power: 81177,
//         role: 'Capital Ship'
//     },
//     {
//         name: 'ship3',
//         power: 76271,
//         role: 'Tank'
//     },
//     {
//         name: 'ship4',
//         power: 89801,
//         role: 'Attacker'
//     }
// ]

// let fleetAlive = true

// let enemyAlive = true

// function scanForWin() {
//     if (fleet[0].power > 0 || fleet[1].power > 0 || fleet[2].power > 0 || fleet[3].power > 0 || fleet[4].power > 0) {
//         fleetAlive = true
//     } else {
//         fleetAlive = false
//         console.log('You Lose!')
//     }
//     if (enemy[0].power > 0 || enemy[1].power > 0 || enemy[2].power > 0 || enemy[3].power > 0 || enemy[4].power > 0) {
//         enemyAlive = true
//     } else {
//         enemyAlive = false
//         console.log('You Win!')
//     }
// }

// while (fleetAlive === true && enemyAlive === true) {
//     if (fleet[0].role === 'Capital Ship') {
//         enemy[0].power = enemy[0].power - 10000
//         fleet[0].power = fleet[0].power - 5000
//     } else if (fleet[0].role === 'Tank') {
//         enemy[0].power = enemy[0].power - 5000
//         fleet[0].power = fleet[0].power - 10000
//     } else {
//         enemy[0].power = enemy[0].power - 5000
//         fleet[0].power = fleet[0].power - 5000
//     }
//     if (fleet[1].role === 'Attacker' || fleet[1].role === 'Support') {
//         enemy[1].power = enemy[1].power - 10000
//         fleet[1].power = fleet[1].power - 5000
//     } else if (fleet[1].role === 'Capital Ship') {
//         enemy[1].power = enemy[1].power - 5000
//         fleet[1].power = fleet[1].power - 10000
//     } else {
//         enemy[1].power = enemy[1].power - 5000
//         fleet[1].power = fleet[1].power - 5000
//     }
//     if (fleet[2].role === 'Tank') {
//         enemy[2].power = enemy[2].power - 10000
//         fleet[2].power = fleet[2].power - 5000
//     } else if (fleet[2].role === 'Attacker' || fleet[2].role === 'Support') {
//         enemy[2].power = enemy[2].power - 5000
//         fleet[2].power = fleet[2].power - 10000
//     } else {
//         enemy[2].power = enemy[2].power - 5000
//         fleet[2].power = fleet[2].power - 5000
//     }
//     if (fleet[3].role === 'Attacker' || fleet[3].role === 'Support') {
//         enemy[3].power = enemy[3].power - 10000
//         fleet[3].power = fleet[3].power - 5000
//     } else if (fleet[3].role === 'Capital Ship') {
//         enemy[3].power = enemy[3].power - 5000
//         fleet[3].power = fleet[3].power - 10000
//     } else {
//         enemy[3].power = enemy[3].power - 5000
//         fleet[3].power = fleet[3].power - 5000
//     }
//     if (fleet[4].role === 'Capital Ship') {
//         enemy[4].power = enemy[4].power - 10000
//         fleet[4].power = fleet[4].power - 5000
//     } else if (fleet[4].role === 'Tank') {
//         enemy[4].power = enemy[4].power - 5000
//         fleet[4].power = fleet[4].power - 10000
//     } else {
//         enemy[4].power = enemy[4].power - 5000
//         fleet[4].power = fleet[4].power - 5000
//     }
//     console.log(fleet[0].power, fleet[1].power, fleet[2].power, fleet[3].power, fleet[4].power)
//     scanForWin()
// }


// ***