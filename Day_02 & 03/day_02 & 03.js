// Question no 1

const indinaCurrencyNotes = (amount) => {

    if (isNaN(amount) || amount < 50) {
        return "Enter valid input (amount must be a number and at least 50)";
    }

    let twoTh = 0;
    let fiH = 0;
    let twoHn = 0;
    let hunD = 0;
    let fifty = 0;

    let reminderAmount = amount;

    if (reminderAmount >= 2000) {
        twoTh = Math.floor(reminderAmount / 2000);
        reminderAmount %= 2000;
    }

    if (reminderAmount >= 500) {
        fiH = Math.floor(reminderAmount / 500);
        reminderAmount %= 500;
    }

    if (reminderAmount >= 200) {
        twoHn = Math.floor(reminderAmount / 200);
        reminderAmount %= 200;
    }

    if (reminderAmount >= 100) {
        hunD = Math.floor(reminderAmount / 100);
        reminderAmount %= 100;
    }

    if (reminderAmount >= 50) {
        fifty = Math.floor(reminderAmount / 50);
        reminderAmount %= 50;
    }

    return {
        1: `Two Thousand Notes: ${twoTh}`,
        2: `Five Hundred Notes: ${fiH}`,
        3: `Two Hundred Notes: ${twoHn}`,
        4: `Hundred Notes: ${hunD}`,
        5: `Fifty Notes: ${fifty}`,
        6: `Total Amount: ₹${amount}`,
    };
};

const moviesPridiction = (movie, rating) => {
    let result = movie + ' ';

    if (Number(rating) && rating <= 5 && movie) {

        if (rating >= 5) {
            result += '- is Super Hit'
        } else if (rating <= 3.5 && rating > 4.5) {
            result += '- is Hit'
        } else if (rating <= 3.4 && rating > 2.1) {
            result += '- is Semi Hit'
        } else {
            result += '- is Floop'
        }

    } else {
        result = 'Enter valid input'
    };

    return result;
};

const salaryCaculator = (qualification, serice, gender) => {
    let amount = 0 ;
    if (gender === 'male') {
        if (qualification == 'Post-Graduate' && serice >= 10) {
            amount = 15000;
        }

        if (qualification == 'Graduate' && serice >= 10) {
            amount = 10000;
        }

        if (qualification == 'Post-Graduate' && serice < 10) {
            amount = 10000;
        }

        if (qualification == 'Graduate' && serice < 10) {
            amount = 7000;
        }
    } else if(gender ==='female'){
        if (qualification == 'Post-Graduate' && serice >= 10) {
            amount = 12000;
        }

        if (qualification == 'Graduate' && serice >= 10) {
            amount = 9000;
        }

        if (qualification == 'Post-Graduate' && serice < 10) {
            amount = 10000;
        }

        if (qualification == 'Graduate' && serice < 10) {
            amount = 6000;
        }

    }

    return `Your Salary amount is : ${amount}`;

};