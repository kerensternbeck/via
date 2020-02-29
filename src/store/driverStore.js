import { decorate, observable, action } from "mobx";

export default class Drivers {

    constructor() {
        this.allDrivers = [];
        this.filteredDrivers = [];
    }

    // Fetches driver data from the server
    getDriverData() {
        const url = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';
        fetch(url)
            .then(response => response.json())
            .then((drivers) => {
                // Sets all driver data in local variables
                // By default, set filter to all drivers
                this.allDrivers = drivers;
                this.filteredDrivers = drivers;
            });
    }

    // On search input text entered - return only drivers whose names match given text
    filterText(text) {
        if (!text) {
            this.filteredDrivers = this.allDrivers;
        } else {
            let driverName;
            const filterText = text.toLowerCase().trim();
            const filteredDrivers = this.allDrivers.filter((driver) => {
                driverName = driver.name.toLowerCase().trim();
                return driverName.includes(filterText);
            })
            this.filteredDrivers = filteredDrivers;
        }
    }

    get drivers() {
        return this.filteredDrivers;
    }

}
decorate(Drivers, {
    filteredDrivers: observable,
    getDriverData: action,
    filterText: action
})