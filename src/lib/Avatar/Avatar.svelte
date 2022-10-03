<svelte:options tag="cobalt-avatar" />

<script>
  export let src = "";
  export let status = "available" || "busy" || "away" || "unavailable";
  export let statusSize = "small" || "medium" || "large";

  $: statusClasses = () => {
    let inputKlasses = [status, statusSize];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    return inputKlasses.join(" ");
  };
</script>

<div class="cobalt-avatar">
  {#if src}
    <img {src} class="avatar-img" alt="avatar" />
  {/if}
  <slot />
  <span class={statusClasses()} />
</div>

<style>
  .cobalt-avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    border-radius: 50rem;
    width: 2rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  .small {
    border-radius: 50rem;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 25px;
    right: 0px;
    border: 1px solid #373737;
  }

  .medium {
    border-radius: 50rem;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 22px;
    right: -4px;
    border: 1px solid #373737;
  }

  .available {
    background-color: #00ff00;
  }

  .danger {
    background-color: #ff0000;
  }

  .away {
    background-color: #ffff00;
  }

  .unavailable {
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .avatar-img {
    width: 100%;
    height: auto;
    border-radius: 50rem;
  }
</style>
