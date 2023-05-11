import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { ColorSchemeProvider } from "./context/ColorSchemeContext";
import Home from "./pages/Home";
// import Home from "./pages/SignUp";
import i18n from "./i18next";
import './App.css'

function App() {
    return (
        <ColorSchemeProvider>
            <Suspense fallback={<div>Loading translations...</div>}>
                <I18nextProvider i18n={i18n}>
                    <Home />
                </I18nextProvider>
            </Suspense>
        </ColorSchemeProvider>
    )
}

export default App
