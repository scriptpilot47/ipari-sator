import type { PageServerLoad } from './$types';
import { pb_fetch } from '$lib/pocketbase';
import PocketBase from 'pocketbase'; 

const fetch_homepage_products = async (pb: PocketBase) => {
    return await pb.collection('products').getList(1, 50, {
        filter: 'is_homepage = true',
    });
};

const fetch_homepage_blog_posts = async (pb: PocketBase) => {
    return await pb.collection('blog').getList(1, 50, {
        filter: 'is_homepage = true',
    });
};

export const load = (async () => {
    const product_records = await pb_fetch(fetch_homepage_products);
    const blog_records = await pb_fetch(fetch_homepage_blog_posts);
    return { products: product_records.items, blog: blog_records.items };
}) satisfies PageServerLoad;