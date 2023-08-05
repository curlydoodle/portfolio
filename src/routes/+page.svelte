<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import Landing from "$lib/landing.svelte";
    import AboutMe from "$lib/about-me.svelte";
	import TechStack from "$lib/tech-stack.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<div class="flex flex-col h-screen text-text">
    <Navbar/>
    <div class="absolute top-0 right-0 bg-red-800 opacity-20 w-64 h-64 md:w-96 md:h-96 filter blur-3xl rounded-full"></div>
    <div class="absolute bottom-0 left-0 bg-yellow-800 opacity-20 w-64 h-64 md:w-96 md:h-96 filter blur-3xl rounded-full"></div>
    <Landing/>
</div>

<div class="bg-background relative z-10 text-text">
    <AboutMe/>
    <TechStack/>
    <Footer/>
</div>
