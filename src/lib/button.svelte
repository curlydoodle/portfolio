<script lang="ts">
    import { sound } from "svelte-sound";
</script>

<button use:sound={{src: "/click.mp3", events: ["click"]}} on:click on:keypress class="flex flex-row btn text-center items-center bg-theme text-header hover:bg-button text-sm transition ease-out rounded-full px-4 h-8 my-2 gap-2 shadow-sm">
    <slot name="text"></slot>
</button>