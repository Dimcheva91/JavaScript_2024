function sequence(end) 
{
    let k = 1;

    while (k <= end) {
        console.log(k);
        k = k * 2 + 1;
    }
}

sequence(31);