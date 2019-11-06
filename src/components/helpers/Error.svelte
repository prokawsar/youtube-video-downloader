	<script>
    export let error = false
  </script>

  <div class="modal {error ? 'is-active' : ''}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box is-danger">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Invalid YouTube link ! Ex. https://www.youtube.com/watch?v=abcdefg</strong>
                <br>
                  Also be informed that, currently supports only single video link, not playlist.
              </p>
            </div>
          </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" on:click={() => {error = !error}}></button>
  </div>