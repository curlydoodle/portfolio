<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiGithub from "svelte-icons-pack/si/SiGithub";
    import SiItchdotio from "svelte-icons-pack/si/SiItchdotio";
</script>

<header class="bg-background stick top-0 px-8 py-4 border-b border-theme z-10">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <h1>Mustafa Akın</h1>
        <div class="flex flex-row gap-3">
            <a href="https://github.com/mustafaaakin" target="_blank"><Icon src={SiGithub} color="#9badc1" size="18"/></a>
            <a href="https://itch.io" target="_blank"><Icon src={SiItchdotio} color="#9badc1" size="18"/></a>
        </div>
    </div>
</header>