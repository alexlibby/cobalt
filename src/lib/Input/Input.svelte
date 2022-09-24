<svelte:options tag="cobalt-input" />

<script>
	export let label = "Label:";
	export let placeholder = "";
	export let fieldType = "text";
	export let disabled = false;
	export let inputName = "";
	export let fieldID = "";

	function onInput(event) {
		event.target.dispatchEvent(new CustomEvent("oninput", { composed: true }));
	}
</script>

<div class="cobalt">
	{#if label}
		<label for="name">{label}</label>
	{/if}
	<input
		type={fieldType}
		id={fieldID}
		data-testid="inputId"
		role="textbox"
		name={inputName}
		{placeholder}
		{disabled}
		on:input={onInput}
		{...$$props}
	/>
</div>

<style>
	.cobalt {
		display: flex;
		flex-direction: row;
		font-family: Arial, Helvetica, sans-serif;
	}

	input[type="text"] {
		width: 200px;
		border-radius: 4px;
		border-color: #19247c;
		height: 30px;
		outline: none;
	}

	input[type="email"] {
		width: 200px;
		border-radius: 4px;
		border-color: #19247c;
		height: 30px;
		outline: none;
	}

	label {
		padding-right: 10px;
		display: flex;
		align-self: center;
	}
</style>
