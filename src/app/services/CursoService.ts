import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { CursoCreateModel, CursoModel, CursoUpdateModel } from "@/types/CursoModel";

export const CursoService = {
    get: async ():Promise<ApiResponse<CursoModel[]>> => {
        const res = await apiClient.get('curso/');

        return res.data;
    },

    save: async (model:CursoCreateModel): Promise<ApiResponse<CursoModel>> => {
        const res = await apiClient.post('curso/',model);
        return res.data;
    },
    update: async (id:number, model:CursoCreateModel): Promise<ApiResponse<CursoModel>> => {
        const res = await apiClient.patch('curso/'+id, model);
        return res.data;
    },
    delete : async (id:number):Promise<ApiResponse<CursoModel>>  => {
        const response =  await apiClient.delete('curso/'+id)
        return response.data;
    }
}


