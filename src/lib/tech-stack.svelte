<script>
	import StackItem from './element.svelte';

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import SiSvelte from "svelte-icons-pack/si/SiSvelte";
    import SiTailwindcss from "svelte-icons-pack/si/SiTailwindcss";
    import SiJavascript from "svelte-icons-pack/si/SiJavascript";
    import SiTypescript from "svelte-icons-pack/si/SiTypescript";
    import IoLogoElectron from "svelte-icons-pack/io/IoLogoElectron";
    import SiCsharp from "svelte-icons-pack/si/SiCsharp";
    import SiUnity from "svelte-icons-pack/si/SiUnity";
    import SiPython from "svelte-icons-pack/si/SiPython";
</script>

<div class="flex flex-col h-full justify-center items-center text-left px-8 py-8">
    <div class="w-full max-w-2xl md:min-w-0 md:w-3/4">
        <h1 class="text-2xl inline-flex items-center text-header">Tech Stack</h1>
        <p class="text-xs py-2 leading-5">I primarily utilize web technologies in my projects, although I am also interested in a wide range of other subjects. You might see me working on games, robotics & more.</p>
        <div class="flex flex-row flex-wrap gap-2.5 pt-2 place-content-start">
            <StackItem>
                <span slot="icon"><Icon src={SiSvelte} size="18" color="#fff"/></span><span slot="text">Svelte</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiTailwindcss} size="18" color="#fff"/></span><span slot="text">Tailwind</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiJavascript} size="18" color="#fff"/></span><span slot="text">JavaScript</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiTypescript} size="18" color="#fff"/></span><span slot="text">TypeScript</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={IoLogoElectron} size="18" color="#fff"/></span><span slot="text">Electron</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiUnity} size="18" color="#fff"/></span><span slot="text">Unity</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiCsharp} size="18" color="#fff"/></span><span slot="text">C Sharp</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiPython} size="18" color="#fff"/></span><span slot="text">Python</span>
            </StackItem>
        </div>
    </div>
</div>