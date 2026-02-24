import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/screens/Home/Home";
import { EcolimpioPage } from "../components/screens/EcolimpioPage/EcolimpioPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ecolimpio" element={<EcolimpioPage />} />
            </Routes>
        </>
    );
};
