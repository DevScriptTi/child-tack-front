import { UpBarItem } from "@/components/local/Navs/UpBar/UpBarItem";
import UpBar, { UpBarGroup } from "@/components/local/Navs/UpBar/UpBar";
import { getLocale, getTranslations } from "next-intl/server";
import Mode from "@/components/local/Navs/Mode";
import Lang from "@/components/local/Navs/Lang";

export default async function layout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();
    const t = await getTranslations('HomePage.UpBar')
    return (
        <>
            <UpBar>
                <UpBarGroup>
                    <UpBarItem href={`/${locale}/login`}>{t('login')}</UpBarItem>
                    <UpBarItem href={`/${locale}/register`}>{t('register')}</UpBarItem>
                </UpBarGroup>
                <UpBarGroup grow>
                    <UpBarItem href={`/${locale}`}>{t('home')}</UpBarItem>
                    <UpBarItem href={`/${locale}/dashboard`}>{t('dashboard')}</UpBarItem>
                </UpBarGroup>
                <UpBarGroup>
                    <Lang />
                    <Mode />
                    <UpBarItem href={`/${locale}`} className=" font-normal">Logo</UpBarItem>
                </UpBarGroup>
            </UpBar>
            {children}
        </>
    )
}