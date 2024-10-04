import { useEffect } from "react";

const useHorizontalScroll = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY !== 0) {
                window.scrollBy({
                    left: event.deltaY * 50,
                });
                event.preventDefault();
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);
};

export default useHorizontalScroll;
