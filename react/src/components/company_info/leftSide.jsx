import CompanySlider from "./slider";

function CompanyInfoLeftSide() {
    const fakeApi = [
        {
            id: 1,
            image: "https://mg.ge/images/services/65023pexels-photo-1029757.jpeg",
            text: "test title",
        },
        {
            id: 2,
            image: "https://mg.ge/images/services/65023pexels-photo-1029757.jpeg",
            text: "test title",
        },
        {
            id: 3,
            image: "https://mg.ge/images/services/65023pexels-photo-1029757.jpeg",
            text: "test title",
        },
        {
            id: 4,
            image: "https://mg.ge/images/services/65023pexels-photo-1029757.jpeg",
            text: "test title",
        },
    ];
    const faleGallery = [
        {
            id: 1,
            image: "https://mg.ge/images/listings/34803pexels-photo-1779487.jpeg",
        },
        {
            id: 2,
            image: "https://mg.ge/images/listings/34803pexels-photo-1779487.jpeg",
        },
        {
            id: 3,
            image: "https://mg.ge/images/listings/34803pexels-photo-1779487.jpeg",
        },
        {
            id: 4,
            image: "https://mg.ge/images/listings/34803pexels-photo-1779487.jpeg",
        },
    ];
    return (
        <>
            {/* About */}
            <div className="company-info ">
                <div className="title padding">
                    <h3>
                        <span>ABOUT:</span> RN53 WEB DEIGN SERVICES
                    </h3>
                </div>
                <div className="about padding">
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32.
                    </p>
                </div>
            </div>

            {/* Services */}

            <div className="company-services company-info">
                <div className="title padding">
                    <h3>
                        <span>SERVICES:</span> OFFERED
                    </h3>
                </div>
                <div className="services_comntainer padding">
                    <CompanySlider data={fakeApi} category={'services'} />
                </div>
            </div>

            {/* Gallery */}
            <div className="company-gallery company-info">
                <div className="title padding">
                    <h3>
                        <span>PHOTO:</span> GALLERY
                    </h3>
                </div>
                <div className="services_comntainer padding">
                    <CompanySlider data={faleGallery} category={'gallery'}/>
                </div>
            </div>
        </>
    );
}

export default CompanyInfoLeftSide;
