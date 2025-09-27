<script lang="ts">
    import { goto } from "$app/navigation";
	import { onMount } from 'svelte';
	import BlogItemSkeleton from "./Skeletons/BlogItemSkeleton.svelte";
	
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

    // nested links logic
    function goToPost() {
        goto(`/blog/${id}`);
    }

	// typescript
	interface Props {
		title: string;
		description: string;
		id: string;
		img_url: string;
	}

	let { title, description, id, img_url }: Props = $props();
</script>

<li class={`list-row min-h-30 items-center p-4 sm:py-8 cursor-pointer bg-black/50 rounded-2xl shadow-md ${loaded ? '' : 'hidden'}`} onclick={goToPost}>
		<div>
			<img class="rounded-box size-10" src={img_url} bind:this={imageRef} onload={onLoad}/>
		</div>
		<div>
			<div class="text-lg font-semibold uppercase">{title}</div>
			<div class="opacity-60">{description}</div>
		</div>
        <button class={`btn btn-accent btn-sm uppercase hover:btn-primary hidden lg:block`}>elolvasom</button>
</li>
{#if !loaded}
	<BlogItemSkeleton />
{/if}
