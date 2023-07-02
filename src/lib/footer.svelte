<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import FaBrandsGithubAlt from "svelte-icons-pack/fa/FaBrandsGithubAlt";
    import SiItchdotio from "svelte-icons-pack/si/SiItchdotio";
    import SiDiscord from "svelte-icons-pack/si/SiDiscord";
</script>

<footer class="shadow-inner mt-12">
    <div class="w-full p-6 flex justify-center gap-3">
      <a href="https://github.com/mustafaaakin" target="_blank"><Icon src={FaBrandsGithubAlt}/></a>
      <a href="https://itch.io" target="_blank"><Icon src={SiItchdotio}/></a>
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={SiDiscord}/></a>
    </div>
</footer>