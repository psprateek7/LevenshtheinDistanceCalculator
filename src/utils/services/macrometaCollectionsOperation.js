import { getJsc8Client } from "./macrometaClient"

const checkIfCollectionExists = async (collectionName) => {
    try {
        const jsC8 = getJsc8Client()
        const response = await jsC8.hasCollection(collectionName)
        return response
    } catch (error) {
        return error
    }
}

const getCollectionDetails = async (collectionName) => {
    try {
        const jsC8 = getJsc8Client()
        const response = await jsC8.getCollection(collectionName)
        return response
    } catch (error) {
        return error
    }
}

const deleteCollection = async (collectionName) => {
    try {
        const jsC8 = getJsc8Client()
        const response = await jsC8.deleteCollection(collectionName)
        return response
    } catch (error) {
        return error
    }
}

const createCollection = async (collectionName) => {
    try {
        const jsC8 = getJsc8Client()
        const response = await jsC8.createCollection(collectionName)
        return response
    } catch (error) {
        return error
    }
}

const calculateLevenshteinDistance = async (query, params = {}) => {
    let response = []
    try {
        const jsC8 = getJsc8Client()
        response = await jsC8.executeQuery(query, params)
        return response
    } catch (error) {
        console.error(error)
        return response
    }
}
const executeMacrometaRestQl = async (restqlName, bindVars = {}) => {
    let response = []
    try {
        const jsC8 = getJsc8Client()
        response = await jsC8.executeRestql(restqlName, bindVars)
        return response
    } catch (error) {
        console.error(error)
        return response
    }
}

export {
    createCollection,
    checkIfCollectionExists,
    deleteCollection,
    getCollectionDetails,
    calculateLevenshteinDistance,
    executeMacrometaRestQl,
}
