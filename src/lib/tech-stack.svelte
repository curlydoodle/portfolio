<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
	import StackItem from './element.svelte';

    import SiSvelte from "svelte-icons-pack/si/SiSvelte";
    import SiTailwindcss from "svelte-icons-pack/si/SiTailwindcss";
    import SiJavascript from "svelte-icons-pack/si/SiJavascript";
    import SiTypescript from "svelte-icons-pack/si/SiTypescript";
    import IoLogoElectron from "svelte-icons-pack/io/IoLogoElectron";
    import SiCsharp from "svelte-icons-pack/si/SiCsharp";
    import SiUnity from "svelte-icons-pack/si/SiUnity";
    import SiPython from "svelte-icons-pack/si/SiPython";
    import SiArduino from "svelte-icons-pack/si/SiArduino";
    import FaBrandsRaspberryPi from "svelte-icons-pack/fa/FaBrandsRaspberryPi";
</script>

<div class="flex flex-col h-full justify-center items-center text-left px-8 pb-14">
    <div class="items-start max-w-2xl">
        <div class="text-2xl inline-flex items-center text-header">Tech Stack</div>
        <p class="text-xs py-2">I primarily utilize web technologies in my projects, although I am also interested in a wide range of other subjects. You might see me working on textures, robotics & more.</p>
        <div class="flex flex-row gap-2 flex-wrap">
            <StackItem>
                <span slot="icon"><Icon src={SiSvelte} size="15" color="#cca89c"/></span><span slot="text" class="text-xs">Svelte</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiTailwindcss} size="15" color="#9bdcf0"/></span><span slot="text" class="text-xs">Tailwind</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiJavascript} size="15" color="#e7d8a2"/></span><span slot="text" class="text-xs">JavaScript</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiTypescript} size="15" color="#9fcff2"/></span><span slot="text" class="text-xs">TypeScript</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={IoLogoElectron} size="15" color="#b1f9fc"/></span><span slot="text" class="text-xs">Electron</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiCsharp} size="15" color="#a9edba"/></span><span slot="text" class="text-xs">C Sharp</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiUnity} size="15" color="#9badc1"/></span><span slot="text" class="text-xs">Unity</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiPython} size="15" color="#9fcff2"/></span><span slot="text" class="text-xs">Python</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={SiArduino} size="15" color="#9fcff2"/></span><span slot="text" class="text-xs">Arduino</span>
            </StackItem>
            <StackItem>
                <span slot="icon"><Icon src={FaBrandsRaspberryPi} size="15" color="#f4b1be"/></span><span slot="text" class="text-xs">RPI-4</span>
            </StackItem>
        </div>
    </div>
</div>