<script lang="ts">
	import MockButton from '$lib/components/MockButton.svelte';
	import { mockThisText } from '$lib/mocking';

	const possibleMockingButtonTexts = [
		'Go mock yourself!',
		'Mock me harder, daddy!',
		"Mock 'em all!"
	];

	let mockButtonText = getNewRandomMockingButtonText();
	let textToBeMocked = '';

	function getNewRandomMockingButtonText(): string {
		return possibleMockingButtonTexts[
			Math.floor(Math.random() * possibleMockingButtonTexts.length)
		];
	}

	function onMockButtonClicked(): void {
		const mockedText = mockThisText(textToBeMocked);
		navigator.clipboard.writeText(mockedText);
		mockButtonText = '« COPIED »';
		setTimeout(() => (mockButtonText = getNewRandomMockingButtonText()), 1000);
	}
</script>

<div class="outer-wrapper">
	<div class="box-wrapper">
		<div class="box">
			<textarea placeholder="Input the text to mock here..." bind:value={textToBeMocked}></textarea>

			<MockButton text={mockButtonText} click={onMockButtonClicked} />
		</div>

		{#if textToBeMocked && textToBeMocked.length > 0}
			<div class="preview">
				<p>Preview:</p>
				<p>{mockThisText(textToBeMocked)}</p>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.outer-wrapper {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.box-wrapper {
		display: flex;
		flex-direction: column;
		width: 90%;
		max-width: 500px;
	}

	.box {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		background-color: rgba(255, 255, 255, 0.75);
		box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.1);

		& > textarea {
			border: 0;
			background: white;
			min-height: 5rem;
			max-height: 40vh;
			margin: 0;
			margin-bottom: 1rem;
			font-size: 1rem;
			font-family: 'Arial', sans-serif;
			padding: 1rem;
			resize: vertical;
			box-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.1);
		}
	}

	.preview {
		padding: 1em;
		& > p {
			color: #aaa;
			margin: 0;

			&:first-child {
				text-decoration: underline;
				margin-bottom: 0.5rem;
			}
		}
	}
</style>
