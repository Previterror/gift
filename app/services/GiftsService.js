import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"




class GiftsService {

    async toggleOpen(id) {
        let giftToToggle = AppState.myGifts.find(gift => gift.id == id)
        giftToToggle.opened = !giftToToggle.opened
        const response = await api.put(`api/gifts/${id}`, giftToToggle)
        let openedGift = new Gift(response.data)
        // console.log('opening gift response', openedGift)
        // AppState.myGifts.push(openedGift)
        giftToToggle = openedGift
        AppState.emit('myGifts')
    }


    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('service getting', response.data)
        const myGifts = response.data.map(gift => new Gift(gift))
        AppState.myGifts = myGifts
        console.log('appstate', AppState.myGifts);
    }

    async postGift(giftData) {
        const response = await api.post('api/gifts', giftData)
        console.log("Posting Gifts", response.data)
        const gift = new Gift(response.data)
        AppState.myGifts.unshift(gift)
    }


}

export const giftsService = new GiftsService