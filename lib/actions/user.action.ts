import { isRedirectError } from "next/dist/client/components/redirect-error";
import { success } from "zod";
import { signIn, signOut } from "@/auth";
import { signInFormSchema } from "../validators";

// Sign in the user with credentials
export async function singInWithCredentials(
    prevState: unknown,
    formData: FormData,
) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });
        await signIn("credentials", user);

        return { success: true, message: "Signed in sucessfully" };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }

        return { success: false, message: 'Invalid email or password' };
    }
}


// Sing user Out
export async function singOutUser() {
    await signOut();
}