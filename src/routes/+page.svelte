<script lang="ts">
    import Landing from "$lib/landing.svelte";
    import Particles from "$lib/particles.svelte";
	import AboutMe from "$lib/about-me.svelte";
    import Techstack from "$lib/tech-stack.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<div>
    <div class="flex flex-col justify-center h-screen">
        <Landing/>
        <Particles/>
    </div>
    <div class="relative z-50 bg-background shadow-inner">
        <AboutMe/>
        <Techstack/>
        <Footer/>
    </div>
</div>
