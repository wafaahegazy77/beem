import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { getHomeData } from "@/lib/api/home";
import "./_BeemPlatform.scss";
import Reveal from "@/components/animations/Reveal";
import BeemPlatformAvatars from "./BeemPlatformAvatars";


const BeemPlatform = async () => {
    const locale = await getLocale();
    const t = await getTranslations("beemPlatform");
    const data = await getHomeData(locale);

    const beemPlatform = data.beemPlatform;

    return (
        <section className="beem_platform_section">
            <div className="container">

                <div className="beem_platform_wrapper">

                    <div className="beem_platform_content mb-5 pb-5">
                        <Reveal animation="zoom-in-up" >
                            <Image
                                src="/images/icon.svg"
                                className="icon mb-4"
                                alt="Beem"
                                width={55}
                                height={55}
                            />
                        </Reveal>
                        <Reveal animation="fade-down" >
                            <h2 className="section_title fw-bold fsz-45 ">
                                {t("title")}
                            </h2>
                        </Reveal>
                    </div>

                    <BeemPlatformAvatars
                            avatars={beemPlatform.avatars}
                        />
                    {/* {beemPlatform.avatars.map((avatar) => (
                        <div
                            key={avatar.id}
                            className={`beem_avatar avatar-${avatar.id} `}
                        >
                            <div className="avatar_image_wrapper">
                                <Image
                                    src={avatar.image}
                                    alt={avatar.name}
                                    width={45}
                                    height={45}
                                    className="avatar_image"
                                />
                            </div>

                            <span className="avatar_name">
                                {avatar.name}
                            </span>
                        </div>
                    ))} */}
                </div>

            </div>
        </section>
    );
};

export default BeemPlatform;