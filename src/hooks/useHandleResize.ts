import { useLayoutEffect, useState } from "react";

export function useHandleResize() {
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useLayoutEffect(() => {
        function updateDimension() {
            setDimension({
                ...dimension,
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', updateDimension);

        return () => window.removeEventListener('resize', updateDimension);
    })

    const mobileSize: boolean = dimension.width <= 580;

    return { mobileSize, dimension };

}