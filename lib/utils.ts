import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular js objject
export function convertTOPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}


// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, float] = num.toString().split('.');
  return float ? `${int}.${float.padEnd(2, '0')}` : `${int}.00`;
}