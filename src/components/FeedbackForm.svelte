<script>
  import { FeedbackStore } from '../stores/Feedback';
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import RatingSelect from './RatingSelect.svelte';

  let text = '';
  let rating = 6;

  const MIN_TEXT = 10;
  $: btnDisable = text.trim().length <= MIN_TEXT;

  const handleSubmit = () => {
    FeedbackStore.update((current) => [{ text, rating }, ...current]);
    text = '';
  };
</script>

<Card>
  <h2><center>How would you rate your service with us ?</center></h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <input
        type="text"
        name="feedback"
        id="feedback"
        bind:value={text}
        placeholder="Please tell us something that keeps you comming back"
      />
      <Button disabled={btnDisable} type={'submit'}>Send</Button>
    </div>
    {#if btnDisable}
      <p class="message">
        The message must contain at least {MIN_TEXT} characters
      </p>
    {/if}
  </form>
  <RatingSelect
    on:rating-select={(e) => {
      rating = e.detail;
    }}
    selected={rating}
  />
</Card>

<style>
  h2 {
    padding: 40px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-group {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
  }
  .input-group > input {
    padding: 5px 10px;
    flex-grow: 1;
  }
  .message {
    font-size: 12px;
    color: dodgerblue;
  }
</style>
