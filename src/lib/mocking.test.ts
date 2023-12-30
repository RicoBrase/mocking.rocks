import { describe, expect, test } from 'vitest';
import { mockThisText } from './mocking';

describe('mockThisText', () => {
	test.each([
		['test', 'tEsT'],
		['input text', 'iNpUt TeXt'],
		['sample! input', 'sAmPlE! iNpUt']
	])('input "%s" returns "%s"', (actualInput: string, expectedOutput: string) => {
		expect(mockThisText(actualInput)).toBe(expectedOutput);
	});
});
