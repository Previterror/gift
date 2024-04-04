import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
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

    async toggleOpen(id) {
        try {
            await giftsService.toggleOpen(id)
        } catch (error) {
            Pop.toast('Could not open gift', 'error')
            console.error('Could not open gift', error)
        }
    }

    async postGift() {
        try {
            event.preventDefault()
            console.log('Attempting to post gift')
            const form = event.target
            const giftData = getFormData(form)
            console.log('gift data', giftData);
            await giftsService.postGift(giftData)
        } catch (error) {
            console.error(error)
            Pop.toast("Couldn't post Gift", 'error')
        }
    }

}