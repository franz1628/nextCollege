import apiClient from "@/lib/axios/apiClient";
import { ApiResponse } from "@/types/ApiResponse";
import { GeneroCreateModel, GeneroModel, GeneroUpdateModel } from "@/types/GeneroModel";
import { LoginResponse } from "@/types/LoginResponse";
import { UserModel } from "@/types/UserModel";
import axios from "axios";

export class UserService{
    private static url:string =  "http://localhost:8080/api/auth/login";
    
    static login = async (model:UserModel):Promise<LoginResponse> => {
        const response =  await apiClient.post(this.url,model)
        return response.data;
    }

}


