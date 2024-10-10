function workingHours(time, partOfDay) {
    time = Number(time);
    if (time >= 10 && time < 18) {
        switch (partOfDay) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
            default:
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}

workingHours(11,
    "Sunday"
    );
