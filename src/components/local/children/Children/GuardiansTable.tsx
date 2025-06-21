import Braclet from "@/app/[locale]/(Guardian)/guardian/children/components/Braclert";
import { DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "@/components/DashCrudContent";
import { getChildrens } from "@/lib/server/actions/children/getchildrens";
import { getLocale } from "next-intl/server";


export default async function ChildrensTable() {
    const locale = await getLocale();
    const children = await getChildrens();
    return (
        <>
            <DashContentTable>
                <TableThead list={['Username', 'name', 'last', 'Braclet', 'Email', 'Settings']} />
                <tbody>
                    {
                        children.data.map((child) => (
                            <TableTr key={child.id} >
                                <TableTdMain value={child.username} />
                                <TableTd>
                                    {child.name}
                                </TableTd>
                                <TableTd>
                                    {child.last}
                                </TableTd>
                                <TableTd>
                                    <Braclet child={child} />
                                </TableTd>
                                <TableTd>
                                    Location
                                </TableTd>
                                <TableTd>
                                    settings
                                    {/* <GuardianActions guardian={guardian} /> */}
                                </TableTd>
                            </TableTr>
                        ))
                    }
                </tbody>
            </DashContentTable>
        </>
    )
}

