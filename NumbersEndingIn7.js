function numbersEnding7()
{
    for(let index = 7; index <= 1000; index++)
    {
        if(index % 10 == 7)
        {
            console.log(index);
        }
    }
}

numbersEnding7();