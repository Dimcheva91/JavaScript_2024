function speedInfo(speed)
{
    if(speed <= 10)
    {
        console.log("slow");
    }
    else if(speed >= 10.1 && speed <= 50)
    {
        console.log("average");
    }
    else if(speed > 50.1 && speed <= 150)
    {
        console.log("fast");
    }
    else if(speed > 150.1 && speed <= 1000)
     {
     console.log("ultra fast");
     }
     else if(speed > 1000.1)
        {
            console.log("extremely fast");
        }
}