<script>
	import Button from "./button.svelte";

    function handleClick() {
		const el = document.querySelector('#about');
		if (!el) return;
		el.scrollIntoView(true);
	}
</script>

<div class="flex flex-col h-full justify-center text-center items-center z-10 gap-0.5 backdrop-blur-sm">
    <div class="text-2xl text-header">Mustafa Akın</div>
    <p class="text-xs">Front-End & Game Developer</p>
    <div class="inline-flex gap-2">
        <Button on:click={handleClick} on:keypress={handleClick}><span slot="text">About Me</span></Button>
        <form action="https://discord.com/users/501804360079245312" target="_blank" method="get">
            <Button><span slot="text">Contact</span></Button>
        </form>
    </div>
</div>