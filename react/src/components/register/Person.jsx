import { useEffect, useState, useRef } from "react";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import passwordIcon from "../../assets/images/password.png";

function PersonRegistration({ countryData, telCodes }) {
    // States
    const [telCodeSort, setTelCodeSort] = useState([]);
    // Password State
    const [passwordIsShow, setPasswordIsShow] = useState(false);
    const [rePasswordIsShow, setRePasswordIsShow] = useState(false);

    const ref = useRef();

    const [phoneNum, setPhoneNum] = useState("+995");
    const [phoneNumOpen, setPhoneNumOpen] = useState(false);

    const [sex, setSex] = useState("მამრობითი");
    const [sexOpen, setSexOpen] = useState(false);

    const handleClickOutside = () => {
        setPhoneNumOpen(false);
        setSexOpen(false);
    };

    useOnClickOutside(ref, handleClickOutside);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("last_name", data.identification_code);
        formData.append("email", data.legal_form);
        formData.append("phone", data.dial_code + " " + data.phone);
        formData.append("country", data.country);
        formData.append("email", data.email);
        formData.append("city", data.city);
        formData.append("address", data.address);
        formData.append("password", data.password);

        dispatch(signUp(formData))
            .unwrap()
            .then((originalPromiseResult) => {
                dispatch(setRegisterSuccess(true));
            })
            .catch((rejectedValue) => {});
    };
    // console.log(telCodes);
    useEffect(() => {
        setTelCodeSort(
            telCodes
                .map((data) => data.dial_code)
                .sort(function (a, b) {
                    return a - b;
                })
        );
    }, [telCodes]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            autoSave="off"
            autoComplete="off"
        >
            {/* სახელი */}
            <div className="main_container">
                <input
                    type="text"
                    name="person_registration"
                    id="first_name"
                    {...register("first_name", { required: true })}
                    autoComplete="off"
                />
                <label htmlFor="first_name">სახელი</label>
            </div>
            {/* გვარი */}
            <div className="main_container">
                <input
                    type="text"
                    name="person_registration"
                    id="last_name"
                    {...register("last_name", { required: true })}
                    autoComplete="off"
                />
                <label htmlFor="last_name">გვარი</label>
            </div>
            {/* ტელ.ნომერი */}
            <div className="main_container">
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
                            <div className="dropdawn" ref={ref}>
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
            {/* მაილი */}
            <div className="main_container">
                <input
                    type="email"
                    name="person_registration"
                    id="email"
                    {...register("email", { required: true })}
                    autoComplete="off"
                />
                <label htmlFor="email">ელ.ფოსტ</label>
            </div>
            {/* ადგილმდებარებოა */}
            <div className="main_container">
                <input
                    type="text"
                    name="person_registration"
                    id="destination"
                    {...register("destination", { required: true })}
                    autoComplete="off"
                />
                <label htmlFor="destination">შეიყვანე ქალაქი/დაბა/სოფელი</label>
            </div>
            {/* სქესი */}
            <div className="main_container">
                <div
                    className="select"
                    name="company_registration"
                    id="forms"
                    onClick={() => {
                        setSexOpen(!sexOpen);
                        setPhoneNumOpen(false);
                    }}
                >
                    <div className="values">{sex}</div>

                    <div
                        className="rotate_div"
                        style={{
                            transform: `rotate(${
                                sexOpen ? "45deg" : "-45deg"
                            })`,
                        }}
                    />
                    {sexOpen && (
                        <div className="dropdawn" ref={ref}>
                            <p
                                onClick={() => {
                                    setSex("მამრობითი");
                                    setSexOpen(!sexOpen);
                                }}
                            >
                                მამრობითი
                            </p>
                            <p
                                onClick={() => {
                                    setSex("მდედრობითი");
                                    setSexOpen(!sexOpen);
                                }}
                            >
                                მდედრობითი
                            </p>
                        </div>
                    )}
                </div>
            </div>
            {/* დაბადების თარიღი */}
            <div className="main_container date">
                <input
                    type="date"
                    name="person_registration"
                    id="birth_day"
                    {...register("birth_day", { required: true })}
                    // style={{ border: errors.company_id && "2px solid red" }}
                    autoComplete="off"
                />
                <label htmlFor="birth_day">დაბადების თარიღი</label>
                {/* <div className="calendar">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        // next2Label={false}
                        // next2AriaLabel={false}
                        // showNavigation={false}
                        // showWeekNumbers
                    />
                </div> */}
            </div>
            {/* პაროლი */}
            <div className="main_container">
                <input
                    type={passwordIsShow ? "text" : "password"}
                    name="company_registration"
                    id="password"
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
            <div className="main_container">
                {/* გაიმეორეთ პაროლი */}
                <input
                    type={rePasswordIsShow ? "text" : "password"}
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
                    {...register("terms_checked", { required: true })}
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

export default PersonRegistration;
