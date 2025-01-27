import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { GeneroCreateModel, GeneroModel, GeneroUpdateModel } from "@/types/GeneroModel";

export const GeneroService = {
    get: async ():Promise<ApiResponse<GeneroModel[]>> => {
        const res = await apiClient.get('genero/');
        return res.data;
    },

    save: async (model:GeneroCreateModel): Promise<ApiResponse<GeneroModel>> => {
        const res = await apiClient.post('genero/',model);
        return res.data;
    },
    update: async (id:number, model:GeneroUpdateModel): Promise<ApiResponse<GeneroModel>> => {
        const res = await apiClient.put('genero/'+id, model);
        return res.data;
    },
    delete : async (id:number):Promise<ApiResponse<GeneroModel>>  => {
        const response =  await apiClient.delete('genero/'+id)
        return response.data;
    }
}


