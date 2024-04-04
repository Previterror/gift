export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened
    }

    get giftListTemplate() {

        return `
    
    <div class="col-3 card">
    <img src="${this.url}" alt="Img" class="card-image">
    <p class="card-text text-center">${this.tag}</p>
</div>
    `

    }
}