import { useState } from "react";
import PricingTerms from "../../components/terms_conditions/price";
import TermsAndConditions from "../../components/terms_conditions/terms";

function TermsAndConditionsPage() {
    return (
        <>
            <section className="terms_and_conditions_section">
                <div className="navigation_container">
                    <button
                        onClick={() => {
                            setChange("terms");
                        }}
                    >
                        წესები და პირობები
                    </button>
                    <button
                        onClick={() => {
                            setChange("pricing");
                        }}
                    >
                        ტარიფები
                    </button>
                </div>

                {change === "terms" && <TermsAndConditions />}
                {change === "pricing" && <PricingTerms />}
            </section>
        </>
    );
}

export default TermsAndConditionsPage;
