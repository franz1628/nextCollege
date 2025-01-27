import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { AlumnoCreateModel, AlumnoModel, AlumnoUpdateModel } from "@/types/AlumnoModel";

export const AlumnoService = {
    get: async ():Promise<ApiResponse<AlumnoModel[]>> => {
        const res = await apiClient.get('alumno/');
        return res.data;
    },

    save: async (model:AlumnoCreateModel): Promise<ApiResponse<AlumnoModel>> => {
        const res = await apiClient.post('alumno/',model);
        return res.data;
    },
    update: async (id:number, model:AlumnoUpdateModel): Promise<ApiResponse<AlumnoModel>> => {
        const res = await apiClient.put('alumno/'+id, model);
        return res.data;
    },
    delete : async (id:number):Promise<ApiResponse<AlumnoModel>>  => {
        const response =  await apiClient.delete('alumno/'+id)
        return response.data;
    }
}


