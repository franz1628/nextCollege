import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { TipoDocumentoCreateModel, TipoDocumentoModel, TipoDocumentoUpdateModel } from "@/types/TipoDocumentoModel";

export const TipoDocumentoService = {
    get: async ():Promise<ApiResponse<TipoDocumentoModel[]>> => {
        const res = await apiClient.get('tipo-documento/');
        return res.data;
    },
    save: async (model:TipoDocumentoCreateModel): Promise<ApiResponse<TipoDocumentoModel>> => {
        const res = await apiClient.post('tipo-documento/',model);
        return res.data;
    },
    update: async (id:number, model:TipoDocumentoUpdateModel): Promise<ApiResponse<TipoDocumentoModel>> => {
        const res = await apiClient.put('tipo-documento/'+id, model);
        return res.data;
    },
    delete : async (id:number):Promise<ApiResponse<TipoDocumentoModel>>  => {
        const response =  await apiClient.delete('tipo-documento/'+id)
        return response.data;
    }
}


