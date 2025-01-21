import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { GeneroCreateModel, GeneroModel, GeneroUpdateModel } from "@/types/GeneroModel";
import axios from "axios";

export class generoService{
    private static url:string =  "http://localhost:8080/genero/";
    
    static get = async ():Promise<ApiResponse<GeneroModel[]>> => {
        const response =  await apiClient.get(this.url)
        return response.data;
    } 

    static post = async (model:GeneroCreateModel):Promise<ApiResponse<GeneroModel>> => {
        const response =  await apiClient.post(this.url,model)
        return response.data;
    }

    static update = async (model:GeneroUpdateModel):Promise<ApiResponse<GeneroModel>>  => {
        console.log(model);
        
        const response =  await apiClient.put(this.url+model.id,model)
        return response.data;
    }

    static delete = async (id:number):Promise<ApiResponse<GeneroModel>>  => {
        const response =  await apiClient.delete(this.url+id)
        return response.data;
    }

}


