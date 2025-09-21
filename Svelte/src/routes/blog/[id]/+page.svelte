<script lang="ts">
	import type { PageProps } from './$types';
	import DOMPurify from 'dompurify';
	let { data }: PageProps = $props();
	let safeHtml: string = $state('');

	interface htmlData {
		html: string;
	}
	$effect(() => {
		if (typeof data.html === 'string') {
			safeHtml = DOMPurify.sanitize(data.html);
			console.log(data.html);
		}
	});
</script>

<div class="max-w-220 mx-auto py-8">
	{#if data}
	<div class="flex flex-col">
		<div class="breadcrumbs text-sm mb-8">
			<ul>
				<li class="underline"><a href="/blog">Blog</a></li>
				<li class="underline">{data.short_title}</li>
			</ul>
		</div>
		<div class="flex items-center gap-3 mb-4">
			<div class="bg-[#d9ddfd] text-[#2f48d2] text-[14px] rounded-2xl px-[12px] py-[4px] bold">
			Raktarozas
			</div>
			<p>•</p>
			<p>2025. szeptember 7.</p>
		</div>
		<h1 class="text-5xl caveat-brush-regular mb-4">{data.title}</h1>
		<div class="flex items-center mb-8"> <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="Nagy Janos" class="w-12 h-12 rounded-full mr-4 object-cover"> <div> <p class="font-semibold text-gray-900 dark:text-white">Nagy Janos</p> <p class="text-gray-600 dark:text-gray-400">Ügyvezető</p> </div> </div>
		<img src={data.artwork} alt="" class="w-full h-auto max-h-[480px] rounded-xl mb-10 object-cover"/>
		<div class="markdown">
			{@html safeHtml}
		</div>
	</div>
	{:else}
		<div class="mt-10 flex gap-10 pl-8"></div>
	{/if}
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
</style>