<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/monokai-sublime.css';
  import Skeleton from './Skeleton.svelte';
  export let code = undefined;
  export let language = false;
  let block = undefined;

  $: {
    if (block && block !== undefined) {
      code = block.querySelector('.source').innerText;
      if (language) {
        block.querySelector('code').innerHTML = hljs.highlight(language, code).value;
      } else {
        block.querySelector('code').innerHTML = hljs.highlightAuto(code).value;
      }
    }
  }
</script>

<pre bind:this={block}>
  <code>
    <Skeleton />
  </code>
  <div class="source">
    <slot>{block}</slot>
  </div>
</pre>

<style>
  pre {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  code {
    background: rgb(87, 88, 80);
    color: #fff;
    box-sizing: border-box;
    display: block;
    padding: 16px;
    min-height: 53px;
    width: 100%;
  }
  .source {
    display: none;
  }
</style>
