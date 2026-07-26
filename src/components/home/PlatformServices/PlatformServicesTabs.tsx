"use client";

import { useState } from "react";


type PlatformServiceItem = {
    id: string;
    icon: string;
    image: string;
    description: string;
};

type PlatformServicesTabsProps = {
    items: PlatformServiceItem[];
    translations: {
        documents: string;
        messages: string;
        contacts: string;
        meetings: string;
        calendar: string;
        workspace: string;
        tasks: string;
        cloudStorage: string;
    };
};

const PlatformServicesTabs = ({
    items,
    translations,
}: PlatformServicesTabsProps) => {
    const [activeTab, setActiveTab] = useState(items[0].id);
    const activeItem = items.find((item) => item.id === activeTab);
    return (
        <div className="platform_services_tabs_wrapper">

            <div className="platform_services_inner col-lg-10 mx-auto">
                {activeItem && (
                    <>
                        <p className="platform_services_description mb-4 fsz-25 text-white">
                            {activeItem.description}
                        </p>

                        <img
                            src={activeItem.image}
                            className="secImg"
                            alt={translations[activeItem.id as keyof typeof translations]}
                        />
                    </>
                )}
            </div>
            <div className="col-lg-7 mx-auto pt-4 ">
                <div className="platform_services_tabs mt-5">
                    {items.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={activeTab === item.id ? "active" : ""}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <div className="icon">
                            <img
                                className="iconImg"
                                src={item.icon}
                                alt={translations[item.id as keyof typeof translations]}
                            />
                        </div>

                        <span className="butnTabName">
                            {translations[item.id as keyof typeof translations]}
                        </span>
             
                    </button>
                    ))}
                </div>
            </div>    

 
        </div>
    );
};

export default PlatformServicesTabs;