<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiGithub from "svelte-icons-pack/si/SiGithub";
</script>

<header class="flex  px-8 py-4 justify-center">
    <div class="container max-w-[50rem] stick top-0 z-10 rounded-full shadow-lg backdrop-blur-xs border border-card">
        <div class="container flex items-center justify-between">
            <img src="/favicon.png" alt="logo" class="w-10 h-10 sepia">
            <div class="flex flex-row justify-end gap-2 mr-4">
                <a href="https://github.com/akinmustafa" target="_blank"><Icon src={SiGithub} color="#d7c6a7" size="18"/></a>
            </div>
        </div>
    </div>
</header>
