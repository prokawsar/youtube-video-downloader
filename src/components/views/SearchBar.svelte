<script>

import LinkViewer from './ResultPanel.svelte';

export let result_state = false

let youtube_link = ''

let getLink = (event) => {
  event.stopPropagation()
	result_state = true
}

let clear = (event) => {
	youtube_link = ''
}
</script>

<div>
	<h1 class="title has-text-centered">YouTube video downloader</h1>

	<div class="field">
		<div class="control has-icons-right">
			<input class="input is-info" type="text" bind:value={youtube_link} placeholder="YouTube link">
			{#if youtube_link != ''}
				<span class="icon is-small is-right" on:click={clear}>
					<i class="fas fa-times-circle" style="cursor: pointer;"></i>
				</span>
			{/if}
		</div>
	</div>
	<div class="field">
		<div class="control has-text-centered">
			<button class="button is-link" on:click={getLink}>Get Link</button>
		</div>
	</div>

</div>