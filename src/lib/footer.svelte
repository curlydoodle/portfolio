<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import SiSvelte from "svelte-icons-pack/si/SiSvelte";
    import SiTailwindcss from "svelte-icons-pack/si/SiTailwindcss";
    import IoMail from "svelte-icons-pack/io/IoMail";
    import SiDiscord from "svelte-icons-pack/si/SiDiscord";
</script>

<footer class="border-t border-theme mt-20 px-8 py-6">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex text-xs items-center text-header">
      <div>Made with <span><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></span>.</div>
    </div>
    <div class="flex flex-row gap-2 justify-end">
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={IoMail} color="#9badc1" size="18"/></a>
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={SiDiscord} color="#9badc1" size="18"/></a>
    </div>
  </div>
</footer>