<script>
  import Code from '../../components/Code.svelte';
  import Skeleton from '../../components/Skeleton.svelte';
</script>

<svelte:head>
	<title>Components | Sveltify</title>
</svelte:head>

<h2>
  Skeleton
</h2>

<h3>
  Usage
</h3>

Import component & put it into container with <code>position: relative</code>:
<Code language="html">
  {`<script>
  import { Skeleton } from '@zdp/sveltify';
</script>

<div class="skeleton-container">
  <Skeleton />
</div>

<style>
  .skeleton-container {
    position: relative;
    height: 75px;
  }
</style>`}
</Code>

<h3>
  Sample
</h3>

<div class="skeleton-container">
  <Skeleton />
</div>

<h3>
  Known issues
</h3>
<ul>
  <li>
    Animation sometimes didn't plays in Safari.
  </li>
</ul>

<style>
  h3 {
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .skeleton-container {
    position: relative;
    height: 75px;
  }
</style>

