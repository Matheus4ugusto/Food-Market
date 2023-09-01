"use client";

import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <Form onSubmit={() => router.push("/home")}>
      <label htmlFor="email">Email:</label>
      <Input id="email" placeholder="Seu email..." type="email" />
    </Form>
  );
}
