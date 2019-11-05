<script>
	import SearchBar from './views/SearchBar.svelte'
	import ResultPanel from './views/ResultPanel.svelte'

	let video_id = ''
	let result_state = false

	let gotLink = (event) => {
		let {youtube_link} = event.detail
		//process link here
		video_id = youtube_link.split('=').pop()
		result_state = true
	}

</script>

<div class="container is-fluid">
  <div class="notification">
		<SearchBar bind:result_state on:getLink={gotLink} />
  </div>
	<div>
		{#if result_state}
			<ResultPanel bind:video_id />
		{/if}
	</div>
</div>