<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import FaBrandsGithubAlt from "svelte-icons-pack/fa/FaBrandsGithubAlt";
    import SiItchdotio from "svelte-icons-pack/si/SiItchdotio";
    import SiDiscord from "svelte-icons-pack/si/SiDiscord";

    import { useSound } from "svelte-sound";
    import click_mp4 from "$lib/assets/click.mp4";
    const click_sound = useSound(click_mp4, ["click"])
</script>

<footer class="shadow-inner">
    <div class="w-full p-6 flex justify-center gap-3">
      <a use:click_sound href="https://github.com/mustafaaakin" target="_blank"><Icon src={FaBrandsGithubAlt}/></a>
      <a use:click_sound href="https://itch.io" target="_blank"><Icon src={SiItchdotio}/></a>
      <a use:click_sound href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={SiDiscord}/></a>
    </div>
</footer>