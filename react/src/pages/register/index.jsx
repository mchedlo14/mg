import logo from "../../assets/images/logomg.png";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonRegistration from "../../components/register/Person";
import CompanyRegister from "../../components/register/Company";
import telCodes from "../../Json/country_code.json";
import experts from "../../assets/images/expert.png";
import info from "../../assets/images/fire.png";
import jobs from "../../assets/images/employee.png";
import PopupMiddle from "../../components/popup/middle";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterSuccess } from "../../redux/client/auth/slice";
import { loadUser } from "../../api/auth/actions";

function RegisterPage() {
    const [registerIsActive, setRegisterIsActive] = useState("person");
    const countryData = useLoaderData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Selectors
    const { registerSuccess } = useSelector((state) => state.authRedux);

    return (
        <section className="register-wrapper">
            {registerSuccess && (
                <PopupMiddle>
                    <h1>წარმატებით გაიარეთ რეგისტრაცია</h1>
                    <button
                        onClick={() => {
                            navigate("/");
                            dispatch(setRegisterSuccess(false));
                        }}
                    >
                        მთავარ გვერდზე დაბრუნება
                    </button>
                </PopupMiddle>
            )}

            <div className="register-contaner">
                {/* Registration Form */}
                <div className="registration-form">
                    <h1>ანგარიშის შექმნა</h1>
                    <div className="user-choose-container">
                        <div
                            className={`choose ${
                                registerIsActive === "person" && "active"
                            } `}
                        >
                            <label htmlFor="person">ფიზიკური პირი</label>
                            <input
                                type="radio"
                                name="person_choose"
                                id="person"
                                value={"person"}
                                onChange={(e) => {
                                    setRegisterIsActive(e.target.value);
                                }}
                            />
                        </div>
                        <div
                            className={`choose ${
                                registerIsActive === "company" && "active"
                            } `}
                        >
                            <label htmlFor="company">იურიდიული პირი</label>
                            <input
                                type="radio"
                                name="person_choose"
                                id="company"
                                value={"company"}
                                onChange={(e) => {
                                    setRegisterIsActive(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    
                    {/* Person Form */}
                    {registerIsActive === "person" && (
                        <PersonRegistration
                            countryData={countryData}
                            telCodes={telCodes}
                        />
                    )}
                    {registerIsActive === "company" && (
                        <CompanyRegister
                            countryData={countryData}
                            telCodes={telCodes}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default RegisterPage;

export const countryApi = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");

    if (!res.ok) {
        throw Error("Could not fetch the list of Country");
    }

    return res.json();
};
