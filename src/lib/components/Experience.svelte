<script lang="ts">
	export let title: string;
	export let timeSpan: string;
</script>

<h2 class="text-lg font-bold mb-3 print:mb-1">
	{title}
	<span class="pl-2 text-sm font-normal italic">{timeSpan}</span>
</h2>

<div class="*:mb-3 mb-14 print:*:mb-1 print:mb-6">
	<slot />
</div>
