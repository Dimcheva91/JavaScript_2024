function areaOfFigures(figure, numOne, numTwo)
{
    if(figure == "square")
    {
        console.log(numOne * numOne);
    }
    else if(figure == "rectangle")
    {
        console.log(numOne * numTwo);
    }
    else if(figure == "circle")
    {
        console.log(Math.PI * (numOne*numOne));
    }
    else if(figure == "triangle")
    {
        console.log((numOne * numTwo) / 2);
    }
}

areaOfFigures("triangle", 4.5, 20)