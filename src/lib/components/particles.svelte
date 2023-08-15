<script>
    import Particles from "svelte-particles";
    import { loadSlim } from "tsparticles-slim";

    let particlesConfig = {
        particles: {
            color: {
                value: "#1d1b17",
            },
            links: {
                enable: true,
                color: "#1d1b17",
            },
            move: {
                enable: true,
                speed: 0.5,
            },
            number: {
                value: 40,
            },
        },
    };

    let onParticlesLoaded = event => {
        const particlesContainer = event.detail.particles;
    };

    let particlesInit = async engine => {
        await loadSlim(engine);
    }
</script>

<Particles
    id="tsparticles"
    class="foo bar"
    style=""
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>