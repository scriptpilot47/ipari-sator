<script lang="ts">
	import { onMount } from 'svelte';
    import OurTentSkeleton from './Skeletons/OurTentSkeleton.svelte';
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

<div class="py-12 border-y-1">

<!-- image + map -->
<div class="flex flex-col md:flex-row max-w-250 mx-auto ">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.034481316319!2d19.291987176345668!3d47.64489677119335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741cdd69a6cb09d%3A0x2917a2a8da283441!2sVeresegyh%C3%A1z%2C%20Haj%C3%B3%20utca%208%2C%202112%20Magyarorsz%C3%A1g!5e0!3m2!1shu!2sch!4v1760520983256!5m2!1shu!2sch"
		style="border:0;"
		class="w-full h-48 md:h-96 sm:rounded-sm brightness-[0.8] contrast-[1.2] md:flex-2"
		allowfullscreen
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>

	<div class="md:flex-3 flex justify-center relative">
		<img src="/public/our_tent.jpg" class={`w-full h-48 md:h-96 object-cover ${loaded ? '' : 'hidden'}`} alt="" bind:this={imageRef} onload={onLoad}/>
        {#if !loaded}
            <OurTentSkeleton/>
        {/if}
        <!-- text -->
		<h1 class="absolute bottom-4 left-4 text-lg sm:text-2xl text-white/70 drop-shadow-lg">
			<span class="text-primary">Cim:</span> 2112 Veresegyhaz hajo utca 8.
		</h1>
	</div>
</div>

<div class="max-w-250 mx-auto pt-8 px-3 flex flex-col md:flex-row md:items-center gap-5">
    <p class="text-xl md:text-2xl text-white/70">
    Latogasson el telephelyunkre, ahol szemelyesen is megtekintheti termekunket. Elozetes idopont egyeztetes szukseges!
    </p>
    <button class="btn btn-primary md:my-4">Hivj most <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg></button>
</div>
</div>