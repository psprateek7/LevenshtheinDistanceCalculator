import jsC8 from "jsc8"
import appConfig from "../configs/appConfig"

let MacrometaClient
const { macrometa_url, macrometa_api_key, macrometa_fabric } = appConfig

const initMacrometaClient = () => {
    MacrometaClient = new jsC8({
        url: macrometa_url,
        apiKey: macrometa_api_key,
        fabricName: macrometa_fabric,
    })
}

//returns the singletion instance of jsC8
const getMacrometaClient = () => {
    if (!MacrometaClient) {
        initMacrometaClient()
    }

    return MacrometaClient
}

export { getMacrometaClient }
