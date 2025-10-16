<script lang="ts">
  import ProductCard from "./ProductCard.svelte";
  import Title from "./Title.svelte";
  import type { PageData } from "../routes/$types";
  let { data }: { data: PageData } = $props();
</script>
<div class="p-8">
  <Title text="Kiemelt termekeink" extra='mb-3 2xl:text-left'/>
  <div class="flex flex-col md:flex-row items-center justify-center 2xl:justify-start gap-20 lg:gap-10 sm:gap-5">
      {#if data?.products}
        {#each data.products as product}
          <ProductCard
          img_url={product.cover_image_url}
          title={product.title}
          description={product.description_short}
          popular={product.is_popular}
          id={product.id}
          price={product.price_net_huf}
          sale={product.is_sale}
          sale_og_price={product.sale_original_price}
          />
        {/each}
      {/if}
  </div>
  <div class="px-2 py-8">
  <a href="/products" class="underline">Osszes termek</a>
  </div>
</div>