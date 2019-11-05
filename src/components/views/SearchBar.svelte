<script>

import LinkViewer from './ResultPanel.svelte';

let result_state = false

let getLink = (event) => {
  event.stopPropagation()
	result_state = true
}
</script>
<div>
	<h1 class="title has-text-centered">YouTube video downloader</h1>

	<div class="field">
		<div class="control has-text-centered">
			<input class="input is-info" type="text" placeholder="YouTube link">
			<button class="button is-link" on:click={getLink}>Get Link</button>
		</div>
	</div>

	{#if result_state}
		<LinkViewer />
	{/if}
</div>