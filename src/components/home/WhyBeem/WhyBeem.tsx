import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";
import "./_WhyBeem.scss";

const WhyBeem = async () => {
    const locale = await getLocale();
    const t = await getTranslations("whyBeem");
    const data = await getHomeData(locale);

    const whyBeem = data.whyBeem;

    return (
        <section className="why_beem_section">
            <div className="container">

                <div className="section_head text-center mb-5">
                    <span className="section_badge cr-blue fw-medium fsz-22 mb-1">
                        <img src="/images/icons/stars.svg" alt="stars me-3 th-30" className="stars" />
                        {t("badge")}
                    </span>

                    <h2 className="section_title mb-4 fw-bold fsz-50">
                        {t("title")}
                    </h2>

                    <p className="section_description fsz-18 mt-3">
                        {t("description")}
                    </p>
                </div>

                <div className="row mt-5">
                    {whyBeem.items.map((item) => (
                        <div
                            key={item.title}
                            className="col-lg-4 col-md-6 mb-4"
                        >
                            <div className="why_beem_card">

                                <div className="image">
                                    <img
                                        className="cardImg"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="content">
                                    <h3 className="title mb-4 fw-bold">{item.title}</h3>

                                    <p className="fsz-20 fw-medium mb-3">{item.description}</p>

                                    {item.features.length > 0 && (
                                        <ul className="ul">
                                            {item.features.map((feature) => (
                                                <li key={feature}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyBeem;