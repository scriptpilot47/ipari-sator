<script lang="ts">
	import '../app.css';
  import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
  import Logo from '../components/Logo.svelte';
  import Footer from '../components/Footer.svelte';
	import { page } from '$app/state';
	
  let { children } = $props();

  // mobile menu functions
  let width = $state(0)

  function updateSize() {
    width = window.innerWidth;
    const drawerCheckbox = document.getElementById('my-drawer-3');
    if (width > 1024 && drawerCheckbox && drawerCheckbox.checked === true) {
      drawerCheckbox.checked = false;
      document.body.style.backgroundColor = "var(--color-primary)"
    }
  }

  function closeMenu() {
   const drawerCheckbox = document.getElementById('my-drawer-3');
    if (drawerCheckbox) {
    drawerCheckbox.checked = false;
    }
  }
    onMount(() => {
    updateSize(); // initial size
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  });

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <meta name="theme-color" content="#fdcf2b">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="#fdcf2b">
</svelte:head>
<div class="drawer min-h-screen bg-base-100">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="navbar bg-primary w-full border-b-3 border-solid border-[#ecf9ff]">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost hover:!bg-transparent active:!bg-transparent">
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
      	<li><a href="/prices"class={`${page.url.pathname === '/prices' ? 'underline underline-offset-5 decoration-2' : ''} active:!bg-transparent focus:!bg-transparent active:!text-black hover:!bg-transparent`}>Árak</a></li>
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
    <ul class="menu bg-base-200 min-h-full w-80 px-4 py-8 text-2xl rounded-r-2xl">
      <!-- Sidebar content here -->
      	<li><a href="/" class={`${page.url.pathname === '/' ? 'text-primary' : ''} active:!bg-transparent`} onclick={closeMenu}>Kezdőlap</a></li>
      	<li><a href="/products"class={`${page.url.pathname === '/products' ? 'text-primary' : ''} active:!bg-transparent`} onclick={closeMenu}>Termékek</a></li>
      	<li><a href="/prices"class={`${page.url.pathname === '/prices' ? 'text-primary' : ''} active:!bg-transparent`} onclick={closeMenu}>Árak</a></li>
        <li><a href="/blog"class={`${page.url.pathname === '/blog' ? 'text-primary' : ''} active:!bg-transparent`} onclick={closeMenu}>Blog</a></li>
      	<li><a href="/contact"class={`${page.url.pathname === '/contact' ? 'text-primary' : ''} active:!bg-transparent`} onclick={closeMenu}>Kapcsolat</a></li>
    </ul>
  </div>
</div>
<Footer />