import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";
import './_Hero.scss'
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";


const Hero = async () => {
    const locale = await getLocale();
    const t = await getTranslations("hero");
    const data = await getHomeData(locale);

    return (
        <section className="hero_section">
            <div className="container">
                <div className="col-lg-5 mx-auto">
                    <div className="txt_box text-center ">
                        <Reveal  animation="fade-up" trigger="load">
                            <h1 className="title fw-bold cr-blue fsz-55 mb-4">{data.hero.title}</h1>
                        </Reveal>

                        <Reveal  animation="fade-down"  trigger="load">
                            <p className="fsz-18 mb-4">{data.hero.description}</p>
                        </Reveal>

                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Reveal  animation="zoom-out" trigger="load">
                                <Link className="butn bg-blue radius-10 hvr-txt-trans hvr-scale" href="/pricing">
                                    <div className="txt" data-text={t("primaryButton")}><span> {t("primaryButton")} </span></div>
                                </Link>
                            </Reveal>
                            <Reveal  animation="zoom-out"  trigger="load">
                                <Link className="butn border border-dr-2 radius-10 hvr-txt-trans hvr-scale" href="/pricing">
                                    <div className="txt" data-text={t("secondaryButton")}><span> {t("secondaryButton")} </span></div>
                                </Link>
                            </Reveal>
                        </div>

                    </div>
                </div>

            </div>

            <img src="/images//hero_shaow.svg" alt="hero shaow" className="hero_shaow " />
        </section>
    );
};

export default Hero;