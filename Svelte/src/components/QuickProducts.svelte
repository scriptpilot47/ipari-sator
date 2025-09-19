<script lang="ts">
  import ProductCard from "./ProductCard.svelte";
  import type { PageData } from "../routes/$types";
  let { data }: { data: PageData } = $props();
</script>
<div class="p-8">
  <h1 class="text-center 2xl:text-left text-bold text-2xl md:text-4xl font-bold text-base-content py-4">Kiemelt termekeink</h1>
  <div class="flex flex-col md:flex-row items-center justify-center 2xl:justify-start gap-10 sm:gap-5">
      {#if data?.products}
        {#each data.products as product}
          <ProductCard
          title={product.title}
          description={product.description}
          popular={product.is_popular}
          />
        {/each}
      {/if}
  </div>
</div>