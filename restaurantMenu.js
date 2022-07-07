class Dish {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }

    describe() {
        return `${this.name} is rated at ${this.rating}.`
    }
}


class Restaurant {
    constructor(name) {
        this.name = name;
        this.dishes = [];
    }

    addDish(dish) {
        if (dish instanceof Dish) {
           this.dishes.push(Dish);
        } else {
            throw new Error(`You can only add an instance of dish: ${dish}`);
        }
    }

    describe() {
        return`${this.name} has ${this.dishes.length} dishes.`;
    }
}

class Menu {
    constructor() {
        this.restaurant = []
        this.selectedRestaurant = null;
    }

    start() {
        let selection = this.showMainMenuOption();
        while (selection != 0) {
            switch (selection) {
            case '1':
                this.createRestaurant();
                break;
            case '2':
                this.viewRestaurant();
                break;
            case '3':
                this.deleteRestaurant();
                break;
            case '4':
                this.displayRestaurant();
                break;
            default:
                selection = 0;
            }
            selection = this.showMainMenuOption();
        }
        alert('Goodbye!')
    }

    showMainMenuOption() {
        return prompt(`
        0) exit
        1) create new restaurant
        2) view restaurant
        3) delete restaurant
        4) display all restaurant
        `);
    }

    showRestaurantMenuOption(restaurantInfo) {
        return prompt(`
        0) back
        1) create new dish
        2) delete
        ---------------------
        ${restaurantInfo}
        `)
    }

    displayRestaurant() {
        let restaurantString = '';
        for (let i = 0; i < this.restaurant.length; i++) {
            restaurantString += i + ') ' + this.restaurant[i].name + '\n';
        }
        alert(restaurantString);
    }

    createRestaurant() {
        let name = prompt('Enter name for new restaurant:');
        this.restaurant.push(new Restaurant(name));
    }

    viewRestaurant() {
        let index = prompt('Enter the index of the restaurant you wish to view:');
        if (index > -1 && index < this.restaurant.length) {
            this.selectedRestaurant = this.restaurant[index];
            let description = 'Restaurant Name: ' + this.selectedRestaurant.name + '\n';

            for (let i = 0; i < this.selectedRestaurant.dishes.length; i++) {
                description += i + ') ' + this.selectedRestaurant.dishes[i].name 
                    + ' - ' + this.selectedRestaurant.dishes[i].rating + '\n';
            }

            let selection = this.showRestaurantMenuOption(description);
            switch (selection) {
                case '1':
                    this.createRestaurant();
                    break;
                case '2':
                    this.delectedRestaurant();
            }
        }
    
    }
    createRestaurant() {
        let name = prompt('Enter name for new dish:');
        let rating = prompt('Enter rating for new dish:');
        this.selectedRestaurant.dishes.push(new Dish(name, rating));
    }

    deleteRestaurant() {
        let index = prompt('Enter the index of the dish you wish to delete:');
        if (index > -1 && index < this.selectedRestaurant.dishes.length) {
            this.selectedRestaurant.dishes.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start()