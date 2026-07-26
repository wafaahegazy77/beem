import axios from "axios";

// 1. Create customized axios instance
const apiClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
        "Accept": "application/json",
        "X-Api-Secret": process.env.NEXT_PUBLIC_API_SECRET,
        "lang": "en",
    },
});

// 2. Centralized Endpoints Configuration
export const endpoints = {
    // home: "/pages/home",
    home: "/pages/home",
    about: "/pages/about-us",
    services: "/pages/services",
    fleet: "/pages/fleet",
    destinations: "/pages/destinations",
    contact: "/pages/contact-us",
    faqs: "/faqs",
    partners: "/partners",
};

// 3. Centralized API Fetcher Object
export const api = {
    getHome: (locale?: string) => apiClient.get(endpoints.home, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getAbout: (locale?: string) => apiClient.get(endpoints.about, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getServices: (locale?: string) => apiClient.get(endpoints.services, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getFleet: (locale?: string) => apiClient.get(endpoints.fleet, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getDestinations: (locale?: string) => apiClient.get(endpoints.destinations, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getContact: (locale?: string) => apiClient.get(endpoints.contact, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getFaqs: (locale?: string) => apiClient.get(endpoints.faqs, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
    getPartners: (locale?: string) => apiClient.get(endpoints.partners, { headers: locale ? { lang: locale } : {} }).then((res) => res.data),
};

export default apiClient;
