import type { PageServerLoad } from './$types';
import { pb_fetch } from '$lib/pocketbase';
import PocketBase from 'pocketbase'; 

const fetch_product_detail = async (pb: PocketBase, id:string) => {
   return await pb.collection('products').getFirstListItem(`id="${id}"`); 
};

export const load = (async ({params}) => {
    const { id } = params;
    //const records = await pb_fetch(fetch_product_detail(id));
    const record = await pb_fetch((pb) => fetch_product_detail(pb, id)); 
    return { details: record };
}) satisfies PageServerLoad;