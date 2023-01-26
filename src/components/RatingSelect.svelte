<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let selected;
  const dispatch = createEventDispatcher();
  const handleSelect = (n) => dispatch('rating-select', n);
</script>

<ul>
  {#each Array(10) as _, i}
    <li
      on:click={() => handleSelect(i + 1)}
      class={i + 1 === selected ? 'selected' : ''}
    >
      {i + 1}
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 20px 0;
    display: flex;
    justify-content: space-evenly;
  }
  li {
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 2px;
    border-radius: 50%;
    background-color: #eee;
    cursor: pointer;
    color: #333;
  }
  .selected {
    background-color: #ff6a95;
    color: white;
  }
  li:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
</style>
