import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";
import "./_PlatformServices.scss";
import PlatformServicesTabs from "./PlatformServicesTabs";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";


const PlatformServices = async () => {
    const locale = await getLocale();
    const t = await getTranslations("platformServices");
    const data = await getHomeData(locale);

    const platformServices = data.platformServices;

    return (
        <section className="platform_services_section pt-4">
            <div className="container">
                
                <div className="section_head text-center mb-5">
                    <Reveal animation="fade-up" >
                        <h2 className="section_title mb-4 fw-bold fsz-50 cr-blue">
                            {t("title")}
                        </h2>
                    </Reveal>
                    <Reveal  animation="fade-down" >
                        <p className="section_description fsz-35 mt-3">
                            {t("description")}
                        </p>
                    </Reveal>
                    <Reveal  animation="zoom-out">
                        <Link className="butn bg-blue radius-10 hvr-txt-trans hvr-scale mt-4" href="/pricing">
                            <div className="txt" data-text={t("primaryButn")}><span> {t("primaryButn")} </span></div>
                        </Link>
                    </Reveal>
                </div>
                
                <div className="platform_services_preview">
                    <Reveal animation="zoom-in" >
                        <PlatformServicesTabs
                            items={platformServices.items}
                            translations={{
                                documents: t("tabs.documents"),
                                messages: t("tabs.messages"),
                                contacts: t("tabs.contacts"),
                                meetings: t("tabs.meetings"),
                                calendar: t("tabs.calendar"),
                                workspace: t("tabs.workspace"),
                                tasks: t("tabs.tasks"),
                                cloudStorage: t("tabs.cloudStorage"),
                            }}
                        />
                    </Reveal>

                </div>

            </div>
        </section>
    );
};

export default PlatformServices;