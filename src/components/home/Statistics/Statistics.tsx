import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";

import "./_Statistics.scss";

const Statistics = async () => {
    const locale = await getLocale();
    const t = await getTranslations("statistics");
    const data = await getHomeData(locale);

    const { statistics } = data;

    return (
        <section className="statistics_section">
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

                <div className="statistics_grid row">

                    {statistics.items.map((item) => (
                        <div className="col-lg-3" key={item.id}> 
                            <div className="stat_card">
                                <div className="content">
                                    <div className="stat_number">
                                        <span className="value">
                                            {item.value}
                                        </span>

                                        <span className="suffix">
                                            {item.suffix}
                                        </span>
                                    </div>

                                    <p className="stat_description">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Statistics;