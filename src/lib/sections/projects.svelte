<script lang="ts">
	import { onMount } from 'svelte';
	import type { Repo } from '../../utilites/repo';

	let repos: Repo[];

	onMount(async () => {
		const response = await fetch('https://gh-pinned-repos.egoist.dev/?username=akinmustafa');
		repos = await response.json();
	});
</script>

<div class="w-full px-8 py-6 place-content-center items-stretch text-left wrapper" id="projects">
    <div class="container max-w-[50rem] m-auto">
        <h1 class="py-2 text-3xl italic text-header">Public Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            {#if repos}
            {#each repos as { link, repo, description, languageColor, language }}
            <div class="w-full p-4 items-stretch text-header bg-card rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-black">
                <a href={link} target="_blank" rel="noreferrer">
                    <div class="grid grid-rows-1">
                        <div>
                            <div>{repo}</div>
                            <div class="py-1 text-text text-sm">{description}</div>
                        </div>
                        <div class="flex flex-row items-center">
                            <div class="flex gap-1">
                                <span class="w-2 h-2 inline-block place-self-center rounded-full" style="background-color: {languageColor}" />
                                <div class="text-sm">{language}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/each}
        {/if}
        </div>
    </div>
</div>