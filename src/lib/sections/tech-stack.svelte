<script>
	import Element from "../components/element.svelte";

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiSvelte from "svelte-icons-pack/si/SiSvelte";
    import SiTailwindcss from "svelte-icons-pack/si/SiTailwindcss";
    import SiJavascript from "svelte-icons-pack/si/SiJavascript";
    import SiTypescript from "svelte-icons-pack/si/SiTypescript";
    import SiTauri from "svelte-icons-pack/si/SiTauri";
    import SiRust from "svelte-icons-pack/si/SiRust";
    import SiUnity from "svelte-icons-pack/si/SiUnity";
    import SiCsharp from "svelte-icons-pack/si/SiCsharp";
</script>

<div class="w-full px-8 py-6 place-content-center items-stretch text-left">
    <div class="container max-w-[50rem] m-auto">
        <h1 class="text-3xl italic text-header">Tech Stack</h1>
        <div class="max-w-[50rem] py-0.5 text-sm text-text">My current tech stack that I use to develop & make projects. It may change in the future.</div>
        <div class="flex flex-row flex-wrap pt-3 gap-3 max-w-[45rem]">
            <Element><span slot="icon"><Icon src={SiSvelte} color="#dcc9ad" size="18"/></span><span slot="text">Svelte</span></Element>
            <Element><span slot="icon"><Icon src={SiTailwindcss} color="#dcc9ad" size="18"/></span><span slot="text">Tailwind</span></Element>
            <Element><span slot="icon"><Icon src={SiJavascript} color="#dcc9ad" size="18"/></span><span slot="text">Javascript</span></Element>
            <Element><span slot="icon"><Icon src={SiTypescript} color="#dcc9ad" size="18"/></span><span slot="text">Typescript</span></Element>
            <Element><span slot="icon"><Icon src={SiTauri} color="#dcc9ad" size="18"/></span><span slot="text">Tauri</span></Element>
            <Element><span slot="icon"><Icon src={SiRust} color="#dcc9ad" size="18"/></span><span slot="text">Rust</span></Element>
            <Element><span slot="icon"><Icon src={SiUnity} color="#dcc9ad" size="18"/></span><span slot="text">Unity</span></Element>
            <Element><span slot="icon"><Icon src={SiCsharp} color="#dcc9ad" size="18"/></span><span slot="text">C Sharp</span></Element>
        </div>
    </div>
</div>
