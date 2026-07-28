import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";
import Image from "next/image";
import "./_DownloadApp.scss";
import Reveal from "@/components/animations/Reveal";


const DownloadApp = async () => {
    const locale = await getLocale();
    const t = await getTranslations("downloadApp");
    const data = await getHomeData(locale);

    const downloadApp = data.downloadApp;

    return (
        <section className="download_app_section">
            <div className="container">

                <div className="download_app_wrapper">
                
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="download_content py-3">
                                <Reveal animation="fade-up" >
                                    <h2 className="fw-bold text-white mb-3 fsz-35">
                                        {t("title")}
                                    </h2>
                                </Reveal>
                                <Reveal animation="fade-down" >
                                    <p className="fsz-20 text-white">
                                        {t("description")}
                                    </p>
                                </Reveal>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-3">

                                {downloadApp.stores.map((store, index) => (
                                    <div
                                        key={store.id}
                                        className="col-6 col-sm-3"
                                    >
                                        <Reveal animation="flip-left" delay={index * 0.2} >
                                            <Link
                                                href={store.url}
                                                className="download_store_card"
                                            >
                                                <div className="img_box">
                                                    <Image
                                                        className="icon"
                                                        src={store.icon}
                                                        alt={store.name}
                                                        width={48}
                                                        height={48}
                                                    />
                                                </div>
                                                <span className="name">
                                                    {store.name}
                                                </span>
                                            </Link>
                                        </Reveal>
                                    </div>
                                ))}

                            </div>
                        </div>

              
                    </div>

                </div>

            </div>
        </section>
    );
};

export default DownloadApp;