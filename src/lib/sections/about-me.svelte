<script>
	import Element from "$lib/components/element.svelte";

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiFillFlag from "svelte-icons-pack/ai/AiFillFlag";
    import FaSolidUserGraduate from "svelte-icons-pack/fa/FaSolidUserGraduate";
</script>

<div class="w-full px-8 py-6 place-content-center items-stretch text-left wrapper" id="about">
    <div class="container max-w-[50rem] m-auto">
        <h1 class="text-3xl italic text-header">About Me</h1>
        <div class="max-w-[50rem] text-sm text-text py-0.5">Hey there, I am a 16 year old computer nerd from Turkiye. I started programming with Unity 6 years ago. You might see me working on websites, games, textures, electronics & more.</div>
        <div class="flex flex-row flex-wrap pt-3 gap-3 max-w-[45rem]">
            <Element><span slot="icon"><Icon src={AiFillFlag} color="#dcc9ad" size="18"/></span><span slot="text">Turkiye</span></Element>
            <Element><span slot="icon"><Icon src={FaSolidUserGraduate} color="#dcc9ad" size="18"/></span><span slot="text">Student</span></Element>
        </div>
    </div>
</div>
