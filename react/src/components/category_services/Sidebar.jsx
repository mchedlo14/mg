import block from "../../assets/svgs/grid.svg";
import star_filled from "../../assets/svgs/star.svg";
import star_not_filled from "../../assets/svgs/star_not.svg";

function CategoryServicesSidebar() {
    return (
        <>
            <div className="category_services_side_bar_container">
                <div className="provider_title">
                    <h4>ტოპ კომპანიები</h4>
                </div>
                {/* Top Companies */}
                <ul className="companies_container">
                    <li>
                        <div className="company_box">
                            <div className="image">
                                <img
                                    src="https://mg.ge/images/listings/69656woman-girl-beauty-mask.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <div className="up">
                                    <h5>Sophia Massage Center In Chicago</h5>
                                </div>
                                <div className="down">
                                    <p>
                                        <span>City:</span> No:2, 4th Avenue,
                                        Newyork, USA, Near to Airport
                                    </p>
                                </div>
                            </div>
                            <div className="rating">
                                <p>5.0</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="company_box">
                            <div className="image">
                                <img
                                    src="https://mg.ge/images/listings/69656woman-girl-beauty-mask.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <div className="up">
                                    <h5>Sophia Massage Center In Chicago</h5>
                                </div>
                                <div className="down">
                                    <p>
                                        <span>City:</span> No:2, 4th Avenue,
                                        Newyork, USA, Near to Airport
                                    </p>
                                </div>
                            </div>
                            <div className="rating"></div>
                        </div>
                    </li>
                </ul>

                {/* Categories */}

                <div className="category_title">
                    <div className="svg">
                        <img src={block} alt="" />
                    </div>
                    <div className="title">
                        <h4>კატეგორიები</h4>
                    </div>
                </div>

                {/* List of Categories */}

                <div className="category_list">
                    <select>
                        <option value="">აირჩიეთ კატეგორია</option>
                        <option value="">სილამაზე და ჯანმრთელობა</option>
                        <option value="">ჯანმრთელობა</option>
                    </select>
                </div>

                {/* Sub Categories */}
                <div className="category_title">
                    <div className="svg">
                        <img
                            src={
                                "https://cdn-icons-png.flaticon.com/512/0/315.png"
                            }
                            alt=""
                        />
                    </div>
                    <div className="title">
                        <h4>ქვე. კატეგორიები</h4>
                    </div>
                </div>

                {/* List of Sub Categories */}

                <ul className="category_sub_list">
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">სილამაზე და ჯანმრთელობა</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">მასაჟი</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">საჩუქრები და ხელნაკეთები</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">ტანი და სახე</label>
                    </li>
                </ul>

                {/* Features */}
                <div className="category_title">
                    <div className="svg">
                        <img
                            src={
                                "https://cdn-icons-png.flaticon.com/512/0/315.png"
                            }
                            alt=""
                        />
                    </div>
                    <div className="title">
                        <h4>მახასიათებლები</h4>
                    </div>
                </div>

                {/* List of Features */}

                <ul className="category_sub_list">
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">ყველაზე მეტი მოწონება</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">ბოლო განახლება</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">შეთავაზებები და ფასდაკლებები</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">პრემიუმ სერვისები</label>
                    </li>
                </ul>

                {/* List of Cities */}

                <div className="category_list">
                    <select>
                        <option value="">აირჩიეთ ქალაქი</option>
                        <option value="">თბილისი</option>
                        <option value="">ბათუმი</option>
                    </select>
                </div>

                {/* Rating */}
                <div className="category_title">
                    <div className="svg">
                        <img
                            src={
                                "https://cdn-icons-png.flaticon.com/512/0/315.png"
                            }
                            alt=""
                        />
                    </div>
                    <div className="title">
                        <h4>მახასიათებლები</h4>
                    </div>
                </div>

                {/* List of Ratings */}

                <ul className="category_sub_list category_rating">
                    <li>
                        <input
                            type="radio"
                            name="company_rating"
                            id="five_star"
                        />
                        <label htmlFor="five_star">
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="company_rating"
                            id="four_star"
                        />
                        <label htmlFor="four_star">
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="company_rating"
                            id="three_star"
                        />
                        <label htmlFor="three_star">
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="company_rating"
                            id="two_star"
                        />
                        <label htmlFor="two_star">
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="company_rating"
                            id="one_star"
                        />
                        <label htmlFor="one_star">
                            <div>
                                <img src={star_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                            <div>
                                <img src={star_not_filled} alt="" />
                            </div>
                        </label>
                    </li>
                </ul>

                <div className="submit">
                    <button>გაფილტვრა</button>
                </div>
            </div>
        </>
    );
}

export default CategoryServicesSidebar;
