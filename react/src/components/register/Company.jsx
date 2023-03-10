import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser, signUp } from "../../api/auth/actions";
import { setRegisterSuccess } from "../../redux/client/auth/slice";
import axios from "axios";
import SelectDropdawn from "../dropdawn";

function CompanyRegister({ countryData }) {
    // States
    const [countrySort, setCountrySort] = useState([]);
    const [companyReg, setCompanyReg] = useState("ინდივიდუალური მეწარმე");
    const [companyRegOpen, setCompanyRegOpen] = useState(false);
    const [phoneNum, setPhoneNum] = useState("+995");
    const [phoneNumOpen, setPhoneNumOpen] = useState(false);

    const [country, setCountry] = useState("Georgia");
    const [countryOpen, setCountryOpen] = useState(false);

    const [sex, setSex] = useState("მამრობითი");
    const [sexOpen, setSexOpen] = useState(false);

    const companyStatus = [
        "ინდივიდუალური მეწარმე",
        "შპს",
        "სპს",
        "სააქციო საზოგადოება",
        "კომანდიტური საზოგადოება",
        "კოოპერატივი",
        "არასამეწარმეო(არაკომერციული) იურიდიული პირი",
        "საჯარო სამართლის სუბიექტი",
        "სხვა",
    ];
    //  Modules
    const dispatch = useDispatch();
    // UseForm
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("identification_code", data.identification_code);
        formData.append("legal_form", data.legal_form);
        formData.append("phone", data.dial_code + " " + data.phone);
        formData.append("country", data.country);
        formData.append("email", data.email);
        formData.append("city", data.city);
        formData.append("address", data.address);
        formData.append("password", data.password);

        dispatch(signUp(formData))
            .unwrap()
            .then((originalPromiseResult) => {
                // axios.get(`${import.meta.env.VITE_BASE_URL}/user`, {
                //     headers: {
                //         Authorization: `Bearer ${originalPromiseResult.access_token}`,
                //         "Content-type": "multipart/form-data",
                //         "X-requested-With": "XMLHttpRequest",
                //     },
                // });
                dispatch(loadUser());
                dispatch(setRegisterSuccess(true));
            })
            .catch((rejectedValue) => {});
    };

    useEffect(() => {
        setCountrySort(
            countryData
                .map((data) => data.name.common)
                .sort(function (a, b) {
                    if (a > b) {
                        return 1;
                    }
                    if (b > a) {
                        return -1;
                    }
                    return 0;
                })
        );
    }, [countryData]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="main_container">
                {/* სახელი */}

                <input
                    type="text"
                    name="company_registration"
                    id="company_name"
                    {...register("name", { required: true })}
                    // style={{ border: errors.company_id && "2px solid red" }}
                    autoComplete="off"
                />
                <label htmlFor="company_name">კომპანიის სახელი</label>
            </div>
            <div className="main_container">
                {/* საიდენტიფიკაციო კოდი */}
                <input
                    type="number"
                    name="company_registration"
                    id="company_id"
                    {...register("identification_code", {
                        required: true,
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "დასაშვებია მხოლოდ რიცხვები",
                        },
                    })}
                    // style={{ border: errors.company_id && "2px solid red" }}
                />
                <label htmlFor="company_id">საიდენტიფიკაციო კოდი</label>
                {errors.identification_code && (
                    <span>{errors.identification_code.message}</span>
                )}
            </div>
            <div className="main_container">
                {/* სამართლებრივი ფორმა */}
                <div
                    className="select"
                    name="company_registration"
                    id="forms"
                    onClick={() => {
                        setCompanyRegOpen(!companyRegOpen);
                        setCountryOpen(false);
                        setSexOpen(false);
                        setPhoneNumOpen(false);
                    }}
                    // style={{ border: errors.forms && "2px solid red" }}
                >
                    <div className="values">{companyReg}</div>

                    <div
                        className="rotate_div"
                        style={{
                            transform: `rotate(${
                                companyRegOpen ? "45deg" : "-45deg"
                            })`,
                        }}
                    />
                    {companyRegOpen && (
                        <div className="dropdawn">
                            {companyStatus &&
                                companyStatus.map((data, i) => (
                                    <option
                                        key={i}
                                        value={data}
                                        onClick={(e) => {
                                            setCompanyReg(e.target.value);
                                            setCompanyRegOpen(!companyRegOpen);
                                        }}
                                    >
                                        {data}
                                    </option>
                                ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="main_container">
                {/* ტელ.ნომერი */}
                <div className="telephone">
                    <div
                        className="select"
                        name="dial_code"
                        id="dial_code"
                        {...register("dial_code", {
                            required: true,
                        })}
                        onClick={() => {
                            setPhoneNumOpen(!phoneNumOpen);
                            setCompanyRegOpen(false);
                            setCountryOpen(false);
                            setSexOpen(false);
                        }}
                    >
                        <div className="values">
                            {/* {phoneNum} */}
                            <img
                                src="https://cdn.britannica.com/17/4717-004-6F48198E/Flag-Republic-of-Georgia.jpg"
                                alt=""
                            />
                            Geo
                        </div>

                        <div
                            className="rotate_div"
                            style={{
                                transform: `rotate(${
                                    phoneNumOpen ? "45deg" : "-45deg"
                                })`,
                            }}
                        />

                        {/* {phoneNumOpen && ( */}
                        {phoneNumOpen && (
                            <div className="dropdawn">
                                {/* {phoneNum &&
                  phoneNum.map((data, i) => ( */}
                                <aside
                                    // key={i}
                                    // value={data}
                                    value={"+995"}
                                    onClick={(e) => {
                                        setPhoneNum(e.target.value);
                                        setPhoneNumOpen(!phoneNumOpen);
                                    }}
                                >
                                    {/* {data} */}
                                    <img
                                        src="https://cdn.britannica.com/17/4717-004-6F48198E/Flag-Republic-of-Georgia.jpg"
                                        alt=""
                                    />
                                    Geo
                                </aside>
                                {/* ))} */}
                            </div>
                        )}

                        {/* )} */}
                    </div>

                    <input
                        type="number"
                        name="company_registration"
                        id="phone"
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "დასაშვებია მხოლოდ რიცხვები",
                            },
                        })}
                        style={{ border: errors.mobile && "2px solid red" }}
                    />
                    <label htmlFor="phone">ტელ.ნომერი</label>
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
            </div>
            <div className="main_container">
                {/* ელ.ფოსტა */}
                <input
                    type="email"
                    name="company_registration"
                    id="mail"
                    {...register("email", { required: true })}
                    // style={{ border: errors.email && "2px solid red" }}
                />
                <label htmlFor="phone">ელ.ფოსტა</label>
            </div>

            <div className="main_container">
                {/* Country */}
                <div
                    className="select"
                    name="company_registration"
                    id="forms"
                    onClick={() => {
                        setCountryOpen(!countryOpen);
                        setCompanyRegOpen(false);
                        setSexOpen(false);
                        setPhoneNumOpen(false);
                    }}
                    // style={{ border: errors.forms && "2px solid red" }}
                >
                    <div className="values">{country}</div>

                    <div
                        className="rotate_div"
                        style={{
                            transform: `rotate(${
                                countryOpen ? "45deg" : "-45deg"
                            })`,
                        }}
                    />
                    {countryOpen && (
                        <div className="dropdawn">
                            {countrySort &&
                                countrySort.map((data, i) => (
                                    <option
                                        key={i}
                                        value={data}
                                        onClick={(e) => {
                                            setCountry(e.target.value);
                                            setCountryOpen(!countryOpen);
                                        }}
                                    >
                                        {data}
                                    </option>
                                ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="main_container">
                {/* ქალაქი */}
                <input
                    type="text"
                    name="company_registration"
                    id="city"
                    {...register("city", { required: true })}
                    style={{ border: errors.city && "2px solid red" }}
                />
                <label htmlFor="city">შეიყვანე ქალაქი/დაბა/სოფელი</label>
            </div>

            <div className="main_container">
                {/* ფაქტიური მისამართი */}
                <input
                    type="text"
                    name="company_registration"
                    id="address"
                    {...register("address", { required: true })}
                    // style={{ border: errors.address && "2px solid red" }}
                />
                <label htmlFor="address">ფაქტიური მისამართი</label>
            </div>

            <div className="main_container">
                {/* პაროლი */}
                <input
                    type="password"
                    name="company_registration"
                    id="password"
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "პაროლი უნდა იყოს 8 სიმბოლოზე მეტი",
                        },
                    })}
                    // style={{ border: errors.password && "2px solid red" }}
                />
                <label htmlFor="password">პაროლი</label>
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div className="main_container">
                {/* გაიმეორეთ პაროლი */}
                <input
                    type="password"
                    name="company_registration"
                    id="re_password"
                    {...register("re_password", {
                        required: true,
                        validate: (val) => {
                            if (watch("password") != val) {
                                return "პაროლი არ ეთხვევა ერთმანეთს";
                            }
                        },
                    })}
                    // style={{ border: errors.re_password && "2px solid red" }}
                />
                <label htmlFor="re_password">გაიმეორეთ პაროლი</label>

                {errors.re_password && (
                    <span>{errors.re_password.message}</span>
                )}
            </div>
            <aside>
                <input
                    type="checkbox"
                    id="terms_check"
                    {...register("terms_checked", {
                        required: true,
                    })}
                />
                <label htmlFor="terms_check">
                    ვეთანხმები{" "}
                    <Link to={"/terms_and_conditions"}>
                        წესებსა და პირობებს
                    </Link>
                </label>
            </aside>
            {errors.terms_checked && (
                <span style={{ color: "red" }}>სავალდებულო ველი</span>
            )}

            <aside>
                <input
                    type="checkbox"
                    id="politic_check"
                    {...register("politic_checked", { required: true })}
                />
                <label htmlFor="politic_check">
                    ვეთანხმები <Link to={""}>კონფიდენციალობის პოლიტიკას</Link>
                </label>
            </aside>
            {errors.politic_checked && (
                <span style={{ color: "red" }}>სავალდებულო ველი</span>
            )}

            <button type="submit">ავტორიზაცია</button>

            <aside>
                <label>
                    უკვე რეგისტრირებული ხარ? გაიარე{" "}
                    <Link to={""}>ავტორიზაცია</Link>
                </label>
            </aside>
        </form>
    );
}

export default CompanyRegister;
