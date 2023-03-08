import { useForm } from "react-hook-form";
import DashboardCategoryForms from "../../../components/dashboard_components/forms/categoryForms";

function DashboardCreateInfo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("category", data.category);
        formData.append("image", data.image[0]);
    };
    return (
        <>
            <section className="dashboard_create_info">
                <DashboardCategoryForms
                    title={"ახალი ინფოს კატეგორიის დამატება"}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="კატეგორიის სახელი"
                            {...register("category", { required: true })}
                        />
                        {errors.category && (
                            <span>სავალდებულოა შესავსებად</span>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            {...register("image", { required: true })}
                        />
                        {errors.image && <span>სავალდებულოა შესავსებად</span>}
                        <button type="submit">შექმნა</button>
                    </form>
                </DashboardCategoryForms>
            </section>
        </>
    );
}

export default DashboardCreateInfo;
