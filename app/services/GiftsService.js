import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"




class GiftsService {

    async toggleOpen(id) {
        const giftToToggle = AppState.myGifts.find(gift => gift.id == id)
        giftToToggle.opened = !giftToToggle.opened
        const response = await api.put(`api/gifts/${id}`, giftToToggle)
        console.log('opening gift response', response.data)
        AppState.emit('myGifts')
    }


    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('service getting', response.data)
        const myGifts = response.data.map(gift => new Gift(gift))
        AppState.myGifts = myGifts
        console.log('appstate', AppState.myGifts);
    }

}

export const giftsService = new GiftsService