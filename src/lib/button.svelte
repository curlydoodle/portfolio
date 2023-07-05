<script lang="ts">
    import { useSound } from "svelte-sound";
    import click_mp4 from "$lib/assets/click.mp4";
    const click_sound = useSound(click_mp4, ["click"])
</script>

<button on:click on:keypress use:click_sound class="btn text-center bg-theme rounded-xl px-3 py-1 my-2 text-xs">
    <slot name="text"></slot>
</button>