"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()

    const onSubmit = handleSubmit(async(data) => {
       const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            }),
            headers: {
                'Content-Type':'application/json'
            }
        })

        if (res.ok) {
            router.push('/login')
        }
        console.log(res);
        
        
    });
    console.log(errors);
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name
                </label>
                <input
                    type="text"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    })}
                />
                {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                )}
        <label>
                    Email
                </label>
                <input
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        }
                    })}
                />
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}

<label>
                    Password
                </label>
                <input
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is required'
                        }
                    })}
                />
                {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                )}

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;
