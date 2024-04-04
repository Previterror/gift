import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
    constructor() {
        console.log('GiftsController online');
        AppState.on('account', this.getGifts)
        AppState.on('myGifts', this.drawMyGifts)
    }


    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.toast('Could not get gifts', 'error')
            console.error('Could not get gifts', error)
        }
    }

    drawMyGifts() {
        console.log('Drawing Gifts')
        const myGifts = AppState.myGifts
        let myGiftList = ''
        myGifts.forEach(gift => myGiftList += gift.giftListTemplate)
        setHTML('gift-list', myGiftList)
    }

}