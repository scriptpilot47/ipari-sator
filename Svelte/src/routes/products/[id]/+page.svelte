<script lang="ts">
	import type { PageProps } from './$types';
	import ImageViewer from '../../../components/ImageViewer.svelte';
	import SpecsTable from '../../../components/SpecsTable.svelte';
	import Description from '../../../components/Description.svelte';
	import ContactUs from '../../../components/ContactUs.svelte';

	let { data }: PageProps = $props();

	let isDeliveryChecked = $state(false);
	let isDeliveryDifferent = $state(false)
	let deliveryFormColor = $derived(isDeliveryChecked ? '' : 'text-gray-500/30')
	let showAddressCopyCheckbox = $derived(isDeliveryChecked ? '' : 'hidden')
	let showAddressInputs = $derived(isDeliveryDifferent && isDeliveryChecked ? '' : 'hidden')

	 function handleDeliveryChange() {
    	isDeliveryChecked = isDeliveryChecked ? false : true;
    }
	 function handleAddressChange() {
    	isDeliveryDifferent = isDeliveryDifferent ? false : true;
    }
</script>

{#if data}
	<div class="lg: max-w-220 lg:w-220 mx-auto">
		<div class="mx-8 mt-10 flex flex-col justify-center gap-7 md:gap-10 lg:mx-0 lg:flex-row">
			<ImageViewer images_list={data.details.product_images} title={data.details.title} />
			<div class="flex flex-col pb-5 lg:mt-11">
				<h1 class="text-primary text-4xl">{data.details.title}</h1>
				<h1 class="text-2xl">
					{data.details.price_net_huf.toLocaleString('hu-HU')}
					<span class="font-normal italic">{' Ft. + afa'}</span>
				</h1>
				<!-- <h1>{data.details.is_stock}</h1> -->
				<div class="mt-10 lg:mt-auto">
					<SpecsTable
						material={data.details.specs.material}
						dimensions={`${data.details.specs.width_m} x ${data.details.specs.depth_m} x ${data.details.specs.height_m}`}
						color={data.details.specs.color}
						area={`${data.details.specs.depth_m * data.details.specs.width_m} m2`}
					/>
				</div>
				<a href='#order-form' class="btn btn-primary mt-7 w-fit uppercase lg:mt-auto">megrendelem</a>
			</div>
		</div>

		<div class="my-5 lg:my-10">
			<Description description={data.details.description_long} />
		</div>
		<div class="-mt-5 mb-15">
			<ContactUs />
		</div>
		<div class="bg-base-200 mx-auto my-5 rounded-sm px-8 py-5 lg:my-10 lg:py-8"id="order-form">
			<h1 class="text-2xl text-center mb-5">Megrendeles leadasa</h1>
			<form action="
			" class="flex gap-4 flex-col lg:flex-row"> 
			<div class="py-8 flex flex-col gap-3 lg:mx-0 w-full"> 
				<h1 class="text-white/65 text-lg">Ceges adatok</h1> 
				<label class="floating-label"> 
					<span>Cegnev</span> 
					<input type="text" placeholder="Cegnev" class="input input-md w-full" /> 
				</label> <label class="floating-label"> 
					<span>Adoszam</span> 
					<input type="text" placeholder="Adoszam" class="input input-md w-full" /> 
				</label> <div class="flex gap-3 w-full"> 
					<label class="floating-label w-full"> 
						<span>Iranyitoszam</span> 
						<input type="text" placeholder="Iranyitoszam" class="input input-md w-full" /> </label> 
						<label class="floating-label w-full"> 
							<span>Telepules</span> 
							<input type="text" placeholder="Telepules" class="input input-md w-full" /> 
						</label> 
					</div> 
					<label class="floating-label"> 
						<span>Cim</span> 
						<input type="text" placeholder="Cim" class="input input-md w-full" /> 
					</label>
				<span class="h-1"></span>
				<h1 class="text-white/65 text-lg">Kapcsolat</h1>
				<label class="floating-label">
					<span>Teljes nev</span>
					<input type="text" placeholder="Teljes nev" class="input input-md w-full" />
				</label>
				<label class="floating-label">
					<span>Email</span>
					<input type="text" placeholder="Email" class="input input-md w-full" />
				</label>
				<label class="floating-label">
					<span>Telefonszam</span>
					<input type="text" placeholder="Telefonszam" class="input input-md w-full" />
				</label>
			</div>
			<!-- ############################################################## -->
			<div class="py-8 flex flex-col gap-3 lg:mx-0 w-full">
				<h1 class="text-white/65 text-lg">Szallitasi adatok</h1> 
				<div class="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-transparent rounded-box lg:p-4 lg:pl-0 w-full h-15 lg:h-10 rounded-sm">
  					<label class="label m-0 ">
    					<input type="checkbox" class="checkbox checkbox-primary" onchange={handleDeliveryChange} />
						Kiszallitast kerek
						</label>
  					<label class="label m-0 ">
    					<input type="checkbox" class="checkbox checkbox-primary" disabled={!isDeliveryChecked}/>
						<span class={`${deliveryFormColor}`}>Osszeszerelest kerek</span>
						</label>
				</div>
				<div class="flex items-start lg:items-center justify-start bg-transparent rounded-box lg:p-4 lg:pl-0 w-full h-10 rounded-sm">
  					<label class={`label m-0 ${showAddressCopyCheckbox}`}>
    					<input type="checkbox" checked="checked" class="checkbox checkbox-primary" disabled={!isDeliveryChecked} onchange={handleAddressChange} />
						<span class={`${deliveryFormColor}`}>A szallitasi es szamlazasi cim egyezik</span>
						</label>
				</div>
				<div class="flex gap-3 w-full"> 
					<label class={`floating-label w-full ${showAddressInputs}`}> 
						<span>Iranyitoszam</span> 
						<input type="text" placeholder="Iranyitoszam" class="input input-md w-full" /> </label> 
					<label class={`floating-label w-full ${showAddressInputs}`}> 
							<span>Telepules</span> 
							<input type="text" placeholder="Telepules" class="input input-md w-full" /> 
						</label> 
					</div> 
					<label class={`floating-label w-full ${showAddressInputs}`}> 
						<span>Cim</span> 
						<input type="text" placeholder="Cim" class="input input-md w-full" /> 
					</label>
			</div>
			</form>
				<div class="flex items-start lg:items-center justify-start bg-transparent rounded-box p-4 pl-0 w-full h-10 rounded-sm">
  					<label class={`label m-0`}>
    					<input type="checkbox" class="checkbox checkbox-primary" onchange={handleAddressChange} />
						<span>Elolvastam es elfogadom a szerzodesi felteteleket</span>
						</label>
				</div>
				<div class="flex items-start lg:items-center justify-start bg-transparent rounded-box p-4 pl-0 w-full h-10 rounded-sm mb-5">
  					<label class={`label m-0`}>
    					<input type="checkbox" class="checkbox checkbox-primary" onchange={handleAddressChange} />
						<span>Feliratkozok a hirlevelre</span>
						</label>
				</div>
			<p class={`pb-6 text-red-400 ${showAddressCopyCheckbox}`}>Szallitasi es osszeszerelesi arainkrol <a href="/prices" class="underline">itt</a> tajekozodhat.</p>
				<button class="btn btn-primary uppercase w-fit">megrendelem</button>
		</div>
	</div>
{:else}
	<div class="mt-10 flex gap-10 pl-8"></div>
{/if}