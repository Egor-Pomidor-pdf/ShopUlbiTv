import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
        ]
        this._brands = [
        ]

        this._devices = [
            // { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXxAu8BoCPGIR2lL6cQ2i78I5lSlu-naR9g&s` },
            // { id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXxAu8BoCPGIR2lL6cQ2i78I5lSlu-naR9g&s` },
            // { id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXxAu8BoCPGIR2lL6cQ2i78I5lSlu-naR9g&s` },
            // { id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXxAu8BoCPGIR2lL6cQ2i78I5lSlu-naR9g&s` },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page;
    }
    
    setTotalCount(total) {
        this._totalCount = total;
    }

    setLimit(limit) {
        this._limit = limit;
    }


    get types() {
        return this._types
    }


    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }


    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}