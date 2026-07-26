import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";
import "./_Pricing.scss";
import Link from "next/link";

const Pricing = async () => {
    const locale = await getLocale();
    const t = await getTranslations("pricing");
    const data = await getHomeData(locale);

    const pricing = data.pricing;

    return (
        <section className="pricing_section">
            <div className="container">

                <div className="section_head text-center mb-5">
                    <h2 className="section_title mb-4 fw-bold fsz-50 ">
                        {t("title")}
                    </h2>
                </div>

                <div className="row justify-content-center align-items-center0 g-4 mt-5">
                    {pricing.plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="col-xl-4 col-lg-4 col-md-6"
                        >
                            <div className="pricing_card">


                                <h3 className="pricing_title fw-bold cr-blue fsz-25 mb-3">
                                    {plan.name}
                                </h3>

                                <p className="pricing_description fsz-16 mb-4 ">
                                    {plan.description}
                                </p>

                                <div className="pricing_price">

                                    <span className="price fsz-50">
                                        {plan.price}
                                    </span>

                                    {plan.currency && (
                                        <span className="currency">
                                            {plan.currency}
                                        </span>
                                    )}

                                </div>

                                {plan.period && (
                                    <p className="pricing_period fsz-15 mt-3 mb-4">
                                        {plan.period}
                                    </p>
                                )}

                                {plan.badge && (
                                    <div className="pricing_badge mt-5">
                                        {plan.badge}
                                    </div>
                                )}

                                <Link
                                    href={plan.buttonUrl}
                                    className="pricing_btn butn border border-dr-2 radius-10 hvr-txt-trans hvr-scale w-100 mt-4"
                                >
                                    <div className="txt" data-text={plan.buttonText}>
                                        <span>{plan.buttonText}</span>
                                    </div>
                                </Link>

                                <p className="pricing_user_limit fw-medium mt-1 mb-5">
                                    {plan.userLimit}
                                </p>

                                {plan.featuresTitle && (
                                    <h4 className="pricing_features_title fsz-18 fw-bold text-start mt-5">
                                        {plan.featuresTitle}
                                    </h4>
                                )}

                                <ul className="pricing_features mt-4 ">

                                    {plan.features.map((feature) => (
                                        <li key={feature}>
                                            {feature}
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Pricing;