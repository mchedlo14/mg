import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ExpertLayout from "./components/layout/ExpertsLayout";
import RootLayout from "./components/layout/Rootlayout";
import Expert from "./pages/expert/Expert";
import ExpertDetail from "./pages/expertDetail/ExpertDetail";
import { ExpertPersonPage } from "./pages/expert_person";
import HomePage from "./pages/home";
import Jobs from "./pages/jobs/Jobs";
import RegisterPage from "./pages/register";

// Style
import "./styles/main.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="experts" element={<ExpertLayout />}>
                <Route index element={<Expert />}></Route>
                <Route path=":path" element={<ExpertDetail />}></Route>
                <Route path=":path/:id" element={<ExpertPersonPage />}></Route>
            </Route>
            <Route path="jobs" element={<Jobs />}></Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
