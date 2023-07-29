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
    import BiLogoAdobe from "svelte-icons-pack/bi/BiLogoAdobe";
</script>

<div class="flex flex-col h-full justify-center items-center text-left px-8 pb-14">
    <div class="max-w-2xl">
        <div class="items-start">
            <h1 class="text-2xl inline-flex items-center text-header">Tech Stack</h1>
            <p class="text-xs py-2 leading-5">I primarily utilize web technologies in my projects, although I am also interested in a wide range of other subjects. You might see me working on games, textures, robotics & more.</p>
            <div class="flex flex-row gap-2 flex-wrap pt-2">
                <StackItem>
                    <span slot="icon"><Icon src={SiSvelte} size="16" color="#F8B595"/></span><span slot="text" class="text-xs">Svelte</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiTailwindcss} size="16" color="#9FD8DF"/></span><span slot="text" class="text-xs">Tailwind</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiJavascript} size="16" color="#ECE493"/></span><span slot="text" class="text-xs">JavaScript</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiTypescript} size="16" color="#98D6EA"/></span><span slot="text" class="text-xs">TypeScript</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={IoLogoElectron} size="16" color="#BEEBE9"/></span><span slot="text" class="text-xs">Electron</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiCsharp} size="16" color="#9CF196"/></span><span slot="text" class="text-xs">C Sharp</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiUnity} size="16" color="#ECECEC"/></span><span slot="text" class="text-xs">Unity</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiPython} size="16" color="#A6E3E9"/></span><span slot="text" class="text-xs">Python</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={SiArduino} size="16" color="#ACDBDF"/></span><span slot="text" class="text-xs">Arduino</span>
                </StackItem>
                <StackItem>
                    <span slot="icon"><Icon src={FaBrandsRaspberryPi} size="16" color="#FFA5A5"/></span><span slot="text" class="text-xs">RPI 4</span>
                </StackItem>
            </div>
        </div>
    </div>
</div>