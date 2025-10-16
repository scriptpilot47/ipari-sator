<script lang="ts">
	import type { PageProps } from './$types';
	import Title from '../../components/Title.svelte';
	import Location from '../../components/Location.svelte';
	let { data }: PageProps = $props();
</script>

<div class="flex flex-col justify-start max-w-250 mx-auto gap-7 md:gap-0 pt-5 md:pt-10">
	<div class="order-2">
		<Location />
	</div>
	<div class="order-1">
		<ul class="px-4 py-6 flex flex-col gap-3 text-lg md:text-xl">
			<li>
				☎️ <span class="font-semibold text-primary">Telefon:</span>
				<a href="tel:+36204513320" class="ml-2 font-medium hover:underline"> +36 20 451 3320 </a>
			</li>
			<li>
				✉️ <span class="font-semibold text-primary">E-mail:</span>
				<a href="mailto:iparisator@gmail.com" class="ml-2 hover:text-yellow-400 transition">
					iparisator@gmail.com
				</a>
			</li>
			<li>
				📍 <span class="font-semibold text-primary">Cím:</span>
				<span class="ml-2">2112 Veresegyház, Hajó utca 8.</span>
			</li>
		</ul>
	</div>
</div>
