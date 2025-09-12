<script>
  import ProductCard from "./ProductCard.svelte";
</script>
<div class="p-8">
  <h1 class="text-center 2xl:text-left text-bold text-2xl md:text-4xl font-bold text-base-content py-4">Kiemelt termekeink</h1>
  <div class="flex flex-col md:flex-row items-center justify-center 2xl:justify-start gap-5">
    <ProductCard popular={true} title={'Sator #1'}/>
    <ProductCard title={'Sator #2'}/>
  </div>
</div>