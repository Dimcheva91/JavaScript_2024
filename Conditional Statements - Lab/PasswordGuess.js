function password(text)
{
    let textParm = "s3cr3t!P@ssw0rd";

    if(textParm === text)
    {
        console.log("Welcome");
    }
    else
    {
        console.log("Wrong password!");
    }
}

password("s3cr3t!P@ssw0rd");