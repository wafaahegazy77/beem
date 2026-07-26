"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import './_Navbar.scss'


export default function Navbar() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("navbar");

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "ar" : "en";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ff-heading homeNav">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <img src="/images//logo.svg" alt="Logo" className="logo object-fit-contain" width={100} height={100} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">
                                {t("home")}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/products">
                                {t("products")}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/pricing">
                                {t("pricing")}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/download">
                                {t("download")}
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-side d-flex align-items-center gap-3">
                        <Link className="link fw-medium" href="/login">
                            {t("login")}
                        </Link>
                        <button
                            type="button"
                            className="language_switcher fw-medium "
                            onClick={toggleLanguage}
                        >
                            <i className="fa-regular fa-globe"></i>
                            <span>
                                {locale === "ar" ? "English" : "عربي"}
                            </span>
                        </button>
                        <Link className="butn bg-blue radius-10 hvr-txt-trans hvr-scale" href="/contact">
                            <div className="txt" data-text={t("contact")}><span> {t("contact")} </span></div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}