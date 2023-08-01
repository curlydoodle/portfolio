<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiGithub from "svelte-icons-pack/si/SiGithub";
    import FaBrandsGooglePlay from "svelte-icons-pack/fa/FaBrandsGooglePlay";
</script>

<header class="bg-background border-b border-theme stick top-0 z-10 px-8 py-4">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex flex-row items-center gap-1">
            <h1 class="text-header">Mustafa Akın</h1>
        </div>
        <div class="flex flex-row gap-2">
            <a href="https://github.com/akinmustafa" target="_blank"><Icon src={SiGithub} color="#9badc1" size="18"/></a>
            <a href="https://play.google.com" target="_blank"><Icon src={FaBrandsGooglePlay} color="#9badc1" size="18"/></a>
        </div>
    </div>
</header>