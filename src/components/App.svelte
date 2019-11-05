<script>
	import SearchBar from './views/SearchBar.svelte'
	import ResultPanel from './views/ResultPanel.svelte'

	let result_state = false
	let gotLink = (event) => {
		let {youtube_link} = event.detail
		console.log(youtube_link)
		//process link here
		result_state = true
	}

</script>

<div class="container is-fluid">
  <div class="notification">
		<SearchBar bind:result_state on:getLink={gotLink} />
  </div>
	<div>
		{#if result_state}
			<ResultPanel />
		{/if}
	</div>
</div>