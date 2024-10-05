function vacationBooksList(numberOfPages, pages, numberOfDays)
{
    let timeToReadBook = numberOfPages/pages;
    let hoursPerDays = timeToReadBook/numberOfDays;

    console.log(hoursPerDays);
}

vacationBooksList(212, 20, 2);