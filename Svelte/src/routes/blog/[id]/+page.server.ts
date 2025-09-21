import type { PageServerLoad } from './$types';
import { pb_fetch } from '$lib/pocketbase';
import PocketBase from 'pocketbase'; 
import { marked } from 'marked';
import  DOMPurify  from 'dompurify';


const fetch_product_detail = async (pb: PocketBase, id:string) => {
   return await pb.collection('blog').getFirstListItem(`id="${id}"`); 
};

export const load = (async ({params}) => {
    const { id } = params;
    //const records = await pb_fetch(fetch_product_detail(id));
    const record = await pb_fetch((pb) => fetch_product_detail(pb, id)); 
    const markdown = record.markdown;
    const html = marked(markdown);

    return { html, title:record.description, short_title: record.title, artwork: record.cover_image_url };
}) satisfies PageServerLoad;