import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setNavigator } from "./routes/navigation";
import { AppRouter } from "./routes/AppRouter";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        setNavigator(navigate);
    }, [navigate]);

    /*useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);*/
    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
