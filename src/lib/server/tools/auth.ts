import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "./session";
import { User } from "../types/auth/user/User";
import { getUser } from "../actions/auth/getUser";



export async function isAuth(): Promise<boolean> {
  try {
    const cookie = (await cookies()).get("session")?.value;
    if (!cookie) return false;

    const session = await decrypt(cookie);
    if (!session) return false;
    if (new Date(session.expiresAt as string) < new Date()) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
  }
}

export async function isAdmin(): Promise<boolean> {
  try {
    const user = await getUser();
    return user?.user?.key.keyable_type === "admin";
  } catch (error) {
    console.error("Admin check failed:", error);
    return false;
  }
}

export async function isDoctor(): Promise<boolean> {
  try {
   const user = await getUser();
    return user?.user?.key.keyable_type  === "doctor";
  } catch (error) {
    console.error("Doctor check failed:", error);
    return false;
  }
}

export async function isPatient(): Promise<boolean> {
  try {
    const user = await getUser();
    return user?.user?.key.keyable_type === "App\\Models\\Api\\Users\\Patient";
  } catch (error) {
    console.error("Patient check failed:", error);
    return false;
  }
}

export async function isPharmacy(): Promise<boolean> {
  try {
    const user = await getUser();
    return user?.user?.key.keyable_type === "pharmacy";
  } catch (error) {
    console.error("Pharmacy check failed:", error);
    return false;
  }
}





export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookie = (await cookies()).get("user")?.value;
    if (!cookie) return null;

    return JSON.parse(cookie) as User;
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
} 