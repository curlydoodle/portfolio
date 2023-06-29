<script lang="ts">
    import { useSound } from "svelte-sound";
    import click_mp4 from "$lib/assets/click.mp4";
    const click_sound = useSound(click_mp4, ["click"])
</script>

<button use:click_sound class="btn bg-theme rounded-xl px-4 py-1 my-1 text-theme-text text-sm ring-theme ring-offset-2 ring-offset-background hover:ring-2">
    <slot name="text"></slot>
</button>