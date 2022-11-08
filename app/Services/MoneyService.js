import { appState } from "../AppState.js";

class MoneyService {
    constructor() {
        console.log('service works');
    }
    addMoney() {
        appState.money += .25
        console.log(appState.money);
    }
    buySnack(name) {
        let foundSnack = appState.snacks.find(s => s.name == name)
        if (appState.money >= foundSnack.price) {
            appState.money -= foundSnack.price
        }
    }
}

export const moneyService = new MoneyService()

