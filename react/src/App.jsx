import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/Rootlayout";
import AllCategoryPage from "./pages/all_category";
import CategoryServicesPage from "./pages/category_services";
import CompanyInfo from "./pages/company_info";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage, { countryApi } from "./pages/register";
import UserPage from "./pages/user";

// Style
import "./styles/main.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route
                path="register"
                element={<RegisterPage />}
                loader={countryApi}
            />
            <Route path="log_in" element={<LoginPage />} />
            <Route path="all_category" element={<AllCategoryPage />}></Route>
            <Route
                path="all_category/:services"
                element={<CategoryServicesPage />}
            ></Route>
            <Route path="user/:id" element={<UserPage />} />
            <Route path="company_info/:id" element={<CompanyInfo />} />
            //ჩასასწორებელია ბოლოს
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
