import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser, signUp } from "../../api/auth/actions";
import { setRegisterSuccess } from "../../redux/client/auth/slice";
import { useOnClickOutside } from "usehooks-ts";
import passwordIcon from "../../assets/images/password.png";

function CompanyRegister({ countryData }) {
    // States
    const [countrySort, setCountrySort] = useState([]);

    // Password State
    const [passwordIsShow, setPasswordIsShow] = useState(false);
    const [rePasswordIsShow, setRePasswordIsShow] = useState(false);

    const [companyReg, setCompanyReg] = useState("ინდივიდუალური მეწარმე");
    const [companyRegOpen, setCompanyRegOpen] = useState(false);

    const [phoneNum, setPhoneNum] = useState("+995");
    const [phoneNumOpen, setPhoneNumOpen] = useState(false);

    const [country, setCountry] = useState("Georgia");
    const [countryOpen, setCountryOpen] = useState(false);

    // Outside Click of drop dawn

    const ref = useRef(null);

    const handleClickOutside = () => {
        setCountryOpen(false);
        setPhoneNumOpen(false);
        setCompanyRegOpen(false);
    };

    useOnClickOutside(ref, handleClickOutside);

    // Temporary API
    const companyStatus = [
        "ინდივიდუალური მეწარმე",
        "შპს",
        "სპს",
        "სააქციო საზოგადოება",
        "კომანდიტური საზოგადოება",
        "კოოპერატივი",
        "არასამეწარმეო (არაკომერციული) იურიდიული პირი",
        "საჯარო სამართლის სუბიექტი",
        "სხვა",
    ];

    // Redux
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
        formData.append("legal_form", companyReg);
        formData.append("phone", phoneNum + " " + data.phone);
        formData.append("country", country);
        formData.append("email", data.email);
        formData.append("city", data.city);
        formData.append("address", data.address);
        formData.append("password", data.password);

        dispatch(signUp(formData))
            .unwrap()
            .then((originalPromiseResult) => {
                dispatch(loadUser());
                dispatch(setRegisterSuccess(true));
            })
            .catch((rejectedValue) => {});
    };

    // Sorting Country Data
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
            {/* კომპანიის სახელი */}
            <div className="main_container">
                <input
                    className={`${
                        errors.company_name ? "form_error_input" : "empty"
                    }`}
                    type="text"
                    name="company_registration"
                    id="company_name"
                    placeholder=" "
                    {...register("name", { required: true })}
                    autoComplete="off"
                />
                <label htmlFor="company_name">კომპანიის სახელი</label>
            </div>

            {/* საიდენტიფიკაციო კოდი */}
            <div className="main_container">
                <input
                    className={`${
                        errors.identification_code
                            ? "form_error_input"
                            : "empty"
                    }`}
                    type="number"
                    name="company_registration"
                    id="identification_code"
                    placeholder=" "
                    {...register("identification_code", {
                        required: true,
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "დასაშვებია მხოლოდ დადებითი რიცხვები",
                        },
                    })}
                />
                <label htmlFor="identification_code">
                    საიდენტიფიკაციო კოდი
                </label>
            </div>
            {errors.identification_code && (
                <span>{errors.identification_code.message}</span>
            )}

            {/* სამართლებრივი ფორმა */}
            <div className="main_container">
                <div
                    className={`select`}
                    name="company_registration"
                    id="forms"
                    onClick={() => {
                        setCompanyRegOpen(!companyRegOpen);
                        setCountryOpen(false);
                        setPhoneNumOpen(false);
                    }}
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
                        <div className="dropdawn" ref={ref}>
                            {companyStatus &&
                                companyStatus.map((data, i) => (
                                    <p
                                        key={i}
                                        value={data}
                                        onClick={() => {
                                            setCompanyReg(data);
                                            setCompanyRegOpen(!companyRegOpen);
                                        }}
                                    >
                                        {data}
                                    </p>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* ტელ.ნომერი */}
            <div className="main_container">
                <div className="telephone">
                    <div
                        className={`select `}
                        name="dial_code"
                        id="dial_code"
                        onClick={() => {
                            setPhoneNumOpen(!phoneNumOpen);
                            setCompanyRegOpen(false);
                            setCountryOpen(false);
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
                            <div className="dropdawn" ref={ref}>
                                {/* {phoneNum &&
                  phoneNum.map((data, i) => ( */}
                                <aside
                                    // key={i}
                                    value={"+995"}
                                    onClick={(e) => {
                                        // setPhoneNum(data);
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
                        className={`${
                            errors.phone ? "form_error_input" : "empty"
                        }`}
                        type="number"
                        name="company_registration"
                        id="phone"
                        placeholder=" "
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "დასაშვებია მხოლოდ რიცხვები",
                            },
                        })}
                    />
                    <label htmlFor="phone">ტელ.ნომერი</label>
                </div>
            </div>
            {errors.phone && <span>{errors.phone.message}</span>}

            {/* ელ.ფოსტა */}
            <div className="main_container">
                <input
                    className={`${errors.email ? "form_error_input" : "empty"}`}
                    type="email"
                    name="company_registration"
                    id="email"
                    placeholder=" "
                    {...register("email", { required: true })}
                />
                <label htmlFor="email">ელ.ფოსტა</label>
            </div>

            {/* ქვეყანა */}
            <div className="main_container">
                <div
                    className="select"
                    name="company_registration"
                    id="forms"
                    onClick={() => {
                        setCountryOpen(!countryOpen);
                        setCompanyRegOpen(false);
                        setPhoneNumOpen(false);
                    }}
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
                        <div className="dropdawn" ref={ref}>
                            {countrySort &&
                                countrySort.map((data, i) => (
                                    <p
                                        key={i}
                                        value={data}
                                        onClick={(e) => {
                                            setCountry(data);
                                            setCountryOpen(!countryOpen);
                                        }}
                                    >
                                        {data}
                                    </p>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* ქალაქი */}
            <div className="main_container">
                <input
                    className={`${errors.city ? "form_error_input" : "empty"}`}
                    type="text"
                    name="company_registration"
                    id="city"
                    placeholder=" "
                    {...register("city", { required: true })}
                />
                <label htmlFor="city">შეიყვანე ქალაქი/დაბა/სოფელი</label>
            </div>

            {/* ფაქტიური მისამართი */}
            <div className="main_container">
                <input
                    className={`${
                        errors.address ? "form_error_input" : "empty"
                    }`}
                    type="text"
                    name="company_registration"
                    id="address"
                    placeholder=" "
                    {...register("address", { required: true })}
                />
                <label htmlFor="address">ფაქტიური მისამართი</label>
            </div>

            {/* პაროლი */}
            <div className="main_container">
                <input
                    className={`${
                        errors.password ? "form_error_input" : "empty"
                    }`}
                    type={passwordIsShow ? "text" : "password"}
                    name="company_registration"
                    id="password"
                    placeholder=" "
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "პაროლი უნდა იყოს 8 სიმბოლოზე მეტი",
                        },
                    })}
                />
                <label htmlFor="password">პაროლი</label>
                <img
                    src={passwordIcon}
                    alt="password"
                    onClick={() => setPasswordIsShow(!passwordIsShow)}
                />
            </div>
            {errors.password && <span>{errors.password.message}</span>}

            {/* გაიმეორეთ პაროლი */}
            <div className="main_container">
                <input
                    className={`${
                        errors.re_password ? "form_error_input" : "empty"
                    }`}
                    type={rePasswordIsShow ? "text" : "password"}
                    name="company_registration"
                    id="re_password"
                    placeholder=" "
                    {...register("re_password", {
                        required: true,
                        validate: (val) => {
                            if (watch("password") != val) {
                                return "პაროლი არ ეთხვევა ერთმანეთს";
                            }
                        },
                    })}
                />
                <label htmlFor="re_password">გაიმეორეთ პაროლი</label>
                <img
                    src={passwordIcon}
                    alt="password"
                    onClick={() => setRePasswordIsShow(!rePasswordIsShow)}
                />
            </div>
            {errors.re_password && <span>{errors.re_password.message}</span>}

            {/* Agreement */}
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
                    ვეთანხმები{" "}
                    <Link to={"/confidential_politics"}>
                        კონფიდენციალობის პოლიტიკას
                    </Link>
                </label>
            </aside>
            {errors.politic_checked && (
                <span style={{ color: "red" }}>სავალდებულო ველი</span>
            )}

            <button type="submit">რეგისტრაცია</button>

            <aside>
                <label>
                    უკვე რეგისტრირებული ხარ? გაიარე{" "}
                    <Link to={"/log_in"}>ავტორიზაცია</Link>
                </label>
            </aside>
        </form>
    );
}

export default CompanyRegister;
