"use client";
import { Menu} from "lucide-react";

export default function ToggleUpBar() {
    const toggleUpBar = () => {
        const upBar = document.getElementById("NavBarItemsToggled");
        if (upBar) {
            upBar.classList.toggle("hidden");
        }
    };
    return (
        <div
            className="grow flex justify-end lg:hidden"
        >
            <Menu onClick={toggleUpBar} className="text-on-secondary dark:text-dark-on-secondary" size={24} />
        </div>
    );
}