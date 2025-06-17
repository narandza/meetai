"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <div>
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={onSubmit}>create user</Button>
    </div>
  );
}
