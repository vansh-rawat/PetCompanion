import React from "react";
import { Route, Routes } from "react-router-dom";
import CategorizedAnimals from "./Pages/CategorizedAnimals";
import Homepage from "./Pages/Homepage";
import PetProfile from "./Pages/PetProfile";

const Router = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage />} />
                <Route path=":category">
                    <Route index element={<CategorizedAnimals />} />
                    <Route index={false} path=":id" element={<PetProfile />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;