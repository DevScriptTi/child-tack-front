import { AuthCard, AuthTitle } from "../../AuthComponents";
import LoginForm from "./Form";

export default function LoginIndex() {
    return (
        <AuthCard>
            <AuthTitle title="Login" />
            <LoginForm />
            <div
                className="text"
            >

            </div>
        </AuthCard>
    )
}