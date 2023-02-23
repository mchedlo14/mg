import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function PersonRegistration({ countryData, telCodes }) {
    const [telCodeSort, setTelCodeSort] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {};
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        id="mobile"
                        placeholder="ტელეფონის ნომერი"
                        {...register("mobile", { required: true })}
                        style={{ border: errors.mobile && "2px solid red" }}
                    />
                </div>
            </div>
            <div>
                <input
                    type="email"
                    name="person_registration"
                    id="mail"
                    placeholder="ელ.ფოსტა"
                    {...register("mail", { required: true })}
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

            <button type="submit">რეგისტრაცია</button>
        </form>
    );
}

export default PersonRegistration;
