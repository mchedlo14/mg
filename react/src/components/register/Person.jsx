import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function PersonRegistration({ countryData, telCodes }) {
    const [telCodeSort, setTelCodeSort] = useState([]);
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
            <div>
                {/* <label htmlFor="name">სახელი</label> */}
                <input
                    type="text"
                    name="person_registration"
                    id="name"
                    placeholder="სახელი"
                    {...register("name", { required: true })}
                    style={{ border: errors.name && "2px solid red" }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="person_registration"
                    id="last_name"
                    placeholder="გვარი"
                    {...register("last_name", { required: true })}
                    style={{ border: errors.last_name && "2px solid red" }}
                />
            </div>
            <div>
                <div className="telephone">
                    <select name="dial_code" id="dial_code">
                        <option value="+995">+995</option>
                        {telCodeSort &&
                            telCodeSort.map((data, i) => (
                                <option key={i} value={data}>
                                    {data}
                                </option>
                            ))}
                    </select>

                    <input
                        type="number"
                        name="person_registration"
                        id="phone"
                        placeholder="ტელეფონის ნომერი"
                        {...register("phone", { required: true })}
                        style={{ border: errors.mobile && "2px solid red" }}
                    />
                </div>
            </div>
            <div>
                <input
                    type="email"
                    name="person_registration"
                    id="email"
                    placeholder="ელ.ფოსტა"
                    {...register("email", { required: true })}
                    style={{ border: errors.mail && "2px solid red" }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="person_registration"
                    id="destination"
                    placeholder="შეიყვანე ქალაქი/დაბა/სოფელი"
                    {...register("destination", { required: true })}
                    style={{ border: errors.destination && "2px solid red" }}
                />
            </div>
            <div>
                <select
                    name="person_registration"
                    id="sex"
                    {...register("sex", { required: true })}
                    style={{ border: errors.sex && "2px solid red" }}
                >
                    <option value="">სქესი</option>
                    <option value="მამრობობითი">მამრობობითი</option>
                    <option value="მდედრობითი">მდედრობითი</option>
                </select>
            </div>
            <div>
                <input
                    type="text"
                    name="person_registration"
                    id="date"
                    placeholder="დღე/თვე/წელი"
                    {...register("date", { required: true })}
                    style={{ border: errors.date && "2px solid red" }}
                />
            </div>
            <div>
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

export default PersonRegistration;






   {/* Sex */}

   <div className="main_container">
   {/* Country */}
   <div
       className="select"
       name="company_registration"
       id="forms"
       onClick={() => {
           setCountryOpen(false);
           setCompanyRegOpen(false);
           setSexOpen(!sexOpen);
           setPhoneNumOpen(false);
       }}
       // style={{ border: errors.forms && "2px solid red" }}
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
           <div className="dropdawn">
               <option
                   value={"მამრობითი"}
                   onClick={(e) => {
                       setSex(e.target.value);
                       setSexOpen(!sexOpen);
                   }}
               >
                   მამრობითი
               </option>
               <option
                   value={"მდედრობითი"}
                   onClick={(e) => {
                       setSex(e.target.value);
                       setSexOpen(!sexOpen);
                   }}
               >
                   მდედრობითი
               </option>
               <option
                   value={"სხვა"}
                   onClick={(e) => {
                       setSex(e.target.value);
                       setSexOpen(!sexOpen);
                   }}
               >
                   სხვა
               </option>
           </div>
       )}
   </div>
</div>
