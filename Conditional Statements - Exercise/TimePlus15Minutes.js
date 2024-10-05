function timePlus15Minutes(hour, min)
{
    let totalMin = hour * 60 + min + 15;

    let newHour = Math.floor(totalMin / 60);
    let newMin = totalMin % 60;

    if(newHour === 24)
    {
        newHour = 0;
    }

    if(newMin < 10)
    {
        console.log(`${newHour}:0${newMin}`);
    }
    else
    {
        console.log(`${newHour}:${newMin}`);
    }
}

timePlus15Minutes(23, 59)