import { useNavigate } from "react-router";
import block from "../../assets/svgs/grid.svg";
import star_filled from "../../assets/svgs/star.svg";
import star_not_filled from "../../assets/svgs/star_not.svg";

function CategoryServicesSidebar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="category_services_side_bar_container">
                <div className="provider_title">
                    <h4>ფილტრაცია</h4>
                </div>

                <div className="hr" />

                {/* List of Categories */}

                <div className="list_of_categories">
                    {/* Categories */}
                    <div className="provided">
                        <div className="category_title">
                            <h4>კატეგორიოა</h4>
                        </div>
                        <div className="category_list">
                            <select>
                                <option value="">აირჩიეთ კატეგორია</option>
                                <option value="">
                                    სილამაზე და ჯანმრთელობა
                                </option>
                                <option value="">ჯანმრთელობა</option>
                            </select>
                        </div>
                    </div>
                    {/* Sub Categories */}
                    <div className="provided">
                        <div className="category_title">
                            <h4>ქვე კატეგორია</h4>
                        </div>
                        {/* List of Sub Categories */}
                        <div className="category_list">
                            <select>
                                <option value="">აირჩიეთ ქვე კატეგორია</option>
                                <option value="">
                                    სილამაზე და ჯანმრთელობა
                                </option>
                                <option value="">ჯანმრთელობა</option>
                            </select>
                        </div>
                    </div>
                    <div className="provided">
                        <div className="category_title">
                            <h4>ქალაქი</h4>
                        </div>
                        {/* List of Sub Categories */}
                        <div className="category_list">
                            <select>
                                <option value="">სატესტო ქალაქი</option>
                                <option value="">
                                    სილამაზე და ჯანმრთელობა
                                </option>
                                <option value="">ჯანმრთელობა</option>
                            </select>
                        </div>
                    </div>

                    {/* List of Cities */}
                    <div className="provided">
                        <div className="category_title">
                            <h4>მახასიათებლები</h4>
                        </div>
                        {/* List of Sub Categories */}
                        <div className="category_list">
                            <ul className="category_sub_list">
                                <li>
                                    <input type="checkbox" name="" id="1" />
                                    <label htmlFor="1">
                                        ყველაზე მეტი მოწონება
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="2" />
                                    <label htmlFor="2">ბოლო განახლება</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="3" />
                                    <label htmlFor="3">
                                        შეთავაზებები და ფასდაკლებები
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="4" />
                                    <label htmlFor="4">პრემიუმ სერვისები</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* List of Features */}

                <div className="submit">
                    <button>გაფილტვრა</button>
                </div>
            </div>
        </>
    );
}

export default CategoryServicesSidebar;
