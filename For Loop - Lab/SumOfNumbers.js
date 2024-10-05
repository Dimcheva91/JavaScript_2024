function sumOfNum(num)
{
    let sum = 0;

    for(let index = 0; index < num.length; index ++)
    {
        let char = num.charAt(index);
        let number = Number(char);
        sum += number;

       
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNum("1234")