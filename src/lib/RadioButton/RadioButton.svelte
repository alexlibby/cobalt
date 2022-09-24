<svelte:options tag="cobalt-radiobutton" />

<script>
  export let options = [
    {
      label: "Armstrong-Siddeley",
      value: "Armstrong-Siddeley",
    },
    {
      label: "Jaguar Mark II",
      value: "Jaguar Mark II",
    },
    {
      label: "Ford Zephyr",
      value: "Ford Zephyr",
    },
  ];

  export let userSelected = options[0].value;

  const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");

  function onChange(event) {
    event.target.dispatchEvent(new CustomEvent("onchange", { composed: true }));
  }
</script>

<div class="cobalt">
  {#each options as row}
    <div>
      <input
        type="radio"
        bind:group={userSelected}
        on:change={onChange}
        value={row.label}
        id={row.value}
        {...$$props}
      />
      {row.value}
    </div>
  {/each}
</div>

<style>
  .cobalt {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: column;
  }

  .cobalt > div {
    display: flex;
    align-items: baseline;
    line-height: 24px;
  }

  label {
    display: flex;
    line-height: 24px;
    align-items: center;
  }

  input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0 5px;
    font: inherit;
    color: currentColor;
    width: 18px;
    height: 18px;
    border: 1px solid currentColor;
    border-radius: 50%;
    transform: translateY(-1);
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 16px 16px #19247c;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }
</style>
