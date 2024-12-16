export function relativeTimeFormat(value: number, unit: Intl.RelativeTimeFormatUnit): string {
	return new Intl.RelativeTimeFormat(`en`, { style: `short` }).format(value, unit);
}

export function formatCurrency(value: number, currency: string = `USD`, locales: string = `en-US`): string {
	return new Intl.NumberFormat(locales, { style: `currency`, currency: currency }).format(value);
}