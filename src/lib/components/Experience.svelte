<script lang="ts">
	export let title: string;
	export let timeSpan: string;
</script>

<h2 class="text-lg font-bold mb-3">
	{title}
	<span class="pl-2 text-sm font-normal italic">{timeSpan}</span>
</h2>

<div class="*:mb-3 mb-14">
	<slot />
</div>
