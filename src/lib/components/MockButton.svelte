<script lang="ts" module>
	export type MockButtonProps = {
		text: string;
		click: () => void;
	};
</script>

<script lang="ts">
	const { text, click }: MockButtonProps = $props();

	function onClickHandler(event: MouseEvent) {
		event.preventDefault();
		click();
	}
</script>

<button type="button" onclick={onClickHandler}>{text}</button>

<style lang="scss">
	button {
		padding: 0.5rem 1rem;
		border: 0;
		background-image: linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%);
		background-size: 200% auto;
		color: #ffffff;
		font-size: 1.5rem;
		text-transform: uppercase;
		width: 100%;
		font-family: 'Bebas Neue', cursive;
		font-weight: 400;
		cursor: pointer;
		transition: 0.4s ease-in-out;
		box-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.1);

		&:hover {
			background-position: right center;
		}
	}
</style>
