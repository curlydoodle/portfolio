<script>
	import Button from "../components/button.svelte";

    function scrollToAbout() {
		const el = document.querySelector('#about');
		if (!el) return;
		el.scrollIntoView(true);
	}

    function scrollToProjects() {
		const el = document.querySelector('#projects');
		if (!el) return;
		el.scrollIntoView(true);
	}
</script>

<header class="flex flex-col h-full px-8 py-6 z-10 justify-center items-center text-left">
    <div class="container max-w-[60rem]">
        <h1 class="text-4xl inline-flex items-center text-header italic">Mustafa Akın</h1>
        <div class="text-sm">Brain is full of commits & pushes.</div>
        <div class="flex flex-row flex-wrap pt-3 place-content-start gap-2">
            <Button on:click={scrollToAbout} on:keypress={scrollToAbout}><span slot="text" class="px-5 py-1.5">About Me</span></Button>
            <Button on:click={scrollToProjects} on:keypress={scrollToProjects}><span slot="text" class="px-5 py-1.5">Projects</span></Button>
        </div>
    </div>
</header>