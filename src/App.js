import { Home } from "./components/Home/HomePage.jsx"
import { AppContextProvider } from "./components/context/AppContext.js"

const App = () => {
    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    )
}

export default App
