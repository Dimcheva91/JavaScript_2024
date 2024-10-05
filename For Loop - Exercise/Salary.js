function salary(list) {
    let tabCount = list[0];
    let salary = list[1];

    for (let index = 2; index <= list.length + 2; index++) {
        let currentWebsite = list[index];

        if (currentWebsite == "Facebook") {
            salary -= 150;
        }
        else if (currentWebsite == "Instagram") {
            salary -= 100;
        }
        else if (currentWebsite == "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(salary);
}

salary([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
