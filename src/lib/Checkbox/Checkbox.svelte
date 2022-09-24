<svelte:options tag="cobalt-checkbox" />

<script>
	export let checked = false;
	export let label = "This is a default checkbox";
	export let disabled = false;

	function onChange(event) {
		event.target.dispatchEvent(new CustomEvent("onclick", { composed: true }));
	}

	$: checked = checked !== false;
</script>

<div class="cobalt">
	<input
		type="checkbox"
		data-testid="checkboxId"
		name="checkbox-name"
		role="checkbox"
		{disabled}
		bind:checked
		on:change={onChange}
		{...$$props}
	/>
	<label for="checkbox-name">
		{label}
	</label>
</div>

<style>
	.cobalt {
		display: flex;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
	}

	input[type="checkbox"] {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
		font: inherit;
		color: currentColor;
		width: 18px;
		height: 18px;
		border: 2px solid currentColor;
		border-radius: 2px;
		transform: translateY(-1px);
		display: grid;
		place-content: center;
	}

	input[type="checkbox"]::before {
		content: "";
		width: 10px;
		height: 10px;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
		transform: scale(0);
		transform-origin: bottom left;
		transition: 120ms transform ease-in-out;
		box-shadow: inset 16px 16px #6666ff;
	}

	input[type="checkbox"]:checked::before {
		transform: scale(1);
	}

	input[type="checkbox"]:disabled {
		color: #959495;
		cursor: not-allowed;
	}

	label {
		margin-left: 5px;
	}
</style>
