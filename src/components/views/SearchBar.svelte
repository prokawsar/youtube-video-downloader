<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let result_state = false;

  let youtube_link = '';

  let clear = (event) => {
    event.stopPropagation();
    youtube_link = '';
  };

  let onGetLink = () => {
    dispatch('getLink', {
      youtube_link,
    });
  };
</script>

<div>
  <div class="field">
    <div class="control has-icons-right">
      <input
        class="input is-info"
        type="text"
        bind:value={youtube_link}
        placeholder="YouTube video link"
      />
      {#if youtube_link != ''}
        <span class="icon is-small is-right has-text-danger" on:click={clear}>
          <i class="fas fa-times-circle" style="cursor: pointer !important ;" />
        </span>
      {/if}
    </div>
  </div>
  <div class="field">
    <div class="control has-text-centered">
      <button
        class="button is-link"
        on:click={onGetLink}
        disabled={!youtube_link}>Appear download buttons</button
      >
    </div>
  </div>
</div>
