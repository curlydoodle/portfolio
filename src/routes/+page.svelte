<script lang="ts">
    import Navbar from "$lib/sections/navbar.svelte";
    import Landing from "$lib/sections/landing.svelte";
    import Footer from "$lib/sections/footer.svelte";
	import Projects from "$lib/sections/projects.svelte";
	import AboutMe from "$lib/sections/about-me.svelte";
	import TechStack from "$lib/sections/tech-stack.svelte";
	import Particles from "$lib/components/particles.svelte";
</script>

<div class="flex flex-col h-screen text-text">
    <Navbar/>
    <Landing/>
</div>

<div class="z-10 bg-background">
    <AboutMe/>
    <Projects/>
    <TechStack/>
    <Footer/>
</div>

<div class="absolute -z-10">
    <Particles/>
</div>
