<script lang="ts">
	let mouseX: number;
	let mouseY: number;
	let opacity: number;
	let scale = 1;
	let timeout: ReturnType<typeof setTimeout>;

	function mouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		opacity = 0.9;

		clearTimeout(timeout);
		timeout = setTimeout(() => {
			opacity = 0.2;
		}, 1000);
	}
</script>

<svelte:window on:mousemove={mouseMove} on:mousedown={() => (scale = 1.5)} on:mouseup={() => (scale = 1)}/>

<div class="left-0 top-0 w-6 h-6 rounded-full border-2 border-cursor fixed z-50 opacity-0 pointer-events-none transition ease-out hidden sm:block" style="transform: translateX({mouseX - 12}px) translateY({mouseY - 15}px) scale({scale})"style:opacity/>