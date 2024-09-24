function sumSeconds(min, sec, hours)
{
    let totalTime = min + sec + hours;
    let minutes = Math.floor(totalTime / 60);
    let seonds = totalTime % 60;

    if(seonds < 10)
    {
        console.log(`${minutes}:0${seonds}`);
    }
    else
    {
        console.log(`${minutes}:${seonds}`);
    }
}