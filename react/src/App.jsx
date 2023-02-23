import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/Rootlayout";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";

// Style
import "./styles/main.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
