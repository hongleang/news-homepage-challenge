import { useEffect, useState } from "react";

export function useHandleSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

    }, [sidebarOpen])

    function closeSidebar() {
        setSidebarOpen(false);
    }

    function openSidebar() {
        setSidebarOpen(true);
    }

    return { openSidebar, closeSidebar, sidebarOpen }
}