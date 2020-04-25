import RepoConnector from "./repoConnector";


class MagazineApi {
    constructor() {
        console.log("magazineApi constructor")
        this.productApi = new RepoConnector('product')
    }

    getProducts() {
        return this.productApi.getAll()
    }

}

export const magazineApi = new MagazineApi()