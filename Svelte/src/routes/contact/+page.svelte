<script lang="ts">
	import type { PageProps } from './$types';
	import Title from '../../components/Title.svelte';
	import Location from '../../components/Location.svelte';
	let { data }: PageProps = $props();
</script>

<div>
	<div class="max-w-250 mx-auto">
		<Location />
	</div>
	<div class="max-w-250 mx-auto">
		<ul class="px-4 py-4 flex flex-col gap-1">
			<li class="text-xl md:text-2xl text-primary">+36 20 234 5678</li>
			<li class="text-xl md:text-2xl">iparisator@gmail.com</li>
			<li class="text-xl md:text-2xl">2112 Veresegyhaz hajo utca 8.</li>
		</ul>
	</div>
</div>
