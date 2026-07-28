import homeAr from "@/mock-api/home.ar.json";
import homeEn from "@/mock-api/home.en.json";

export async function getHomeData(locale: string) {

    // await new Promise((resolve) => setTimeout(resolve, 300));

    return locale === "ar" ? homeAr : homeEn;
}