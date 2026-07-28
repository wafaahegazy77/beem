"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";

type NumberCounterProps = {
    value: number;
};

export default function NumberCounter({
    value,
}: NumberCounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
            setCount(value);
        }, 1500);

        return () => clearTimeout(id);
    }, [value]);

    return (
        <NumberFlow
            value={count}
            spinTiming={{
                duration: 500,
            }}
            transformTiming={{
                duration: 500,
            }}
        />
    );
}