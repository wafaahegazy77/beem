import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";

import "./_Statistics.scss";
import Reveal from "@/components/animations/Reveal";
import NumberCounter from "@/components/NumberCounter";

const Statistics = async () => {
    const locale = await getLocale();
    const t = await getTranslations("statistics");
    const data = await getHomeData(locale);

    const { statistics } = data;

    return (
        <section className="statistics_section pt-4">
            <div className="container">

                <div className="section_head text-center mb-5">
                    <Reveal animation="fade-up" >
                        <span className="section_badge cr-blue fw-medium fsz-22 mb-1">
                            <img src="/images/icons/stars.svg" alt="stars me-3 th-30" className="stars" />
                            {t("badge")}
                        </span>
                    </Reveal>
                    <Reveal  animation="fade-down" >
                        <h2 className="section_title mb-4 fw-bold fsz-50">
                            {t("title")}
                        </h2>
                    </Reveal>
                    <Reveal  animation="zoom-out">
                        <p className="section_description fsz-18 mt-3">
                            {t("description")}
                        </p>
                    </Reveal>
                </div>

                <div className="statistics_grid row">

                    {statistics.items.map((item) => (
                        <div className="col-lg-3" key={item.id}> 
                            <Reveal animation="flip-up" >
                                <div className="stat_card">
                                    <div className="content">
                                        <div className="stat_number">
                                            <span className="value">
                                               <NumberCounter value={item.value} />
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
                            </Reveal>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Statistics;