<script lang="ts">
	import { onMount } from 'svelte';
	import ProductDetailSkeleton from './Skeletons/ProductDetailSkeleton.svelte';

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

	// props typescript
	interface Props {
		images_list: string[];
		title: string;
	}
	let { images_list, title }: Props = $props();

	// wrap helpers for image pagination
	const prevIdx = (i: number) => (i - 1 + images_list.length) % images_list.length;
	const nextIdx = (i: number) => (i + 1) % images_list.length;

	function goToSlide(idx: number) {
		const id = `slide${idx + 1}`;
		const el = document.getElementById(id);
		const container = el?.closest<HTMLElement>('.carousel');
		if (el && container) {
			container.scrollTo({ left: el.offsetLeft, behavior: 'smooth' });
			// optional: update URL without scrolling the page
			history.replaceState(null, '', `#${id}`);
		}
	}
</script>

	<div class="max-w-150 mx-auto lg:mx-0">
		<div class="breadcrumbs text-sm">
			<ul>
				<li class="underline"><a href="/products">Termékek</a></li>
				<li class="underline">{title}</li>
			</ul>
		</div>
		<div class={`carousel w-full ${loaded ? '' : ''}`}>
		{#if !loaded}
				<div class="carousel-item relative w-full">
				<ProductDetailSkeleton />
				</div>
		{/if}
			{#each images_list as image, i}
				<div id={`slide${i + 1}`} class="carousel-item relative w-full">
					{#if i === 0}
						<img
							src={image}
							class="w-full rounded-sm"
							alt={`Slide ${i + 1}`}
							bind:this={imageRef}
							onload={onLoad}
						/>
					{:else}
						<img src={image} class="w-full rounded-sm" alt={`Slide ${i + 1}`} />
					{/if}
					<div
						class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
					>
						<a
							href={`#slide${prevIdx(i) + 1}`}
							class="btn btn-circle btn-accent"
							onclick={(e) => {
								e.preventDefault();
								goToSlide(prevIdx(i));
							}}>❮</a
						>
						<a
							href={`#slide${nextIdx(i) + 1}`}
							class="btn btn-circle btn-accent"
							onclick={(e) => {
								e.preventDefault();
								goToSlide(nextIdx(i));
							}}>❯</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
