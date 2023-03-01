import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    RouterProvider,
} from "react-router-dom";
import ExpertLayout from "./components/layout/ExpertsLayout";
import RootLayout from "./components/layout/Rootlayout";
import AllCategoryPage from "./pages/all_category";
import CategoryServicesPage from "./pages/category_services";
import CompanyInfo from "./pages/company_info";
import BackPoliticsPage from "./pages/back_politics";
import ConfidentialPoliticsPage from "./pages/confidential_politics";
import ContactPage from "./pages/contact";
import Expert from "./pages/expert/Expert";
import ExpertDetail from "./pages/expertDetail/ExpertDetail";
import { ExpertPersonPage } from "./pages/expert_person";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Jobs from "./pages/jobs/Jobs";
import RegisterPage, { countryApi } from "./pages/register";
import UserPage from "./pages/user";
import TermsAndConditionsPage from "./pages/terms_conditions";
import JobsForm from './components/jobsform/JobsForm'
// Style
import "./styles/main.scss";
import UserLayout from "./components/layout/UserLayout";
import JobDetail from "./pages/job_detail/JobDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />}></Route>
            {/* Auth / Registration */}
            <Route path="log_in" element={<LoginPage />} />
            <Route
                path="register"
                element={<RegisterPage />}
                loader={countryApi}
            />
            {/* All Info */}
            <Route path="info" element={<AllCategoryPage />} />
            <Route path="info/:services" element={<CategoryServicesPage />} />
            <Route path="info/:services/:id" element={<CompanyInfo />} />
            {/* User */}
            <Route path="user/:id" element={<UserLayout />}>
                <Route index element={<UserPage />} />
            </Route>

            {/* Experets */}
            <Route path="experts" element={<ExpertLayout />}>
                <Route index element={<Expert />}></Route>
                <Route path=":path" element={<ExpertDetail />} />
                <Route path=":path/:id" element={<ExpertPersonPage />} />
            </Route>
            {/* Jobs */}
            {/* <Route path="jobs" element={<Jobs />} />
            <Route path="jobdetail" element={<JobDetail />}/> */}
            <Route path="jobs" element={<Jobs />}></Route>
            <Route path="jobs/:id" element={<JobDetail />} />
            <Route path="addjobs" element={<JobsForm />}/>

            {/* Footer */}
            <Route
                path="terms_and_conditions"
                element={<TermsAndConditionsPage />}
            />
            <Route path="back_politics" element={<BackPoliticsPage />} />
            <Route
                path="confidential_politics"
                element={<ConfidentialPoliticsPage />}
            />
            <Route path="contact" element={<ContactPage />} />
            {/*  */}
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
