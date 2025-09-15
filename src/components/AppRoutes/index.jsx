import {
    HashRouter,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router"

import DefaultLayout from "../../layouts/DefaultLayout"

import Home from "../../pages/Home"
import ModalDemo from "../../pages/ModalDemo"
import Profile from "../../pages/Profile"
import ScrollDemo from "../../pages/ScrollDemo"
import NotFound from "../../pages/NotFound"

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="modal" element={<ModalDemo />} />
                    <Route path="scroll" element={<ScrollDemo />} />
                </Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
