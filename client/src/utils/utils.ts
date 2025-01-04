import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function relativeTimeFormat(value: number, unit: Intl.RelativeTimeFormatUnit): string {
	return new Intl.RelativeTimeFormat(`en`, { style: `short` }).format(value, unit);
}

export function formatCurrency(value: number, currency: string = `USD`, locales: string = `en-US`): string {
	return new Intl.NumberFormat(locales, { style: `currency`, currency: currency }).format(value);
}

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
