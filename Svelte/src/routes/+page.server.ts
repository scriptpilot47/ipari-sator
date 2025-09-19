import type { PageServerLoad } from './$types';
import { pb_fetch } from '$lib/pocketbase';
import PocketBase from 'pocketbase'; 

const fetch_homepage_products = async (pb: PocketBase) => {
    return await pb.collection('products').getList(1, 50, {
        filter: 'is_homepage = true',
    });
};

export const load = (async () => {
    const records = await pb_fetch(fetch_homepage_products);
    return { products: records.items };
}) satisfies PageServerLoad;