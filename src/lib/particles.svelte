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
		"fpsLimit": 120,
		"interactivity": {
			"detectsOn": "window",
			"events": {
				"onHover": {
					"enable": true,
					"parallax": {
						"enable": true,
						"force": 15,
						"smooth": 50
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
				value: "#000",
			},
			"move": {
				"center": {
					"x": 20,
					"y": 20,
					"mode": "percent",
					"radius": 0
				},
				"enable": true,
				"speed": 0.5,
				"straight": false,
				"warp": false
			},
			"number": {
				"density": {
					"enable": true,
					"width": 1920,
					"height": 1080
				},
				"limit": 0,
				"value": 100
			},
			"opacity": {
				"value": 0.3,
			},
			"reduceDuplicates": false,
			"shape": {
				"type": "circle"
			},
			"size": {
				"random": false,
				"value": 1,
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
			"line_linked": {
                "enable": true,
                "distance": 100,
                "color": '#000',
                "opacity": 0.05,
				"frequency": 1,
                "width": 1,
            },
			"destroy": {
				"split": {
					"count": 1,
					"factor": {
						"value": 3
					},
					"rate": {
						"value": {
							"min": 4,
							"max": 9
						}
					},
					"sizeOffset": true
				}
			}
		},
		"pauseOnBlur": true,
		"pauseOnOutsideViewport": true,
		"smooth": false,
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