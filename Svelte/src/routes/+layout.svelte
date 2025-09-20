<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
  import Logo from '../components/Logo.svelte';
  import Footer from '../components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="drawer min-h-screen bg-base-100">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="navbar bg-primary w-full border-b-3 border-solid border-[#ecf9ff]">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost hover:!bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <!-- <div class="mx-2 flex-1 px-2">Navbar Title</div> -->
      <div class="mx-2 flex-1 px-2">
        <Logo />
	    </div>
      <div class="hidden flex-none lg:block">
        <ul class="menu menu-horizontal text-primary-content text-lg">
          <!-- Navbar menu content here -->
      	<li><a href="/" class={`${page.url.pathname === '/' ? 'underline underline-offset-5 decoration-2' : ''} active:!bg-transparent focus:!bg-transparent active:!text-black hover:!bg-transparent`}>Kezdőlap</a></li>
      	<li><a href="/products"class={`${page.url.pathname === '/products' ? 'underline underline-offset-5 decoration-2' : ''} active:!bg-transparent focus:!bg-transparent active:!text-black hover:!bg-transparent`}>Termékek</a></li>
      	<li><a href="/prices"class={`${page.url.pathname === '/prices' ? 'underline underline-offset-5 decoration-2' : ''} active:!bg-transparent focus:!bg-transparent active:!text-black hover:!bg-transparent`}>Arak</a></li>
        <li><a href="/blog"class={`${page.url.pathname === '/blog' ? 'underline underline-offset-5 decoration-2' : ''} active:!bg-transparent focus:!bg-transparent active:!text-black hover:!bg-transparent`}>Blog</a></li>
      	<li><a href="/contact"class={`${page.url.pathname === '/contact' ? 'underline underline-offset-5 decoration-2' : ''} active:!bg-transparent focus:!bg-transparent active:!text-black hover:!bg-transparent`}>Kapcsolat</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
	 <div>
		{@render children?.()}
	 </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 px-4 py-8 text-2xl">
      <!-- Sidebar content here -->
      	<li><a href="/" class={`${page.url.pathname === '/' ? 'text-primary' : ''} active:!bg-transparent`}>Kezdőlap</a></li>
      	<li><a href="/products"class={`${page.url.pathname === '/products' ? 'text-primary' : ''} active:!bg-transparent`}>Termékek</a></li>
      	<li><a href="/prices"class={`${page.url.pathname === '/prices' ? 'text-primary' : ''} active:!bg-transparent`}>Arak</a></li>
        <li><a href="/blog"class={`${page.url.pathname === '/blog' ? 'text-primary' : ''} active:!bg-transparent`}>Blog</a></li>
      	<li><a href="/contact"class={`${page.url.pathname === '/contact' ? 'text-primary' : ''} active:!bg-transparent`}>Kapcsolat</a></li>
    </ul>
  </div>
</div>
<Footer />