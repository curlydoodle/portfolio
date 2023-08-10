<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiGithub from "svelte-icons-pack/si/SiGithub";
    import FaBrandsGooglePlay from "svelte-icons-pack/fa/FaBrandsGooglePlay";
</script>

<header class="flex  px-8 py-4 justify-center">
    <div class="container max-w-[60rem] stick top-0 z-10 rounded-full shadow-lg backdrop-blur-xs border border-card">
        <div class="container flex items-center justify-between">
            <img src="/images/logo.png" alt="logo" class="w-12 h-12">
            <div class="flex flex-row justify-end gap-2 mr-4">
                <a href="https://github.com/akinmustafa" target="_blank"><Icon src={SiGithub} color="#d7c6a7" size="18"/></a>
                <a href="https://play.google.com" target="_blank"><Icon src={FaBrandsGooglePlay} color="#d7c6a7" size="18"/></a>
            </div>
        </div>
    </div>
</header>
