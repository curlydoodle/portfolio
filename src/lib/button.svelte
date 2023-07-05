<script lang="ts">
    import { sound } from "svelte-sound";
    import click_mp4 from "$lib/assets/click.mp4";
</script>

<button use:sound={{src: click_mp4, events: ["click"]}} on:click on:keypress class="btn text-center bg-theme hover:bg-gray-800 transition ease-out rounded-xl px-3 py-1 my-2 text-xs">
    <slot name="text"></slot>
</button>