/**
 * Mocks the input text.
 * @param input test input
 * @returns tEsT iNpUt
 */
export function mockThisText(input: string): string {
	let wasPreviousCharLowercase = false;
	const modifiedChars: string[] = [];
	for (let c of input.split('')) {
		if (/(?!\d)[\wäÄöÖüÜßẞ]/.test(c)) {
			if (wasPreviousCharLowercase) {
				modifiedChars.push(c.toUpperCase());
			} else {
				modifiedChars.push(c.toLowerCase());
			}
			wasPreviousCharLowercase = !wasPreviousCharLowercase;
		} else {
			modifiedChars.push(c);
		}
	}
	return modifiedChars.join('');
}
