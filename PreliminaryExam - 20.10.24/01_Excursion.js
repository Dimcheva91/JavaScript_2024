function calculateTripCost(input) {
    let numberOfPeople = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    let pricePerNight = 20;
    let transportPrice = 1.60;
    let museumTicketPrice = 6;

    let costPerPerson = (numberOfNights * pricePerNight) + (transportCards * transportPrice) + (museumTickets * museumTicketPrice);

    let totalCost = costPerPerson * numberOfPeople;

    totalCost *= 1.25;

    console.log(totalCost.toFixed(2));
}

calculateTripCost(["131",
    "9",
    "33",
    "46"]);
