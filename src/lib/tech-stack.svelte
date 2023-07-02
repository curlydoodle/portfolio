<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import StackElements from './stack-elements.svelte';

    import SiSvelte from "svelte-icons-pack/si/SiSvelte";
    import SiHtml5 from "svelte-icons-pack/si/SiHtml5";
    import SiCss3 from "svelte-icons-pack/si/SiCss3";
    import SiTailwindcss from "svelte-icons-pack/si/SiTailwindcss";
    import SiJavascript from "svelte-icons-pack/si/SiJavascript";
    import SiTypescript from "svelte-icons-pack/si/SiTypescript";
    import IoLogoElectron from "svelte-icons-pack/io/IoLogoElectron";
    import SiCsharp from "svelte-icons-pack/si/SiCsharp";
    import SiUnity from "svelte-icons-pack/si/SiUnity";
    import SiPython from "svelte-icons-pack/si/SiPython";
    import SiArduino from "svelte-icons-pack/si/SiArduino";
    import SiRaspberrypi from "svelte-icons-pack/si/SiRaspberrypi";
</script>

<div class="justify-center text-center px-6">
    <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-px my-6 bg-gray-200 border-none">
        <span class="text-lg md:text-xl absolute px-6 -translate-x-1/2 bg-white left-1/2">Tech Stack</span>
    </div>
    <div class="grid grid-rows-1 grid-flow-col justify-center my-4">
        <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-center justify-items-center text-xs md:text-sm grid-flow-row">
            <StackElements>
                <span slot="icon"><Icon src={SiSvelte}/></span><span slot="text">Svelte</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiHtml5}/></span><span slot="text">HTML</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiCss3}/></span><span slot="text">CSS</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiTailwindcss}/></span><span slot="text">Tailwind</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiJavascript}/></span><span slot="text">JavaScript</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiTypescript}/></span><span slot="text">TypeScript</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={IoLogoElectron}/></span><span slot="text">Electron</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiCsharp}/></span><span slot="text">C Sharp</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiUnity}/></span><span slot="text">Unity</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiPython}/></span><span slot="text">Python</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiArduino}/></span><span slot="text">Arduino</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiRaspberrypi}/></span><span slot="text">RPI-4</span>
            </StackElements>
        </div>
    </div>
</div>