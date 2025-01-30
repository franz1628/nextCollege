'use client'
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { UserService } from "@/services/userService";
import { LoginResponse } from "@/types/LoginResponse";
import { UserModel } from "@/types/UserModel";
import { KeyIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

interface Props {

}

const Login: React.FC<Props> = ({}) => {
  const [form, setForm] = useState<UserModel>(new UserModel("franz","123456"))
  const router = useRouter();

  useEffect(()=>{
    if(localStorage.user){
      router.push("/dashboard/genero")
    }
  },[])

  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const res:LoginResponse = await UserService.login(form);
    if(res.username){
      localStorage.setItem("user",JSON.stringify(res));

      router.push("/dashboard/genero")
    }
    
    
  }
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome !
        </h2>
        <form onSubmit={onSubmit}>
          <div>
            <Input label="Username" type="text" placeholder="username" value={form.username} onChange={(e)=>setForm({...form,username:(e.target as HTMLInputElement).value})} />

          </div>

          <div> 
            <Input label="Password" type="password" placeholder="password" value={form.password} onChange={(e)=>setForm({...form,password:(e.target as HTMLInputElement).value})}/>
          </div>


          <div>
            <Button
              type="submit"
              color="blue"
              className=""
            >
              <KeyIcon className="w-5 mx-1" />
              Enter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
