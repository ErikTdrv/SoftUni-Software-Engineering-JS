function tradeCommisions(input) {

    let city = input[0];
    let sales = Number(input[1]);
    let commision = 0;

    if (city === 'Sofia') {
        if (sales <= 500 && sales >= 0) {
            commision = sales * 0.05

        } else if (sales <= 1000 && sales >= 500) {
            commision = sales * 0.07
        } else if (sales <= 10000 && sales >= 1000) {
            commision = sales * 0.08
        } else if (sales >= 10000) {
            commision = sales * 0.12
        }

    } else if (city === 'Varna') {
        if (sales <= 500 && sales >= 0) {
            commision = sales * 0.045

        } else if (sales <= 1000 && sales >= 500) {
            commision = sales * 0.075
        } else if (sales <= 10000 && sales >= 1000) {
            commision = sales * 0.1
        } else if (sales >= 10000) {
            commision = sales * 0.13
        }

    } else if (city === 'Plovdiv') {
        if (sales <= 500 && sales >= 0) {
            commision = sales * 0.055

        } else if (sales <= 1000 && sales >= 500) {
            commision = sales * 0.08
        } else if (sales <= 10000 && sales >= 1000) {
            commision = sales * 0.12
        } else if (sales >= 10000) {
            commision = sales * 0.145
        }
    }
    else{ 
        return console.log('error')

    }
    
if (commision != 0) {
    console.log(commision.toFixed(2));
}else console.log('error')

}
tradeCommisions(['Bourgas', '1500'])