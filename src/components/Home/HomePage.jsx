import React, { useEffect } from "react"
import { Header } from "../common/Header.jsx"
import { Container } from "@mui/material"
import { CollectionTable } from "../Table/TableContainer.jsx"
import { InputBox } from "../common/InputBox.jsx"
import { checkIfCollectionExists, createCollection } from "../../utils/services/macrometaCollectionsOperation.js"
import { STRING_UTILS } from "../../utils/constants/stringUtils"

export const Home = () => {
    const createCollectionIfNotExists = async () => {
        const response = await checkIfCollectionExists(STRING_UTILS.MACROMETA_COLLECTION_NAME)
        if (!response) {
            await createCollection(STRING_UTILS.MACROMETA_COLLECTION_NAME)
        }
    }
    useEffect(() => {
        createCollectionIfNotExists()
    }, [])

    return (
        <Container maxWidth={false}>
            <Header />
            <InputBox />
            <CollectionTable />
        </Container>
    )
}
