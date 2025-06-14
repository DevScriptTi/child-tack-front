import { getLocale, getTranslations } from "next-intl/server";
import Lang from "../Lang"
import Mode from "../Mode"
import { UpBarItem } from "./UpBarItem"
import ToggleUpBar from "./ToggelUpBar";

export default async function UpBar({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();
    const t = await getTranslations('HomePage.UpBar')
    return (
        <header
            className="sticky z-10  h-header w-full px-2 md:px-4 lg:px-8 flex items-center bg-secondary dark:bg-dark-secondary"
        >
            <UpBarItem href={`/${locale}`} className="text-on-secondary dark:text-dark-on-secondary font-normal">Logo</UpBarItem>
            <Mode />
            <Lang />
            <nav id="NavBarItemsToggled" className="hidden lg:grow
            absolute top-header start-2 w-[calc(100%_-_16px)] lg:static lg:bg-transparent lg:dark:bg-transparent lg:flex lg:justify-center  bg-surface-container  dark:bg-dark-surface-container 
            ">
                <ul className="flex flex-col  lg:flex-row lg:items-center">
                    {children}
                </ul>
            </nav>
            <div
                className="grow flex justify-end items-center "
            >
                <UpBarItem href={`/${locale}/login`}  className="text-on-secondary dark:text-dark-on-secondary">{t('login')}</UpBarItem>
                <UpBarItem href={`/${locale}/register`} className="text-on-secondary dark:text-dark-on-secondary" >{t('register')}</UpBarItem>
                <ToggleUpBar />
            </div>
        </header>
    )
}




