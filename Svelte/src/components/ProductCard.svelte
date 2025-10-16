<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import ProductCardSkeleton from './Skeletons/ProductCardSkeleton.svelte';

	function goToAbout() {
		goto(`/products/${id}`);
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

	// props typescript

	interface Props {
		popular?: boolean;
		sale?: boolean;
		title: string;
		description: string;
		id: string;
		img_url: string;
		price: number;
		sale_og_price: number;
	}

	let {
		popular = false,
		title,
		description,
		id,
		img_url,
		price,
		sale,
		sale_og_price
	}: Props = $props();
</script>

<button
	onclick={goToAbout}
	class={`card card-sm md:card-lg bg-base-200 md:min-h-130 min-h-1 w-72 shadow-sm hover:cursor-pointer sm:w-96 ${loaded ? '' : 'hidden'}`}
>
	<figure>
		<img src={img_url} alt="" bind:this={imageRef} onload={onLoad} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
			<div class={`badge badge-primary ${popular ? 'block' : 'hidden'} badge-sm sm:badge-md`}>
				NÉPSZERŰ
			</div>
			<div class={`badge bg-red-500 ${sale ? 'block' : 'hidden'} badge-sm sm:badge-md`}>AKCIÓ</div>
		</h2>
		<div class="flex">
			{#if sale}
				<h3 class={`mb-2 mr-4 text-left line-through`}>
					{sale_og_price.toLocaleString('hu-HU') + 'Ft.'}
				</h3>
			{/if}
			<h3 class={`mb-2 mr-4 text-left`}>
				{price.toLocaleString('hu-HU') + 'Ft.'}
				<span class="italic">{' + áfa'}</span>
			</h3>
		</div>
		<p class="text-left text-white/80">{description}</p>
		<div class="card-actions justify-start">
			<a href="/products/{id}" class="btn btn-accent hover:bg-primary uppercase"> megtekint </a>
		</div>
	</div>
</button>
{#if !loaded}
	<ProductCardSkeleton />
{/if}
