import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/Rootlayout";
import CompanyInfo from "./pages/company_info";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

// Style
import "./styles/main.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="register" element={<RegisterPage />} />
            <Route path="log_in" element={<LoginPage />} />
            <Route path="company_info/:id" element={<CompanyInfo />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
