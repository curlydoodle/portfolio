<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import IoMail from "svelte-icons-pack/io/IoMail";
    import SiDiscord from "svelte-icons-pack/si/SiDiscord";
</script>

<footer class="px-8 py-6 mt-12 border-t border-theme">
  <div class="container flex flex-wrap items-center justify-between mx-auto max-w-[50rem]">
    <div class="flex text-xs items-center text-text">
      <div>Made with <span><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></span>.</div>
    </div>
    <div class="flex flex-row gap-2 justify-end">
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={IoMail} color="#dddddd" size="18"/></a>
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={SiDiscord} color="#dddddd" size="18"/></a>
    </div>
  </div>
</footer>