"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const FooterLanguageSwitcher = () => {

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (newLocale: "ar" | "en") => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="dropdown footer_language">

            <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
            >
                <i className="fa-light fa-globe"></i>
                <span>{locale === "ar" ? "العربية" : "English"}</span>
            </button>

            <ul className="dropdown-menu">

                <li>
                    <button
                        className={`dropdown-item ${locale === "ar" ? "active" : ""}`}
                        onClick={() => changeLanguage("ar")}
                    >
                        العربية
                    </button>
                </li>

                <li>
                    <button
                        className={`dropdown-item ${locale === "en" ? "active" : ""}`}
                        onClick={() => changeLanguage("en")}
                    >
                        English
                    </button>
                </li>

            </ul>

        </div>
    );
};

export default FooterLanguageSwitcher;