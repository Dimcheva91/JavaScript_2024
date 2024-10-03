function tennisRankList(input)
{
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    
    let pointsWon = 0;
    let winCount = 0;

    for(let index = 2; index < tournamentCount + 2; index++) {
        let tournamentResult = input[index];

        if(tournamentResult == 'W')
        {
            pointsWon += 2000;
            winCount++;
        }
        else if(tournamentResult == 'F')
        {
            pointsWon += 1200;
        }
        else if(tournamentResult == 'SF')
        {
            pointsWon += 720;
        }
    } 

    let averigePoints = pointsWon / tournamentCount;
    let winProcent =( winCount / tournamentCount) * 100;


    console.log(`Final points: ${initialPoints + pointsWon}`);
    console.log(`Average points: ${Math.floor(averigePoints)}`);
    console.log(`${winProcent.toFixed(2)}%`);
}

tennisRankList(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
    