 <script lang="ts">
	interface Props {
		extra?: string
	}
	let { extra }: Props = $props();
 </script>
	<div class={`flex flex-row md:flex-col justify-between items-center md:items-start px-8 py-5 lg:py-8 bg-base-200 mx-auto rounded-sm ${extra}`}>
		<h1 class="text-xl font-bold tracking-wider">Kérdése maradt? Ne várjon tovább!</h1>
        <a href="tel:+36204513320" class="btn btn-primary md:my-4">Hívj most <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg></a>
	</div>