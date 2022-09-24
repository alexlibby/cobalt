<svelte:options tag="cobalt-slider" />

<script>
  export let id = undefined;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let val = 50;
  export let disabled = false;
</script>

<div class="cobalt">
  <input
    type="range"
    {id}
    {min}
    {max}
    {step}
    name={id}
    bind:value={val}
    {disabled}
  />
  <label for={id}>{val}</label>
</div>

<style>
  .cobalt {
    display: flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 160px;
    height: 20px;
    margin: 10px 50px;
    background: linear-gradient(to right, #19247c 0%, #19247c 100%);
    background-size: 150px 10px;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    outline: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
    background: #6666ff;
    position: relative;
    z-index: 3;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #6666ff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #6666ff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-webkit-slider-thumb:hover,
  input[type="range"]::-moz-range-thumb:hover,
  input[type="range"]::-ms-thumb:hover {
    background: #9393ff;
  }

  /* Input Track */
  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
</style>
