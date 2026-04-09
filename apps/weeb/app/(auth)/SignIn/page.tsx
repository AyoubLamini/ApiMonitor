"use client";
import { Button } from "@/app/Components/ui/button";
import { Input } from "@/app/Components/ui/input";
import { Label } from "@/app/Components/ui/label";
import { Card } from "@/app/Components/ui/card";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/store/theme-store";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const schema = z.object({
  email: z.email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type Data = z.infer<typeof schema>;

export default function SignIn() {
  const theme = useTheme((s) => s.theme);
  const router = useRouter();

  const queryClient = useQueryClient();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<Data>({
  resolver: zodResolver(schema),
});

const mutation = useMutation({
  mutationFn: (data: Data) => axios.post('http://localhost:4000/auth/login', data),
  onSuccess: (res) => {
    console.log(res.data);
  },
  onError: (error: Error) => {
    console.log(error);
  }
});

const onSubmit: SubmitHandler<Data> = async (data: Data) => { // mutation trigger
  mutation.mutate(data);
};

  return (
    <div
      className={`h-screen w-full flex items-center justify-center ${
        theme === "dark" ? "bg-land-primary/50" : "bg-[#f2f2f2]"
      }`}
    >
      <Card className="p-8 w-full max-w-md bg-land-primary border-border">
        <h1 className="text-3xl font-bold mb-4 text-[#FAFAFA]">
          Sign In
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <Label className="text-[#FAFAFA]">Email</Label>
              <Input
                type="email"
                {...register("email")}
                className={`border-specialInput text-[#FAFAFA] p-4 ${
                  errors.email ? "border-red-400" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-[#FAFAFA]">Password</Label>
              <Input
                type="password"
                {...register("password")}
                className={`border-specialInput text-[#FAFAFA] p-4 ${
                  errors.password ? "border-red-400" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="cursor-pointer">
              Sign In
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?
              <span
                onClick={() => router.push("/SignUp")}
                className="text-primary hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}
