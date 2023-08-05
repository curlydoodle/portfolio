<script lang="ts">
    import { sound } from "svelte-sound";
</script>

<button use:sound={{src: "/click.mp3", events: ["click"]}} on:click on:keypress class="btn text-center bg-theme hover:bg-button text-xs transition ease-out rounded-full px-3 py-1 h-7 my-2">
    <slot name="text"></slot>
</button>