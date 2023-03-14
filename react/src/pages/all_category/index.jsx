import { useNavigate } from "react-router";
import searchIcon from "../../assets/svgs/search.svg";
import { Link } from "react-router-dom";
import InfoBoxLong from "../../components/boxes/infoBox";

function AllCategoryPage() {
    const navigate = useNavigate();
    return (
        <>
            <section className="all_category_header">
                <div className="search_input">
                    <input
                        className="search_container"
                        type="search"
                        placeholder="ძიება..."
                    />
                    <img src={searchIcon} alt="search" />
                </div>
            </section>

            {/* Category Container */}
            <section className="all_category_contaner">
                <InfoBoxLong />
                <InfoBoxLong />
                <InfoBoxLong />
                <InfoBoxLong />
                <InfoBoxLong />
                <InfoBoxLong />
            </section>
        </>
    );
}

export default AllCategoryPage;
