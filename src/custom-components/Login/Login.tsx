"use client"

import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { useForm } from "react-hook-form"
import "./Login.css"
import axios from 'axios';
import { useState } from "react"
import Success from "../Success"

interface FormValues {
  username: string
  password: string
}

const loginURL: string = 'http://localhost:8000/login/';
const testTokenURL: string = 'http://localhost:8000/test_token';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const [loggedIn, setLoggedIn] = useState(false);

  // const onSubmit = handleSubmit((data) => console.log(data))
  const onSubmit = handleSubmit(async (data: FormValues) => {
    try {
      // Send login request to Django API
      const response = await axios.post(loginURL, {
        username: data.username,
        password: data.password,
      });
  
      if (response.status === 200) {
        setLoggedIn(true); // This will render the Success component
        console.log("Logged in successfully");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
  

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-heading">
          Sign In
        </div>
        {loggedIn ? (<Success />) :
        (
          <form onSubmit={onSubmit}>
          <Stack gap="4" align="flex-start" maxW="sm">
            <Field
              label="Username"
              invalid={!!errors.username}
              errorText={errors.username?.message}
            >
              <Input
                {...register("username", { required: "Username is required" })}
                className="login-input"
              />
            </Field>
            <Field
              label="Password"
              invalid={!!errors.password}
              errorText={errors.password?.message}
            >
              <PasswordInput
                {...register("password", { required: "Password is required" })}
                className="login-input"
              />
            </Field>
            <Button type="submit" className="login-button">Login</Button>
          </Stack>
        </form>
        )}
      </div>
    </div>
  )
}

export default Login;



