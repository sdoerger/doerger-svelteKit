<!-- <script lang="ts">
	import iconBootstrap from '$lib/assets/img/icons/bootstrap.svg';
</script>

<div class="pt-96 w-full bg-blue-500">
	<div>
		<img src={iconBootstrap} alt="{String(iconBootstrap)}" />
	</div>
</div> -->
<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from '$hooks/transitions/custom-transition';

	let svgFill = 'none'

	let visible = true;
</script>

<div class="wrapper">
	{#if visible}
		<!-- <svg
			xmlns:dc="http://purl.org/dc/elements/1.1/"
			xmlns:cc="http://creativecommons.org/ns#"
			xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
			xmlns:svg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			id="svg5046"
			version="1.1"
			viewBox="0 0 50 50"
			height="50mm"
			width="50mm"
		>
			<defs id="defs5040" />

			<g style="display:inline" id="background">
				<circle
					in:expand={{ duration: 1000, delay: 800, easing: quintOut }}
					r="12.111837"
					cy="272"
					cx="25"
					id="path5042"
					style="opacity:1;fill:#008849;fill-opacity:1;stroke:#008849;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					transform="translate(0,-247)"
				/>
			</g>

			<g style="display:inline" transform="translate(0,-247)" id="draw-line">
				<path
					in:draw={{ duration: 800 }}
					d="m 18.963249,271.54142 5.11928,5.88254 16.621216,-13.3733 c -4.624996,-7.33644 -9.696966,-10.5123 -18.398843,-9.418 -9.407725,1.18306 -15.8732057,10.07183 -14.7734199,19.63013 1.0997857,9.55831 9.3987219,16.23758 19.2969299,15.20827 11.395441,-1.18501 19.680898,-12.82477 13.875333,-25.4204"
					style="opacity:1;fill:none;stroke:#008849;stroke-width:4.84156466;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
					id="path5046"
				/>
			</g>

			<g style="display:inline" id="white-fill">
				<path
					in:fade={{ delay: 800 }}
					d="m 18.963248,24.541422 5.11928,5.88254 16.621217,-13.3733 C 36.078748,9.7142223 31.006779,6.5383623 22.304901,7.6326623 12.897176,8.8157223 6.4316962,17.704492 7.5314812,27.262792 c 1.099786,9.55831 9.3987218,16.23758 19.2969298,15.20827 11.395442,-1.18501 19.6809,-12.82477 13.875334,-25.4204"
					style="display:inline;opacity:1;fill:none;stroke:#ffffff;stroke-width:4.84156513;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers;fill-opacity:1"
					id="path5046-1"
				/>
			</g>
		</svg> -->

		<svg
			id="Capa_1"
			enable-background="new 0 0 512 512"
			height="512"
			viewBox="0 0 512 512"
			width="512"
			xmlns="http://www.w3.org/2000/svg"
			><g
				><path
					d="m99.74 248.201c12.347 12.361 26.845 7.838 36.26 8.799 8.284 0 15-6.716 15-15s-6.716-15-15-15l-15.033-.001c-.591-6.661 2.345-18.035-6.255-30.332 8.616-12.32 5.668-23.958 6.255-30.667h15.033c8.284 0 15-6.716 15-15s-6.716-15-15-15c-9.778.999-23.884-3.591-36.26 8.799-16.72 16.74-2.162 36.867-13.763 36.867-8.284 0-15 6.716-15 15s6.716 15 15 15c2.763 0 5.003 2.239 5 5.007.704 5.876-3.08 19.67 8.763 31.528z"
				/><path
					d="m426 361.333c-2.76 0-5.003-2.239-5-5.005l.012-10.295c.018-16.592-13.405-30.033-30-30.033h-15.034c-8.284 0-15 6.716-15 15s6.716 15 15 15h15.034c.591 6.663-2.345 18.035 6.254 30.333-8.614 12.322-5.661 23.892-6.254 30.667h-15.034c-8.284 0-15 6.716-15 15s6.716 15 15 15c9.785-.999 23.86 3.613 36.259-8.798 5.667-5.673 8.784-13.215 8.775-21.235l-.012-10.629c-.003-2.762 2.234-5.005 5-5.005 8.284 0 15-6.716 15-15s-6.716-15-15-15z"
				/><path
					d="m316.811 301h-210.811c-8.284 0-15 6.716-15 15s6.716 15 15 15h210.811c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
				/><path
					d="m316.811 362h-90.811c-8.284 0-15 6.716-15 15s6.716 15 15 15h90.811c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
				/><path
					d="m166 362h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
				/><path
					d="m195 211h211c8.284 0 15-6.716 15-15s-6.716-15-15-15h-211c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
				/><path
					d="m421 256c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15z"
				/><path
					d="m195.189 241c-8.284 0-15 6.716-15 15s6.716 15 15 15h90.811c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
				/>
				<g>
					<path
						in:draw={{ duration: 800 }}
						fill="{svgFill}"
						d="m497 0h-482c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15v-482c0-8.284-6.716-15-15-15zm-15 61h-30.95v-31h30.95zm-90.95 0v-31h30v31zm-180.798 0 .517-31h150.281v31zm-180.252 421v-452h150.764l-.762 45.75c-.139 8.404 6.641 15.25 14.998 15.25h287v391z"
					/>
					<path
						in:fade={{ delay: 400 }}
						d="m497 0h-482c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15v-482c0-8.284-6.716-15-15-15zm-15 61h-30.95v-31h30.95zm-90.95 0v-31h30v31zm-180.798 0 .517-31h150.281v31zm-180.252 421v-452h150.764l-.762 45.75c-.139 8.404 6.641 15.25 14.998 15.25h287v391z"
					/>
				</g>
				<path
					d="m136.05 91c8.284 0 15-6.716 15-15s-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
				/></g
			></svg
		>
	{/if}
</div>

<label>
	<input type="checkbox" bind:checked={visible} />
	toggle me
</label>

<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet" />

<style>
	svg {
		padding-top: 50px;
		padding-left: 50px;
		width: 50%;
		height: 50%;
	}

	path {
		stroke: black;
		stroke-width:10;
		/* fill: none; */
		opacity: 1;
	}

	label {
		position: absolute;
		top: 1em;
		left: 1em;
	}

	.wrapper {
		background-color: #e0e0e0;
		min-height: 100vh;
	}
</style>
