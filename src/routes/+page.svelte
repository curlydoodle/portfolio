<script lang="ts">
    import Landing from "$lib/landing.svelte";
    import Particles from "$lib/particles.svelte";
	import AboutMe from "$lib/about-me.svelte";
    import Techstack from "$lib/tech-stack.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<div>
    <div class="flex flex-col h-screen justify-center">
        <Landing/>
        <Particles/>
    </div>
    <div class="relative z-50 bg-white shadow-inner">
        <AboutMe/>
        <Techstack/>
        <Footer/>
    </div>
</div>
