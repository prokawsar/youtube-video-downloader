<script>
  import SearchBar from './views/SearchBar.svelte';
  import ResultPanel from './views/ResultPanel.svelte';
  import ErrorMessage from './helpers/Error.svelte';

  let video_id = '',
    result_state = false,
    error = false;

  let gotLink = (event) => {
    let { youtube_link } = event.detail;
    let validate_link = youtube_link.includes('youtube.com/watch?v=');

    if (validate_link) {
      video_id = youtube_link.split('=').pop();
      result_state = true;
    } else {
      error = true;
    }
  };
</script>

<div class="container is-fluid">
  <div class="notification">
    <h1 class="title has-text-centered">YouTube video downloader</h1>
    {#if error}
      <ErrorMessage bind:error />
    {/if}

    <SearchBar bind:result_state on:getLink={gotLink} />
  </div>
  <div>
    {#if result_state}
      <ResultPanel bind:video_id />
    {/if}
  </div>

  <footer style="bottom: 10px; position: fixed; width: 100%;">
    <div class="has-text-centered">
      <p>
        Created by <strong
          ><a href="https://github.com/prokawsar" target="_blank"
            >Kawsar Ahmed</a
          ></strong
        >. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php" target="_blank"
          >MIT</a
        >. View source code on
        <a
          href="https://github.com/prokawsar/youtube-video-downloader"
          target="_blank">Github</a
        >
      </p>
    </div>
  </footer>
</div>
