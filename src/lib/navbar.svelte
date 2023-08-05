<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiGithub from "svelte-icons-pack/si/SiGithub";
    import FaBrandsGooglePlay from "svelte-icons-pack/fa/FaBrandsGooglePlay";
</script>

<header class="bg-background shadow-lg stick top-0 z-10 px-8 py-4">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex flex-row items-center">
            <img src="/images/logo.png" alt="logo" class="w-6">
        </div>
        <div class="flex flex-row gap-2 justify-end">
            <a href="https://github.com/akinmustafa" target="_blank"><Icon src={SiGithub} color="#f5f5f6" size="18"/></a>
            <a href="https://play.google.com" target="_blank"><Icon src={FaBrandsGooglePlay} color="#f5f5f6" size="18"/></a>
        </div>
    </div>
</header>