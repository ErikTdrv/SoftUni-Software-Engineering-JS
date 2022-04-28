function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let fightsCount = 0;
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmors = 0;
    let isEnough = false;

    for (let i = 1; i <= lostFights; i++) {
        fightsCount++

        if (fightsCount % 6 === 0) {
            brokenShields++
            if (brokenShields % 2 === 0) {
                isEnough = true;
            }
        }
        if (fightsCount % 2 === 0) {
            brokenHelmets++
        }
        if (fightsCount % 3 === 0) {
            brokenSwords++
        }
        if (isEnough) {
            brokenArmors++
            isEnough = false;
        }
    }
    helmetPrice = helmetPrice * brokenHelmets
    swordPrice = swordPrice * brokenSwords
    shieldPrice = shieldPrice * brokenShields
    armorPrice = armorPrice * brokenArmors
    let total = helmetPrice + swordPrice + shieldPrice + armorPrice



    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);








}
gladiatorExpenses(
    23,
    12.50,
    21.50,
    40,
    200
)