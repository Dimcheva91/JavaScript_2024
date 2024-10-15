function cinemaTickets(input) {
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let movieTitle = command;
        let totalAvalibleSeats = Number(input[index]);
        index++;

        let takenSeats = 0;

        let newCommand = input[index];
        index++;

        while (newCommand !== 'End') {
            let ticketType = newCommand;

            if (ticketType === 'standard') {
                standardTicketCount++;
            }
            else if (ticketType === 'student') {
                studentTicketCount++;
            }
            else if (ticketType === 'kid') {
                kidTicketCount++;
            }

            takenSeats++;

            if (takenSeats === totalAvalibleSeats) {
                break;
            }

            newCommand = input[index];
            index++;
        }

        let fullPercentage = (takenSeats / totalAvalibleSeats) * 100;
        console.log(`${movieTitle} - ${fullPercentage.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTicketCount = studentTicketCount + standardTicketCount + kidTicketCount;
    console.log(`Total tickets: ${totalTicketCount}`);

    let studentTicketPercent = (studentTicketCount / totalTicketCount) * 100;
    let standardTicketPercent = (standardTicketCount / totalTicketCount) * 100;
    let kidTicketPercent = (kidTicketCount / totalTicketCount) * 100;

    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(
    ["Taxi",
        "10",
        "standard",
        "kid",
        "student",
        "student",
        "standard",
        "standard",
        "End",
        "Scary Movie",
        "6",
        "student",
        "student",
        "student",
        "student",
        "student",
        "student",
        "Finish"
    ])
