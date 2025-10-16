<script lang="ts">
    import type { PageProps } from './$types';
    import ProductCard from '../../components/ProductCard.svelte';
	import Title from '../../components/Title.svelte';
	import { text } from '@sveltejs/kit';

    let { data }: PageProps = $props();
    console.log(data)
</script>
<div class="p-2">
    <Title text="Összes termékünk" extra=''/>
    <div class="max-w-[1320px] w-full mx-auto pr-10 mb-4 flex justify-end">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
    </div>
    <div class="md:mt-5 flex  items-center justify-center flex-wrap gap-20 md:gap-10 3xl:max-w-[1920px] mx-auto">
      {#if data?.products}
        {#each data.products as product}
          <ProductCard
          img_url={product.cover_image_url}
          title={product.title}
          description={product.description_short}
          popular={product.is_popular}
          sale={product.is_sale}
          id={product.id}
          price={product.price_net_huf}
          sale_og_price={product.sale_original_price}
          />
        {/each}
      {/if}
    </div>
</div>