<script>
	import Button from "./button.svelte";

    function handleClick() {
		const el = document.querySelector('#about');
		if (!el) return;
		el.scrollIntoView(true);
	}
</script>

<div class="flex flex-col h-full justify-center items-center text-left py-8 px-8 z-10 gap-0.5">
    <div class="w-full max-w-[50rem] md:min-w-0 md:w-3/4">
        <div class="text-2xl inline-flex items-center text-header">Mustafa Akın</div>
        <div class="text-xs py-1 leading-5">I'm a front-end & game developer.</div>
        <div class="flex flex-row flex-wrap gap-2 place-content-start">
            <Button on:click={handleClick} on:keypress={handleClick}><span slot="text">About Me</span></Button>
            <form action="https://discord.com/users/501804360079245312" target="_blank" method="get">
                <Button><span slot="text">Contact</span></Button>
            </form>
        </div>
    </div>
</div>