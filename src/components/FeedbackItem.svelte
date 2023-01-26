<script lang="ts">
  import { Feedback, FeedbackStore } from '../stores/Feedback';
  import Card from './Card.svelte';

  export let item: Feedback;
  export let id: number;

  const handleDelete = (index: number) =>
    FeedbackStore.update((current) => current.filter((_d, i) => i !== index));
</script>

<Card>
  <div class="num-display">{id + 1}</div>
  <button class="close" on:click={() => handleDelete(id)}>X</button>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
