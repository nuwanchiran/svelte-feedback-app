<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { FeedbackStore } from '../stores/Feedback';
  import FeedbackItem from './FeedbackItem.svelte';
</script>

{#each $FeedbackStore as fb, i}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem item={fb} id={i} />
  </div>
{/each}
