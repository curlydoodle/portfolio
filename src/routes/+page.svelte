<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import Landing from "$lib/landing.svelte";
    import AboutMe from "$lib/about-me.svelte";
	import TechStack from "$lib/tech-stack.svelte";
    import Footer from "$lib/footer.svelte";
	import Background from "$lib/background.svelte";
</script>

<div class="flex flex-col h-screen text-text">
    <Navbar/>
    <Background/>
    <Landing/>
</div>

<div class="bg-background text-text relative z-10">
    <AboutMe/>
    <TechStack/>
    <Footer/>
</div>
