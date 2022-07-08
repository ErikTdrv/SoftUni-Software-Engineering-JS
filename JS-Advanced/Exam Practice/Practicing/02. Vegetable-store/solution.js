class VegetableStore{
    owner;
    location;
    availableProducts;
    constructor(owner, location){
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }

    loadingVegetables(vegetables){
        let list = {};
        let nameArr = [];
        for (let el of vegetables){

            let [type, quantityEl, priceEl] = el.split(' ');
            
            if(list.hasOwnProperty(type)){
                list[type].quantity = Number(list[type].quantity) + Number(quantityEl)
                if (list[type].price < priceEl){
                    list[type].price = Number(priceEl)
                }
            }else{
                list[type] = {
                    'type': type,
                    quantity: Number(quantityEl),
                    price: Number(priceEl)
                }
                this.availableProducts.push(list[type])
                nameArr.push(type)
            }
        }
        
       
        return `Successfully added ${nameArr.join(", ")}`;

    }

    buyingVegetables(selectedProducts){
        let list = {};
        let totalPrice = 0
        for (let el of selectedProducts){
            let [typeEl, quantityEl] = el.split(' ');
            list[typeEl] = +quantityEl
            let currentElement = this.availableProducts.find((x) => x.type == typeEl)
            if (!currentElement){
                throw new Error(`${typeEl} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            
            if (currentElement.quantity < quantityEl){
                throw new Error(`The quantity ${quantityEl} for the vegetable ${typeEl} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += currentElement.price * quantityEl
            currentElement.quantity = currentElement.quantity - quantityEl
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity){
        let currentElement = this.availableProducts.find((x) => x['type'] == type);
        if (!currentElement){
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > currentElement.quantity){
            currentElement.quantity = 0;
            return (`The entire quantity of the ${type} has been removed.`)
        }

        currentElement.quantity = currentElement.quantity - quantity
        return `Some quantity of the ${type} has been removed.`
    }

    revision(){
        let resultArr = [];
        resultArr.push(`Available vegetables:`);
        this.availableProducts.sort((a, b) => a.price - b.price)
        for (let el of this.availableProducts){
            resultArr.push(`${el.type}-${el.quantity}-$${el.price}`)
        }
        resultArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return resultArr.join('\n')
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
