<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import SiSvelte from "svelte-icons-pack/si/SiSvelte";
    import SiTailwindcss from "svelte-icons-pack/si/SiTailwindcss";
    import IoMail from "svelte-icons-pack/io/IoMail";
    import SiDiscord from "svelte-icons-pack/si/SiDiscord";
</script>

<footer class="mt-4 px-8 py-4 border-t border-theme">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex flex-row text-xs gap-1 items-center">
      <div>Made with</div>
      <a href="https://kit.svelte.dev" target="_blank"><Icon src={SiSvelte} color="#9badc1" size="14"/></a>
      <div>+</div>
      <a href="https://tailwindcss.com" target="_blank"><Icon src={SiTailwindcss} color="#9badc1" size="14"/></a>
    </div>
    <div class="flex flex-row gap-3 justify-end">
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={IoMail} color="#9badc1" size="18"/></a>
      <a href="https://discord.com/users/501804360079245312" target="_blank"><Icon src={SiDiscord} color="#9badc1" size="18"/></a>
    </div>
  </div>
</footer>