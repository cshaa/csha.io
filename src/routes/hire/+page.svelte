<script lang="ts">
	import '@fontsource/inter';
	import '../style.css';
	import Figure from '../../lib/components/HireFigure.svelte';
	import Experience from '../../lib/components/Experience.svelte';

	const ChartiumDemoPromise = import('$lib/components/ChartiumDemo.svelte').then((d) => d.default);
</script>

<main>
	<h1>Michal Grňo</h1>
	<h2 class="text-xl font-bold mb-3">Zkušenosti</h2>
	<div class="flex flex-row gap-5 font-bold mb-10">
		<Figure img={{ src: '/js.svg', alt: 'JavaScript' }}>10+ let</Figure>
		<Figure img={{ src: '/ts.svg', alt: 'TypeScript' }}>6 let</Figure>
		<Figure img={{ src: '/rust.svg', alt: 'Rust' }}>2 roky</Figure>
	</div>
	<Experience title="MFF Cuni" timeSpan="2017 – 2022">
		<p>
			Vystudoval jsem fyziku na matfyzu – bakalářské studium jsem dokončil, magisterského zanechal.
			<a href="https://github.com/cshaa/thesis-magnetic-transport">Bakalářskou práci</a> jsem
			vypracoval pod vedením
			<a href="https://scholar.google.com/citations?user=ZIkI0z4AAAAJ&hl=cs&oi=ao"
				>prof. Pavla Exnera</a
			>, jednoho z našich předních vědců.
		</p>
	</Experience>
	<Experience title="Storage Analytics" timeSpan="2021 – současnost">
		<p>
			Pracuji jako frontend vývojář pro společnost Soumind. Náš hlavní produkt je soubor nástrojů
			pro analýzu výkonu diskových polí, který používá společnost DHL. Killer feature: <a
				href="https://github.com/chartium/libchartium">naše vlastní knihovna</a
			> pro vykreslování grafů napsaná v Rustu, která zvládá responzivně vykreslovat tisíce křivek s
			desetitisíci datapointy. Interně používáme GitHub (issues, CI, project board, sprints).
		</p>
		<p class="!mb-1">
			<strong>Stack:</strong> SvelteKit, Tailwind, Rust, Axum, React (legacy)
		</p>
		<p>
			<strong>Team:</strong> <a href="https://codektiv.dev">Codektiv</a>
		</p>
		<div class="h-60 relative flex flex-row justify-center">
			<div class="w-3/4 h-full relative">
				{#await ChartiumDemoPromise}
					<div class="skeleton h-full w-full left-0 top-0 blur-[1px] shadow-sm" />
				{:then ChartiumDemo}
					<ChartiumDemo />
				{/await}
			</div>
		</div>
	</Experience>
	<Experience title="iKariéra App" timeSpan="2021 – 2023">
		<p>
			V roce 2022 jsme s týmem kamarádů pro IAESTE ČVUT Praha pracovali mobilní aplikaci, která
			sloužila jako průvodce jejich veletrhem práce. Díky spokojenosti s naší prací jsme byli o rok
			později opět osloveni, abychom aplikaci dále vylepšili pro příští veletrh.
		</p>
		<p class="!mb-1">
			<strong>Stack:</strong> Flutter, SvelteKit
		</p>
		<p>
			<strong>Team:</strong> <a href="https://codektiv.dev">Codektiv</a>
		</p>
		<div class="flex flex-row justify-evenly relative *:w-[28%] *:rounded print:*:border">
			<img
				src="/fair-1.png"
				alt={`Snímek obrazovky ukazující hlavní menu aplikace Veletrh iKariéra.
Nahoře je ikona pro přepnutí jazyka, pod ní titulek „veletrh... iKariéra na ČVUT“
a pod titulkem tlačítka: O veletrhu, Seznam firem, Pracovní nabídky, Program dne,
O IAESTE, Soutěž. Na spodním kraji obrazovky je navigační panel s ikonkami pro
rychlou navigaci: „domů“, „seznam“, „mapa“ a „kalendář“.`}
			/>
			<img
				src="/fair-2.png"
				alt={`Snímek obrazovky ukazující interaktivní mapu veletrhu. Uprostřed nahoře
je nadpis Mapa, pod ním aktuální den veletrhu: úterý. Pod nimi jsou vyznačeny tři fakulty
v kampusu ČVUT: fakulta Stavební, fakulta Architektury a fakulta informačních technologií.
Kromě nich je vyznačená také Technická ulice, knihovna a šapitó.`}
			/>
			<img
				src="/fair-3.png"
				alt={`Snímek obrazovky ukazující seznam aktuálních pracovních nabídek. Nahoře je nadpis
„Pracovní nabídky“, pod ním vstupní pole pro vyhledávání a tlačítko s ikonou filtru.
Níže následuje seznam karet s konkrétními pracovními nabídkami – každá obsahuje nadpis
(např. „Vývojář C, C++ a C sharp“ nebo „Junior engineer“), logo firmy a tři až čtyři
tagy se specifiky nabídky. Na spodním kraji obrazovky je navigační panel s ikonkami pro
rychlou navigaci: „domů“, „seznam“, „mapa“ a „kalendář`}
			/>
		</div>
	</Experience>
	<Experience title="Spolupráce s Druit" timeSpan="2024 – současnost">
		<p>
			Aute pariatur pariatur tempor aliqua mollit consequat do ut. Voluptate et nulla do anim do
			esse consectetur reprehenderit veniam labore. Exercitation anim aliquip irure nulla. Irure eu
			eiusmod do labore laborum Lorem incididunt fugiat consequat cillum duis duis ut eu. Eiusmod
			non sunt adipisicing pariatur aute. Nisi anim proident ullamco laborum dolor nulla.
			Exercitation commodo culpa ex aute qui.
		</p>
		<p>
			<strong>Stack:</strong> Astro, Tailwind, DecapCMS
		</p>
		<p>
			<strong>Team:</strong> <a href="https://druit.org/">Druit</a>
		</p>
	</Experience>
</main>

<style lang="postcss">
	:global(html) {
		background-color: hsl(0, 0%, 15%);
		color: hsl(0, 0%, 85%);
	}
	h1 {
		font-family: CMU, 'serif';
		font-weight: normal;
		letter-spacing: normal;
	}
	a {
		@apply text-blue-400;
	}
</style>
