<script lang="ts">
	import { mockThisText } from '$lib/mocking';

	const footerText = 'This app is OpenSource on Github!';

	let footerShowMockedText = false;

	function getFooterText(shouldBeMocked: boolean): string {
		return shouldBeMocked ? mockThisText(footerText) : footerText;
	}
</script>

<div class="page-wrapper">
	<main>
		<slot />
	</main>
	<footer
		on:mouseenter={() => (footerShowMockedText = true)}
		on:mouseleave={() => (footerShowMockedText = false)}
	>
		<span>{getFooterText(footerShowMockedText)}</span>
		<span>
			<a href="https://github.com/RicoBrase/mocking.rocks/" rel="noopener" target="_blank">
				https://github.com/RicoBrase/mocking.rocks/
			</a>
		</span>
	</footer>
</div>

<style lang="scss">
	:global(:root) {
		font-size: 16px;
	}

	:global(*) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
	}

	:global(body) {
		background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}

	:global(html, body) {
		display: block;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	.page-wrapper {
		display: flex;
		height: 100%;
		flex-direction: column;

		& > main {
			flex: 1;
		}

		& > footer {
			display: flex;
			flex-direction: column;
			flex: 0;
			padding: 0.5rem;
			text-align: center;
			margin-bottom: 0.5rem;

			& span,
			a,
			a:visited {
				text-decoration: none;
				color: #aaa;
			}
		}
	}
</style>
