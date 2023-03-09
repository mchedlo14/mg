import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser, signUp } from "../../api/auth/actions";
import { setRegisterSuccess } from "../../redux/client/auth/slice";
import axios from "axios";

function CompanyRegister({ countryData }) {
    // States
    const [countrySort, setCountrySort] = useState([]);
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/* სახელი */}
                <input
                    type="text"
                    name="company_registration"
                    id="company_name"
                    placeholder="სახელი"
                    {...register("name", { required: true })}
                    style={{ border: errors.company_id && "2px solid red" }}
                />
            </div>
            <div>
                {/* საიდენტიფიკაციო კოდი */}
                <input
                    type="number"
                    name="company_registration"
                    id="company_id"
                    placeholder="საიდენტიფიკაციო კოდი"
                    {...register("identification_code", {
                        required: true,
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "დასაშვებია მხოლოდ რიცხვები",
                        },
                    })}
                    style={{ border: errors.company_id && "2px solid red" }}
                />
                {errors.identification_code && (
                    <span>{errors.identification_code.message}</span>
                )}
            </div>
            <div>
                {/* სამართლებრივი ფორმა */}
                <select
                    name="company_registration"
                    id="forms"
                    {...register("legal_form", { required: true })}
                    style={{ border: errors.forms && "2px solid red" }}
                >
                    <option value="ინდივიდუალური მეწარმე">
                        ინდივიდუალური მეწარმე
                    </option>
                    <option value="შპს">შპს</option>
                    <option value="სპს">სპს</option>
                    <option value="სააქციო საზოგადოე">სააქციო საზოგადოე</option>
                    <option value="კომანდიტური საზოგადოება">
                        კომანდიტური საზოგადოება
                    </option>
                    <option value="კოოპერატივი">კოოპერატივი</option>
                    <option value="არასამეწარმეო(არაკომერციული) იურიდიული პირი">
                        არასამეწარმეო(არაკომერციული) იურიდიული პირი
                    </option>
                    <option value="საჯარო სამართლის სუბიექტი">
                        საჯარო სამართლის სუბიექტი
                    </option>
                    <option value="სხვა">სხვა</option>
                </select>
            </div>
            <div>
                {/* ტელ.ნომერი */}
                <div className="telephone">
                    <select
                        name="dial_code"
                        id="dial_code"
                        {...register("dial_code", {
                            required: true,
                        })}
                    >
                        <option value="+995">Geo</option>
                    </select>

                    <input
                        type="number"
                        name="company_registration"
                        id="phone"
                        placeholder="ტელ.ნომერი"
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "დასაშვებია მხოლოდ რიცხვები",
                            },
                        })}
                        style={{ border: errors.mobile && "2px solid red" }}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
            </div>
            <div>
                {/* ელ.ფოსტა */}
                <input
                    type="email"
                    name="company_registration"
                    id="mail"
                    placeholder="ელ.ფოსტა"
                    {...register("email", { required: true })}
                    style={{ border: errors.email && "2px solid red" }}
                />
            </div>
            <div>
                <select
                    name=""
                    id=""
                    {...register("country", { required: true })}
                >
                    <option value="Georgia">Georgia</option>
                    {countrySort &&
                        countrySort.map((data, i) => (
                            <option key={i} value={data}>
                                {data}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                {/* ქალაქი */}
                <input
                    type="text"
                    name="company_registration"
                    id="city"
                    placeholder="შეიყვანე ქალაქი/დაბა/სოფელი"
                    {...register("city", { required: true })}
                    style={{ border: errors.city && "2px solid red" }}
                />
            </div>

            <div>
                {/* ფაქტიური მისამართი */}
                <input
                    type="text"
                    name="company_registration"
                    id="address"
                    placeholder="ფაქტიური მისამართი"
                    {...register("address", { required: true })}
                    style={{ border: errors.address && "2px solid red" }}
                />
            </div>

            <div>
                {/* პაროლი */}
                <input
                    type="password"
                    name="company_registration"
                    id="password"
                    placeholder="პაროლი"
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "პაროლი უნდა იყოს 8 სიმბოლოზე მეტი",
                        },
                    })}
                    style={{ border: errors.password && "2px solid red" }}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
                {/* გაიმეორეთ პაროლი */}
                <input
                    type="password"
                    name="company_registration"
                    id="re_password"
                    placeholder="გაიმეორეთ პაროლი"
                    {...register("re_password", {
                        required: true,
                        validate: (val) => {
                            if (watch("password") != val) {
                                return "პაროლი არ ეთხვევა ერთმანეთს";
                            }
                        },
                    })}
                    style={{ border: errors.re_password && "2px solid red" }}
                />
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

            <button type="submit">რეგისტრაცია</button>
        </form>
    );
}

export default CompanyRegister;
