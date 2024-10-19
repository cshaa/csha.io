<script lang="ts">
	import { ChartComponent as Chart, NumericDateRepresentation, TraceList } from 'libchartium';
	import dayjs from 'dayjs';

	const pointCount = 1024;
	const range = {
		from: dayjs().subtract(1, 'month'),
		to: dayjs()
	};
	const rangeWidth = range.to.diff(range.from);

	const traces = TraceList.fromColumns({
		labels: [
			['electron_neutrino', 'electron neutrino (νₑ)'],
			['muon_neutrino', 'muon neutrino (νₘ)'],
			['tau_neutrino', 'tau neutrino (νₜ)']
		],
		x: {
			type: 'f64',
			data: Float64Array.from(
				{ length: pointCount },
				(_, i) => range.from.valueOf() + (i * rangeWidth) / pointCount
			),
			unit: NumericDateRepresentation.EpochMilliseconds()
		},
		y: {
			type: 'f64',
			columns: [
				{
					id: 'electron_neutrino',
					data: Float64Array.from(
						{ length: pointCount },
						(_, i) =>
							(0.9 * (Math.cos((i * 2 * Math.PI) / pointCount) + 1)) / 2 +
							(0.2 * (Math.cos(i / 4) + 1)) / 2
					)
				},
				{
					id: 'muon_neutrino',
					data: Float64Array.from(
						{ length: pointCount },
						(_, i) =>
							(0.5 * (-Math.cos((i * 2 * Math.PI) / pointCount) + 1)) / 2 +
							(0.15 * (-Math.cos(i / 4) + 1)) / 2
					)
				},
				{
					id: 'tau_neutrino',
					data: Float64Array.from({ length: pointCount }, (_, i) => {
						const val =
							1 -
							((0.9 * (Math.cos((i * 2 * Math.PI) / pointCount) + 1)) / 2 +
								(0.2 * (Math.cos(i / 4) + 1)) / 2 +
								(0.5 * (-Math.cos((i * 2 * Math.PI) / pointCount) + 1)) / 2 +
								(0.15 * (-Math.cos(i / 4) + 1)) / 2);
						return val < 0 ? NaN : val;
					})
				}
			]
		}
	});
</script>

<div class="chart w-full h-full rounded-2xl p-4 print:border print:border-black break-inside-avoid">
	<Chart {traces} hideLegend>
		<div slot="toolbar" />
	</Chart>
</div>

<style lang="postcss">
	.chart {
		background-color: #15191e;
	}
</style>
