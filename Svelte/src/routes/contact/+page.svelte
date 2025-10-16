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
		<ul class="px-4 py-6 flex flex-col gap-3 text-lg md:text-xl">
			<li>
				☎️ <span class="font-semibold text-primary">Telefon:</span>
				<a href="tel:+36202345678" class="ml-2 font-medium hover:underline"> +36 20 234 5678 </a>
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
