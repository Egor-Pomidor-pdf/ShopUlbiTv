import { $authHost, $host } from "."
import {jwtDecode} from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post(`api/type`, type)
    return data
}
export const fetchTypes = async () => {
    const {data} = await $host.get(`api/type`)
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post(`api/brand`, brand)
    return data
}
export const fetchBrands = async () => {
    const {data} = await $host.get(`api/brand`)
    return data
}

export const createDevice = async (device) => {
    try {
        const {data} = await $authHost.post(`api/device`, device)
        return data
    } catch(e) {
        console.log("Ошибка API");
        
    }
   
}
export const fetchDevices = async (typeId, brandId, page, limit=5) => {
    const {data} = await $host.get(`api/device`,
        {
        params: {typeId, brandId, page, limit}
    }
    )
    return data
}

export const fetchDevice = async (id) => {
    const {data} = await $host.get(`api/device/` + id)
    return data
}