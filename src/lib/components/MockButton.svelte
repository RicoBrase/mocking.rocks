<script lang="ts">
	export let text: string;
	export let click: () => void;
</script>

<button type="button" on:click|preventDefault={click}>{text}</button>

<style lang="scss">
	button {
		padding: 0.5rem 1rem;
		border: 0;
		background-image: linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%);
		background-size: 200% auto;
		color: #ffffff;
		font-weight: bold;
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
