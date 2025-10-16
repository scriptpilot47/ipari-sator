<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import ArticleSkeleton from '../../../components/Skeletons/ArticleSkeleton.svelte';
	import { onMount } from 'svelte';
	let safeHtml: string = $state('');

	interface htmlData {
		html: string;
	}


	// skeleton logic
	let loaded = $state(false);
	let imageRef;

	function onLoad() {
		loaded = true;
	}

	onMount(() => {
		if (imageRef?.complete) {
			loaded = true;
		}
	});
</script>

<div class="max-w-220 mx-auto py-8 px-4 lg:px-0">
	<div class="flex flex-col">
		<div class="breadcrumbs text-sm mb-8">
			<ul>
				<li class="underline"><a href="/blog">Blog</a></li>
				<li class="underline">{data.short_title}</li>
			</ul>
		</div>
		<div class="flex items-center gap-3 mb-4">
			<div class="bg-[#d9ddfd] text-[#2f48d2] text-sm md:text-[14px] rounded-2xl px-[12px] py-[4px] bold">
			Raktarozas
			</div>
			<p>•</p>
			<p>2025. szeptember 7.</p>
		</div>
		<h1 class="text-3xl md:text-4xl lg:text-5xl caveat-brush-regular mb-4">{data.title}</h1>
		<div class="flex items-center mb-8"> <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="Nagy Janos" class="w-12 h-12 rounded-full mr-4 object-cover"> <div> <p class="font-semibold text-gray-900 dark:text-white">Nagy Janos</p> <p class="text-gray-600 dark:text-gray-400">Ügyvezető</p> </div> </div>
		<img src={data.artwork} bind:this={imageRef} onload={onLoad}
		 alt="" class={`w-full h-auto max-h-[480px] rounded-xl mb-10 object-cover ${loaded ? '' : 'hidden'}`}/>
		 {#if !loaded}
		<div class="w-full max-w-220 mx-auto">
		<ArticleSkeleton />
		</div>
		 {/if}
		<div class="markdown">
			{@html data.safeHtml}
		</div>
	</div>
</div>
<style>
	:global(.markdown h2) {
		font-size: 24px;
		font-weight: bold;
		margin-top: 48px;
		margin-bottom: 16px;
	}
	:global(.markdown p) {
		font-size: 18px;
		margin-bottom: 16px
	}

	/* 📱 Mobile-friendly adjustments */
	@media (max-width: 640px) {
		:global(.markdown h2) {
			font-size: 20px;
			margin-top: 32px;
			margin-bottom: 12px;
		}
		:global(.markdown p) {
			font-size: 16px;
			margin-bottom: 12px;
		}
	}
</style>