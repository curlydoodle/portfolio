<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiFillFlag from "svelte-icons-pack/ai/AiFillFlag";
	import Element from './element.svelte';
</script>

<section>
    <div class="flex flex-col h-full justify-center items-center text-left px-8 py-10 mt-4 wrapper" id="about">
        <div class="w-full max-w-[50rem] md:min-w-0 md:w-3/4">
            <h1 class="text-2xl inline-flex items-center text-header">About Me</h1>
            <p class="text-xs py-2 leading-5 max-w-[40rem]">Hey there, I am a 16 year old computer nerd from Turkiye. I started programming 6 years ago. I like travelling & learning new things.</p>
            <div class="flex flex-row flex-wrap gap-2.5 pt-3 place-content-start max-w-[40rem]">
                <Element><span slot="icon"><Icon src={AiFillFlag} size="18" color="#f5f5f6"/></span><span slot="text">Turkiye</span></Element>
            </div>
        </div>
    </div>
</section>