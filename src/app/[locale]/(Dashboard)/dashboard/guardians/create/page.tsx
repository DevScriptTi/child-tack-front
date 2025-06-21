import { DashContenTitle } from "@/components/DashCrudContent";
import CreateAdminForm from "@/components/local/admin/CreateAdminForm";
import DashSection from "@/components/Section/Section";

export default function Create() {
    return (
        <DashSection>
            <DashContenTitle>Create Guardian</DashContenTitle>
            <div className="mb-5"></div>
            <div className="w-1/3">
                <CreateAdminForm />
            </div>
        </DashSection>
    )
}