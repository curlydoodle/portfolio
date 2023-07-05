<script lang="ts">
    import AboutMe from "$lib/about-me.svelte";
	import Footer from "$lib/footer.svelte";
    import Landing from "$lib/landing.svelte";
	import Navbar from "$lib/navbar.svelte";
	import Particles from "$lib/particles.svelte";
	import TechStack from "$lib/tech-stack.svelte";
</script>

<div class="flex flex-col h-screen text-text">
    <Navbar/>
    <Landing/>
    <Particles/>
</div>

<div class="bg-background relative z-10 border-t border-theme text-text">
    <AboutMe/>
    <TechStack/>
    <Footer/>
</div>
