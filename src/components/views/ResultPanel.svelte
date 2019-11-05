<script>
  export let video_id = ''
</script>

<div>
  <span class="title"> List of download formats</span>

  <div class="buttons">
    <iframe class="" src="https://api.download-lagu-mp3.com/@api/button/mp3/{video_id}" width="33%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
    <iframe class="" src="https://api.download-lagu-mp3.com/@api/button/videostreams/{video_id}" width="33%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
    <iframe class="" src="https://api.download-lagu-mp3.com/@api/button/mergedstreams/{video_id}" width="33%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
  </div>

</div>