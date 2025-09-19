import PocketBase from 'pocketbase';
import { PB_BEARER, PB_URL } from '$env/static/private';

// Just define the function type directly
//type PbFetch = (query: (pb: PocketBase) => Promise<any> | any) => Promise<any>;
interface PbFetch {
  (query: (pb: PocketBase, arg?: string) => Promise<any> | any, arg?: string): Promise<any>;
}

export const pb_fetch: PbFetch = async (query, arg?:string) => {
    const pb = new PocketBase(PB_URL);
    pb.authStore.save(PB_BEARER as string, undefined as any);
    console.log(pb.authStore.isSuperuser);

    try {
        return await query(pb, arg);  // pass pb to your callback
    } catch (err) {
    console.error('PocketBase fetch failed:', err);
    throw err;
    } finally {
        pb.authStore.clear();
    }
};