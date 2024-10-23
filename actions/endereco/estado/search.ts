import type {BaseResponse} from "~/actions";

export async function search(form: searchForm) {
    const response = await usePost('/api/estado/search', {
        body: form
    });
    return response.data.value as BaseResponse<Array>;
}
