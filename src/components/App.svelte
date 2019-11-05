<script>
	import SearchBar from './views/SearchBar.svelte'
	import ResultPanel from './views/ResultPanel.svelte'

	let result_state = false

</script>

<div class="container is-fluid">
  <div class="notification">
		<SearchBar bind:result_state />
  </div>
	<div>
		{#if result_state}
			<ResultPanel />
		{/if}
	</div>
</div>