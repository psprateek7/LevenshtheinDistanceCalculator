import React, { createContext, useState } from "react"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [refreshData, setRefreshData] = useState(false)
    const [lDistanceData, setLDistanceData] = useState([])

    return (
        <AppContext.Provider
            value={{
                refreshData,
                setRefreshData,
                lDistanceData,
                setLDistanceData,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
