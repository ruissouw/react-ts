"use client"

import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { useForm } from "react-hook-form"
import "./Login.css"

interface FormValues {
  username: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-heading">
          Sign in
        </div>
        <form onSubmit={onSubmit}>
          <Stack gap="4" align="flex-start" maxW="sm">
            <Field
              label="Username"
              invalid={!!errors.username}
              errorText={errors.username?.message}
            >
              <Input
                {...register("username", { required: "Username is required" })}
              />
            </Field>
            <Field
              label="Password"
              invalid={!!errors.password}
              errorText={errors.password?.message}
            >
              <PasswordInput
                {...register("password", { required: "Password is required" })}
              />
            </Field>
            <Button type="submit" className="login-button">Login</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default Login;



