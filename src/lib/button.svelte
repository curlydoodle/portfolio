<script lang="ts">
    import { sound } from "svelte-sound";
</script>

<button use:sound={{src: "/click.mp3", events: ["click"]}} on:click on:keypress class="btn text-center bg-theme hover:bg-gray-800 text-xs transition ease-out rounded-xl px-3 py-1 my-2">
    <slot name="text"></slot>
</button>