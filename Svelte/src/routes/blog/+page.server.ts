import type { PageServerLoad } from './$types';
import { pb_fetch } from '$lib/pocketbase';
import PocketBase from 'pocketbase'; 

const fetch_product_detail = async (pb: PocketBase) => {
   return await pb.collection('blog').getFullList();
};

export const load = (async () => {
    //const records = await pb_fetch(fetch_product_detail(id));
    const records = await pb_fetch((pb) => fetch_product_detail(pb)); 
    return { blog:records };
}) satisfies PageServerLoad;