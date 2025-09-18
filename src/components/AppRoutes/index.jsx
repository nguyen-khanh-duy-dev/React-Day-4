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
import PerformanceDemo from "../../pages/PerformanceDemo"
import FocusDemo from "../../pages/FocusDemo"
import HocDemo from "../../pages/HOCDemo"
import RenderProps from "../../pages/RenderProps"
import HookDemo from "../../pages/HookDemo"

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="modal" element={<ModalDemo />} />
                    <Route path="scroll" element={<ScrollDemo />} />
                    <Route
                        path="performance-demo"
                        element={<PerformanceDemo />}
                    />
                    <Route path="focus-demo" element={<FocusDemo />} />
                    <Route path="hoc-demo" element={<HocDemo />} />
                    <Route path="render-props-demo" element={<RenderProps />} />
                    <Route path="custom-hook-demo" element={<HookDemo />} />
                </Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
