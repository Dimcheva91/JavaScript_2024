function evenPower(n)
{
    for(let index = 0; index <= n; index +=2) {
        let result = Math.pow(2, index)
        console.log(result);
    }
}

evenPower(6)
