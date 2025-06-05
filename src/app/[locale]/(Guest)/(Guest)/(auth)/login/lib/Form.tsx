"use client";

import Button from "@/components/Buttons/Button";
import { Input } from "@/components/Inputs/inputs";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
const LoginShema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must at list 8 char")
})

type LoginData = z.infer<typeof LoginShema>
export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(LoginShema)
    })
    const onSubmit: SubmitHandler<LoginData> = (data) => {
        window.alert(JSON.stringify(data))
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
        >
            <Input
                label="email"
                title="Email"
                placeholder="Enter your email"
                type="email"
                register={register}
                error={errors.email?.message}
            />
            <Input
                label="password"
                title="Password"
                placeholder="Enter your Password"
                type="password"
                register={register}
                error={errors.password?.message}
            />
            <Button type="submit" mode="filled">
                Submit
            </Button>
        </form>
    )
}