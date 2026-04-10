"use client";
import { Button } from "@/app/Components/ui/button";
import { Input } from "@/app/Components/ui/input";
import { Label } from "@/app/Components/ui/label";
import { Card } from "@/app/Components/ui/card";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/store/theme-store";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const schema = z.object({
  username : z.string().min(3, { message: "Username must be at least 3 characters" }),
  email: z.email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type Data = z.infer<typeof schema>;



export default function SignUp() {

  const theme = useTheme((s) => s.theme);
  const router = useRouter();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Data>({
      resolver: zodResolver(schema),
    });
    const onSubmit: SubmitHandler<Data> = async (data) => {
     try {
      const res = await axios.post(
        "http://localhost:4000/auth/signup",
        data
      );
      console.log(res.data);
      // router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`h-screen w-full flex items-center justify-center ${theme === "dark" ? "bg-land-primary/50" : "bg-[#f2f2f2]"}`}>
     <Card className="p-8 w-full max-w-md bg-land-primary border-specialInput">
      <h1 className="text-3xl font-bold mb-4 text-[#FAFAFA]">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>  
      <div className="space-y-4">
         <div>
          <Label htmlFor="username" className="text-[#FAFAFA]">Username</Label>
          <Input className={`transition-all duration-300 ease-in-out border-specialInput text-[#FAFAFA] p-4 ${errors.username ? "border-red-400" : ""} `} id="username" type="text" {...register("username")} />
          {errors.username && <span className="text-red-400 text-sm">{errors.username.message}</span>}
        </div>
        <div>
          <Label htmlFor="email" className="text-[#FAFAFA]">Email</Label>
          <Input className={`transition-all duration-300 ease-in-out border-specialInput text-[#FAFAFA] p-4 ${errors.email ? "border-red-400" : ""} `} id="email" type="email" {...register("email")} />
          {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <Label htmlFor="password" className="text-[#FAFAFA]">Password</Label>
          <Input className={`transition-all duration-300 ease-in-out border-specialInput text-[#FAFAFA] p-4 ${errors.password ? "border-red-400" : ""} `} id="password" type="password" {...register("password")} />
          {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
          </div>
           <div>
          <Label htmlFor="confirmPassword" className="text-[#FAFAFA]">Confirm Password</Label>
          <Input className={`transition-all duration-300 ease-in-out border-specialInput text-[#FAFAFA] p-4 ${errors.confirmPassword ? "border-red-400" : ""} `} id="confirmPassword" type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <span className="text-red-400 text-sm">{errors.confirmPassword.message}</span>}
          </div>
        <Button className="cursor-pointer" type="submit">Sign Up</Button>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Already have an account? <a onClick={()=> router.push('/SignIn')} className="text-primary hover:underline cursor-pointer">Sign In</a>
        </p>
      </div>
      </form>
     </Card>
    </div>
  );
}