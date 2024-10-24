<script lang="ts">
	export let img: { src: string; alt: string };
	export let caption: { class?: string } = {};
</script>

<figure class="w-20 sm:w-28 relative">
	<img
		class="w-full print:border-2 print:rounded-xl print:border-black"
		src={img.src}
		alt={img.alt}
		title={img.alt}
	/>
	<caption class="contents">
		<span class="hidden print:block pt-1 font-normal italic text-center">{img.alt}</span>
		<span
			class="text-sm sm:text-base absolute left-0 print:left-[2px] top-[5px] sm:top-2 px-2 bg-black rounded-lg rounded-tl-none rounded-bl-none {caption.class}"
		>
			<slot />
		</span>
	</caption>
</figure>
