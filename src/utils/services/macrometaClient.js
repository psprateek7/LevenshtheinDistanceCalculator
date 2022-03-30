import jsC8 from "jsc8"
import appConfig from "../configs/appConfig"

let jsc8Client
const { macrometa_url, macrometa_api_key, macrometa_fabric } = appConfig

const initJsc8Client = () => {
    jsc8Client = new jsC8({
        url: macrometa_url,
        apiKey: macrometa_api_key,
        fabricName: macrometa_fabric,
    })
}

//returns the singletion instance of jsC8

const getJsc8Client = () => {
    if (!jsc8Client) {
        initJsc8Client()
    }

    return jsc8Client
}

export { getJsc8Client }
