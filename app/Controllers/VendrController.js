import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



export class VendrController {
    addMoney() {
        moneyService.addMoney()
        _drawMoney()
    }
    buySnack(name) {
        moneyService.buySnack(name)
        _drawMoney()
    }
}



function _drawMoney() {
    setText('money', appState.money)
}


