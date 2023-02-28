import { NavLink } from "react-router-dom";
import dashbooard from "../../assets/images/dashboard.png";
import infoSvg from "../../assets/images/info.png";
import jobsSvg from "../../assets/images/employee.png";
import expertsSvg from "../../assets/images/expert.png";
import creditCardSvg from "../../assets/images/credit-card.png";
import promotionSvg from "../../assets/images/promotion.png";
import seoSvg from "../../assets/images/seo.png";
import invoiceSvg from "../../assets/images/validating-ticket.png";
import userSvg from "../../assets/images/user.png";
import reviewsPng from "../../assets/images/reviews.png";
import heardSvg from "../../assets/images/heart.png";
import notificationsSvg from "../../assets/images/notification.png";

function UserSidebar({ sidebarIsOpen }) {
    return (
        <>
            <div
                className="filter"
                style={{ left: sidebarIsOpen ? "0" : "-100vw" }}
            />

            <div
                className="user_sidebar_container"
                style={{ right: sidebarIsOpen ? "0" : "-250px" }}
            >
                {/* User Info */}
                <div className="user_info">
                    <img
                        src="https://bizbookdirectorytemplate.com/images/user/70369backblue.gif"
                        alt=""
                    />
                    <div>
                        <h3>George</h3>
                    </div>
                </div>
                {/* Lists */}
                <ul>
                    <li>
                        <NavLink to={""}>
                            <img src={dashbooard} alt="dashboard" />
                            სამართავი პანელი
                        </NavLink>
                    </li>
                    {/* All Modules */}
                    <div>
                        <h4>ყველა კატეგორია</h4>
                    </div>
                    <li>
                        <NavLink to={"info"}>
                            <img src={infoSvg} alt="info" />
                            ინფო
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"jobs"}>
                            <img src={jobsSvg} alt="jobs" />
                            სამსახურები
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"experts"}>
                            <img src={expertsSvg} alt="experts" />
                            ექსპერტები
                        </NavLink>
                    </li>
                    {/* Payment & Promotions */}
                    <div>
                        <h4>გადახდა და რეკლამირება</h4>
                    </div>
                    <li>
                        <NavLink to={"payment"}>
                            <img src={creditCardSvg} alt="credit card" />
                            გადახდის სისტემა
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"promotion"}>
                            <img src={promotionSvg} alt="promotion" />
                            რეკლამირება
                        </NavLink>
                    </li>
                    {/* <li>
                    <NavLink to={"seo"}>
                        <img src={seoSvg} alt="seo" />
                        SEO
                    </NavLink>
                </li> */}
                    <li>
                        <NavLink to={"invoice"}>
                            <img src={invoiceSvg} alt="invoice" />
                            ინვოისი
                        </NavLink>
                    </li>
                    {/* Profile */}
                    <div>
                        <h4>პროფილი</h4>
                    </div>
                    <li>
                        <NavLink to={"profile"}>
                            <img src={userSvg} alt="profile" />
                            ჩემი პროფილი
                        </NavLink>
                    </li>
                    {/* Activities */}
                    <div>
                        <h4>აქტივობები</h4>
                    </div>
                    <li>
                        <NavLink to={"rewiews"}>
                            <img src={reviewsPng} alt="rewiews" />
                            განხილვები
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"likes"}>
                            <img src={heardSvg} alt="likes" />
                            მოწონებები
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"notifications"}>
                            <img src={notificationsSvg} alt="notifications" />
                            შეტყობინებები
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"setting"}>
                            <img src={notificationsSvg} alt="setting" />
                            პარამეტრები
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"logout"}>
                            <img src={notificationsSvg} alt="logout" />
                            გასვლა
                        </NavLink>
                    </li>
                </ul>
                {/*  */}
            </div>
        </>
    );
}

export default UserSidebar;
