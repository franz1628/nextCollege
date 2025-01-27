import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { TipoDocumentoCreateModel, TipoDocumentoModel, TipoDocumentoUpdateModel } from "@/types/TipoDocumentoModel";

export const TipoDocumentoService = {
    get: async ():Promise<ApiResponse<TipoDocumentoModel[]>> => {
        const res = await apiClient.get('tipoDocumento/');
        return res.data;
    },
    save: async (model:TipoDocumentoCreateModel): Promise<ApiResponse<TipoDocumentoModel>> => {
        const res = await apiClient.post('tipoDocumento/',model);
        return res.data;
    },
    update: async (id:number, model:TipoDocumentoUpdateModel): Promise<ApiResponse<TipoDocumentoModel>> => {
        const res = await apiClient.put('tipoDocumento/'+id, model);
        return res.data;
    },
    delete : async (id:number):Promise<ApiResponse<TipoDocumentoModel>>  => {
        const response =  await apiClient.delete('tipoDocumento/'+id)
        return response.data;
    }
}


