"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Input } from "@/components/Inputs/inputs";
import Button from "@/components/Buttons/Button";
import { Guardian } from "@/lib/server/type/guardian/guardian";
import { updateGuardian } from "@/lib/server/actions/gurdians/guardianAction";

const updateGuardianSchema = z.object({
    name: z.string()
        .min(1, "name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    last: z.string()
        .min(1, "Last name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    date_of_birth: z.string(), // Format: YYYY-MM-DD
    baladya_id: z.string(),
});

type UpdateGuardianFormData = z.infer<typeof updateGuardianSchema>;

interface UpdateGuardianFormProps {
    guardian: Guardian;
}

export default function UpdateGuardianForm({ guardian }: UpdateGuardianFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<UpdateGuardianFormData>({
        resolver: zodResolver(updateGuardianSchema),
        defaultValues: {
            name: guardian.name,
            last: guardian.last,
        },
    });

    const onSubmit = async (data: UpdateGuardianFormData) => {
        try {
            await updateGuardian(guardian.id, data);

        } catch (error) {
            console.error('Error updating guardian:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
            {isSubmitSuccessful && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 rounded-lg">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <p className="font-medium text-green-800 dark:text-green-200">Guardian updated successfully!</p>
                </div>
            )}
            <Input
                label="name"
                title="Name"
                placeholder="Enter name (First letter capital)"
                error={errors.name?.message}
                register={register}
            />
            <Input
                label="last"
                title="Last Name"
                placeholder="Enter last name (First letter capital)"
                error={errors.last?.message}
                register={register}
            />
            <Button
                type="submit"
                mode="filled"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Updating..." : "Update Guardian"}
            </Button>
        </form>
    );
}
