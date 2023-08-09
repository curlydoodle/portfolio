<script lang="ts">
    import { sound } from "svelte-sound";
</script>

<button use:sound={{src: "/click.mp3", events: ["click"]}} on:click on:keypress class="flex flex-row text-center items-center rounded-full bg-button text-xs text-header shadow-lg transition duration-500 ease-in-out hover:shadow-black">
    <slot name="text"></slot>
</button>