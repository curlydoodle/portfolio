<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiFillFlag from "svelte-icons-pack/ai/AiFillFlag";
    import AiFillClockCircle from "svelte-icons-pack/ai/AiFillClockCircle";
	import Element from './element.svelte';
</script>

<section>
    <div class="flex flex-col h-full justify-center items-center text-left py-8 px-8 wrapper" id="about">
        <div class="w-full max-w-2xl md:min-w-0 md:w-3/4">
            <h1 class="text-2xl inline-flex items-center text-header">About Me</h1>
            <p class="text-xs py-2 leading-5">Hey there, I am a 16 year old high school student and computer nerd from Turkiye. I started programming 6 years ago. I like travelling & learning new things.</p>
            <div class="flex flex-row flex-wrap gap-2 pt-1.5 place-content-start">
                <Element><span slot="icon"><Icon src={AiFillFlag} size="16" color="#f5f5f6"/></span><span slot="text" class="text-xs">Turkiye</span></Element>
                <Element><span slot="icon"><Icon src={AiFillClockCircle} size="16" color="#f5f5f6"/></span><span slot="text" class="text-xs">UTC+3</span></Element>
            </div>
        </div>
    </div>
</section>