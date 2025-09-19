import type { PageServerLoad } from './$types';
import { pb_fetch } from '$lib/pocketbase';
import PocketBase from 'pocketbase'; 

const fetch_all_products = async (pb: PocketBase) => {
    return await pb.collection('products').getFullList({
        sort: 'title',
    });
};

export const load = (async () => {
    const records = await pb_fetch(fetch_all_products);
    return { products: records };
}) satisfies PageServerLoad;