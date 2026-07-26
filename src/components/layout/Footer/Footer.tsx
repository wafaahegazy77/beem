

import Link from "next/link";
import "./_Footer.scss";
import { getTranslations } from "next-intl/server";
import FooterLanguageSwitcher from "./FooterLanguageSwitcher";


const Footer = async () => {
    const t = await getTranslations("footer");

    return (
        <footer className="footer_section">
            <div className="container">

                <div className="footer_cta">

                    <div className="row align-items-center">

                        <div className="col-lg-7">
                            <p className="cta_text">
                                {t("cta.description")}
                            </p>
                        </div>

                        <div className="col-lg-5">
                            <div className="cta_buttons">
                                <Link className="butn bg-blue radius-10 hvr-txt-trans hvr-scale" href="/pricing">
                                    <div className="txt" data-text={t("cta.primaryButton")}><span> {t("cta.primaryButton")} </span></div>
                                </Link>
                                <Link className="butn border border-dr-2 radius-10 hvr-txt-trans hvr-scale" href="/contact">
                                    <div className="txt" data-text={t("cta.secondaryButton")}><span> {t("cta.secondaryButton")} </span></div>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="footer_content">
                    <div className="row">
                        <div className="col-lg-4 ps-lg-5">
                            <div className="footer_card">

                                <Link href="/" className="footer_logo d-block">
                                    <img src="/images/logo.svg" alt="Beem" />
                                </Link>

                                <img src="/images/iso.svg" className="iso_img" alt="ISO Certifications" />
                                
                                <p className="copyright">
                                    2026 © Beem Digital Ltd.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footer_top pb-4 mb-4 border-bottom">

                                <div className="row align-items-center justify-content-between ">

                                    <div className="col-lg-4">
                                        <FooterLanguageSwitcher />

                                    </div>
                                    <div className="col-lg-6">

                                        <div className="footer_social d-flex align-items-center justify-content-end">

                                            <Link href="#" aria-label="Facebook">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </Link>

                                            <Link href="#" aria-label="Instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>

                                            <Link href="#" aria-label="LinkedIn">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </Link>

                                            <Link href="#" aria-label="X">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="footer_links">

                                <div className="row">

                                    <div className="col-lg-4">
                                        <div className="footer_column">

                                            <h5 className="title">{t("links.services")}</h5>

                                            <ul>
                                                <li><Link href="#">{t("links.cloudStorage")}</Link></li>
                                                <li><Link href="#">{t("links.contactCenter")}</Link></li>
                                                <li><Link href="#">{t("links.tasks")}</Link></li>
                                                <li><Link href="#">{t("links.personalBeem")}</Link></li>
                                                <li><Link href="#">{t("links.notes")}</Link></li>
                                                <li><Link href="#">{t("links.messages")}</Link></li>
                                                <li><Link href="#">{t("links.meetings")}</Link></li>
                                                <li><Link href="#">{t("links.calendar")}</Link></li>
                                                <li><Link href="#">{t("links.documents")}</Link></li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="footer_column">

                                            <h5 className="title">{t("links.about")}</h5>

                                            <ul>
                                                <li><Link href="#">{t("links.helpCenter")}</Link></li>
                                                <li><Link href="#">{t("links.contactUs")}</Link></li>
                                                <li><Link href="#">{t("links.terms")}</Link></li>
                                                <li><Link href="#">{t("links.privacy")}</Link></li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="footer_column">

                                            <h5 className="title">{t("links.download")}</h5>

                                            <ul>
                                                <li><Link href="#">{t("links.appStore")}</Link></li>
                                                <li><Link href="#">{t("links.googlePlay")}</Link></li>
                                                <li><Link href="#">{t("links.windows")}</Link></li>
                                                <li><Link href="#">{t("links.mac")}</Link></li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </footer>
    );
};

export default Footer;