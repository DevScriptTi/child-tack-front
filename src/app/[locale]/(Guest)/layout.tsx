import { UpBarItem } from "@/components/local/Navs/UpBar/UpBarItem";
import UpBar, { UpBarGroup } from "@/components/local/Navs/UpBar/UpBar";
import { Sun } from "lucide-react";
import { getLocale } from "next-intl/server";

export default async function layout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();
    return (
        <>
            <UpBar>
                <UpBarGroup grow>
                    <UpBarItem href={`/${locale}`}>Home</UpBarItem>
                    <UpBarItem href={`/${locale}/dashboard`}>Dashboard</UpBarItem>
                </UpBarGroup>
                <UpBarGroup>
                    <UpBarItem href={`/${locale}`} className="text-on-background dark:text-dark-on-background font-normal">Logo</UpBarItem>
                    <UpBarItem icon={<Sun size={24} />} mode="icon"/>
                </UpBarGroup>
            </UpBar>
            {children}
        </>
    )
}