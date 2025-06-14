import { DashContent, DashContenTitle } from "@/components/DashCrudContent";
import UpdateAdminForm from "@/components/local/admin/UpdateForm";

export default async function EditAdminPage({ params }: { params: { admin: string } }) {
    return (
        <DashContent>
            <DashContenTitle>Edit Admin</DashContenTitle>
            <div className="mb-5"></div>
            <UpdateAdminForm admin={Number((await params).admin)} />
        </DashContent>
    )
}