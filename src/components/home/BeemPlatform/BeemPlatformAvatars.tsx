"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Avatar = {
    id: string;
    name: string;
    image: string;
};

type Props = {
    avatars: Avatar[];
};


export default function BeemPlatformAvatars({
    avatars,
}: Props) {
    const lanes = Array.from({ length: 5 }, (_, laneIndex) =>
        avatars.filter((_, index) => index % 5 === laneIndex)
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!avatars.length) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % avatars.length);
        }, 1800);

        return () => clearInterval(interval);
    }, [avatars]);

    return (
        <>
            {lanes.map((lane, laneIndex) => (
                <div
                    key={laneIndex}
                    className={`beem_avatar_lane beem_avatar_${laneIndex + 1}`}
                >
                    <AnimatePresence mode="wait">
                        {lane.length > 0 && (
                            <motion.div
                                key={lane[currentIndex % lane.length].id}
                                className="beem_avatar"
                                initial={{
                                    y: 80,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: -80,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="avatar_image_wrapper">
                                    <Image
                                        src={lane[currentIndex % lane.length].image}
                                        alt={lane[currentIndex % lane.length].name}
                                        width={45}
                                        height={45}
                                        className="avatar_image"
                                    />
                                </div>

                                <span className="avatar_name">
                                    {lane[currentIndex % lane.length].name}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </>
    );
}