 <script lang="ts">
  interface Props {
    description: string;
  }
  
  let { description }: Props = $props();

 </script>
	<div class="flex flex-col justify-center px-8 py-5 lg:py-8 bg-base-200 mx-auto rounded-t-xl rounded-b-sm">
		<h1 class="text-2xl">Leiras</h1>
		<p class="py-2 text-justify text-white/70">{description}</p>
	</div>