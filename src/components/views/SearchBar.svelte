<script>

import LinkViewer from './ResultPanel.svelte';

export let result_state = false

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
			<span class="icon is-small is-right">
				<i class="fa fa-check"></i>
			</span>
		</div>
	</div>
	<div class="field">
		<div class="control has-text-centered">
			<button class="button is-link" on:click={getLink}>Get Link</button>
		</div>
	</div>

</div>