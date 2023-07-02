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

<div class="justify-center text-center">
    <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-px my-6 bg-gray border-none">
        <div class="text-lg absolute px-6 -translate-x-1/2 bg-white left-1/2">Tech Stack</div>
    </div>
    <div class="grid grid-rows-1 grid-flow-col justify-center my-4">
        <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-center justify-items-center text-xs md:text-sm grid-flow-row">
            <StackElements>
                <span slot="icon"><Icon src={SiSvelte} size="15"/></span><span slot="text">Svelte</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiHtml5} size="15"/></span><span slot="text">HTML</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiCss3} size="15"/></span><span slot="text">CSS</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiTailwindcss} size="15"/></span><span slot="text">Tailwind</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiJavascript} size="15"/></span><span slot="text">JavaScript</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiTypescript} size="15"/></span><span slot="text">TypeScript</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={IoLogoElectron} size="15"/></span><span slot="text">Electron</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiCsharp} size="15"/></span><span slot="text">C Sharp</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiUnity} size="15"/></span><span slot="text">Unity</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiPython} size="15"/></span><span slot="text">Python</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiArduino} size="15"/></span><span slot="text">Arduino</span>
            </StackElements>
            <StackElements>
                <span slot="icon"><Icon src={SiRaspberrypi} size="15"/></span><span slot="text">RPI-4</span>
            </StackElements>
        </div>
    </div>
</div>