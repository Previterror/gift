export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened
    }

    get giftListTemplate() {

        return `
<div class="col-3 card" onclick="app.GiftsController.toggleOpen('${this.id}')">
    <img src="${this.url}" alt="Img" class="card-image p-1">
    <p class="card-text text-center">${this.tag}</p>
</div>
`}











































}