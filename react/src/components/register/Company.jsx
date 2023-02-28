import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function CompanyRegister({ countryData }) {
    const [countrySort, setCountrySort] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {};
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
                {/* <label htmlFor="company_id">საიდენტიფიკაციო კოდი</label> */}
                <input
                    type="text"
                    name="person_registration"
                    id="company_id"
                    placeholder="საიდენტიფიკაციო კოდი"
                    {...register("company_id", { required: true })}
                    style={{ border: errors.company_id && "2px solid red" }}
                />
            </div>
            <div>
                {/* <label htmlFor="forms">სამართლებრივი ფორმა</label> */}
                <select
                    name="person_registration"
                    id="forms"
                    {...register("forms", { required: true })}
                    style={{ border: errors.forms && "2px solid red" }}
                >
                    <option value="">აირჩიეთ ფორმა</option>
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
                {/* <label htmlFor="mobile">ტელ.ნომერი</label> */}
                <div className="telephone">
                    <select name="dial_code" id="dial_code">
                        <option value="+995">Geo</option>
                    </select>

                    <input
                        type="number"
                        name="person_registration"
                        id="mobile"
                        placeholder="ტელ.ნომერი"
                        {...register("mobile", { required: true })}
                        style={{ border: errors.mobile && "2px solid red" }}
                    />
                </div>
            </div>
            <div>
                {/* <label htmlFor="mail">ელ.ფოსტა</label> */}
                <input
                    type="email"
                    name="person_registration"
                    id="mail"
                    placeholder="ელ.ფოსტა"
                    {...register("email", { required: true })}
                    style={{ border: errors.email && "2px solid red" }}
                />
            </div>
            <div>
                <select name="" id="">
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
                {/* <label htmlFor="city">ქალაქი</label> */}
                <input
                    type="text"
                    name="person_registration"
                    id="city"
                    placeholder="შეიყვანე ქალაქი/დაბა/სოფელი"
                    {...register("city", { required: true })}
                    style={{ border: errors.city && "2px solid red" }}
                />
            </div>

            <div>
                {/* <label htmlFor="address">ფაქტიური მისამართი</label> */}
                <input
                    type="text"
                    name="person_registration"
                    id="address"
                    placeholder="ფაქტიური მისამართი"
                    {...register("address", { required: true })}
                    style={{ border: errors.address && "2px solid red" }}
                />
            </div>

            <div>
                {/* <label htmlFor="password">პაროლი</label> */}
                <input
                    type="password"
                    name="person_registration"
                    id="password"
                    placeholder="პაროლი"
                    {...register("password", { required: true })}
                    style={{ border: errors.password && "2px solid red" }}
                />
            </div>
            <div>
                {/* <label htmlFor="re_password">გაიმეორეთ პაროლი</label> */}
                <input
                    type="password"
                    name="person_registration"
                    id="re_password"
                    placeholder="გაიმეორეთ პაროლი"
                    {...register("re_password", { required: true })}
                    style={{ border: errors.re_password && "2px solid red" }}
                />
            </div>
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
            {errors.politic_checked && (
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
