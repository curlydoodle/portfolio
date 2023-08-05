<script lang="ts">
	import Particles from "svelte-particles";
	import type { ISourceOptions, Engine } from "tsparticles-engine"
    import { loadSlim } from "tsparticles-slim";

	const particleConfig: ISourceOptions = {
		"autoPlay": true,
		"fullScreen": {
			"enable": true,
			"zIndex": 0,
		},
		"detectRetina": true,
		"duration": 0,
		"fpsLimit": 60,
		"interactivity": {
			"detectsOn": "window",
			"events": {
				"onHover": {
					"enable": true,
					"parallax": {
						"enable": true,
						"force": 40,
						"smooth": 20
					}
				},
				"resize": {
					"delay": 0,
					"enable": true
				}
			},
		},
		"particles": {
			color: {
				value: "#131313",
			},
			"move": {
				"center": {
					"x": 0,
					"y": 0,
					"mode": "percent",
					"radius": 0
				},
				"enable": true,
				"speed": 0.15,
				"straight": true,
				"warp": true
			},
			"number": {
				"density": {
					"enable": true,
					"width": 1920,
					"height": 1080
				},
				"limit": 0,
				"value": 50
			},
			"opacity": {
				"value": 1,
			},
			"reduceDuplicates": false,
			"shape": {
				"type": "circle"
			},
			"size": {
				"random": false,
				"value": 2,
			},
			"life": {
				"count": 0,
				"delay": {
					"value": 0,
					"sync": false
				},
				"duration": {
					"value": 0,
					"sync": false
				}
			},
			"destroy": {
				"split": {
					"count": 1,
					"factor": {
						"value": 3
					},
					"rate": {
						"value": {
							"min": 6,
							"max": 9
						}
					},
					"sizeOffset": true
				}
			}
		},
		"pauseOnBlur": true,
		"pauseOnOutsideViewport": true,
		"smooth": true,
		"zLayers": 1
	}

	let particlesInit = async (engine: Engine) => {
        await loadSlim(engine);
    };
</script>

<Particles
	options={particleConfig}
	{particlesInit}
	id="huge"
/>