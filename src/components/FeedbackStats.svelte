<script lang="ts">
  import { FeedbackStore } from '../stores/Feedback';

  $: count = $FeedbackStore.length;
  $: avg = $FeedbackStore.reduce((a, { rating }) => a + rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4>{count} Review</h4>
  <h4>
    Average ratings: {avg}
  </h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
</style>
