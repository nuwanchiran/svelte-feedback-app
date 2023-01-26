<script lang="ts">
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';
  import { FeedbackStore } from './stores/Feedback';
</script>

<main class="container">
  <FeedbackForm />
  {#if $FeedbackStore.length > 0}
    <FeedbackStats />
  {/if}
  <FeedbackList />
</main>
