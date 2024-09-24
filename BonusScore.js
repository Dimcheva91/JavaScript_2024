function bonusScore(number)
{
    let countBonus = 0;

    if(number <= 100)
    {
        countBonus = 5;

        if(number % 2 == 0)
        {
            countBonus +=1;
        }
        else if(number % 10 == 5)
        {
            countBonus += 2;
        }
    }
    else if(number >100.1 && number <= 1000)
    {
        countBonus = (20 * number)/100;;

        if(number % 2 == 0)
            {
                countBonus +=1;
            }
            else if(number % 10 == 5)
            {
                countBonus += 2;
            }
    }
    else if(number > 1000.1)
    {
        countBonus =(10 * number)/100;

        if(number % 2 == 0)
            {
                countBonus +=1;
            }
            else if(number % 10 == 5)
            {
                countBonus += 2;
            }
    }

    console.log(countBonus);
    console.log(number + countBonus);
}

bonusScore(2703);