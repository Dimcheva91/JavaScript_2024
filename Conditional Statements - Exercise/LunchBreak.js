function lunchBreak(seriasTitle, episodeDuration, breakDuration)
{
    let lunchDuration = (1/8) * breakDuration;
    let leisureDuration = (1/4) * breakDuration;

    let timeForMovie = breakDuration - lunchDuration - leisureDuration;

    if(timeForMovie >= episodeDuration)
    {
        let timeLeft = timeForMovie - episodeDuration
     console.log(`You have enough time to watch ${seriasTitle} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }
    else
    {
        let timeNeeded = episodeDuration - timeForMovie;
        console.log(`You don't have enough time to watch ${seriasTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

lunchBreak("Game of Thrones", 60, 96)