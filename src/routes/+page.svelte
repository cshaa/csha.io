<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>
<h1>Welcome to my pageeee!</h1>
<p>If you're feeling goofy, commit industrial sabotage.</p>
<p>Let's see what example.com had to say: {data.opinion}</p>

