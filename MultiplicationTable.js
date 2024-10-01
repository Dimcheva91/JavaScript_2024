function multiplicationTable(num)
{
    let sum = 0;
    for(let index = 1; index <= 10; index++)
    {
        sum = index * num;
        console.log(`${index} * ${num} = ${sum}`);
    }
}

multiplicationTable(5);