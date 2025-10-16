<script lang="ts">
    import type { PageProps } from './$types';
    import ProductCard from '../../components/ProductCard.svelte';
	import Title from '../../components/Title.svelte';
	import { text } from '@sveltejs/kit';

    let { data }: PageProps = $props();
    console.log(data)
</script>
<div class="p-8">
    <Title text="Összes termékünk" extra=''/>
    <div class="md:mt-5 flex flex-col md:flex-row items-center justify-center md:flex-wrap gap-20 md:gap-10 3xl:max-w-[1920px] mx-auto">
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