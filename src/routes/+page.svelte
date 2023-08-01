<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import Landing from "$lib/landing.svelte";
    import Particles from "$lib/particles.svelte";
    import AboutMe from "$lib/about-me.svelte";
	import TechStack from "$lib/tech-stack.svelte";
    import Footer from "$lib/footer.svelte";
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
