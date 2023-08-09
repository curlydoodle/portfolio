<script>
    import Particles from "svelte-particles";
    import { loadSlim } from "tsparticles-slim";

    let particlesConfig = {
        particles: {
            color: {
                value: "#181613",
            },
            links: {
                enable: true,
                color: "#181613",
            },
            move: {
                enable: true,
                speed: 0.5,
            },
            number: {
                value: 50,
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