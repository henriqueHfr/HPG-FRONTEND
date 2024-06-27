import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro - HPG",
  description: "Tarefas",
};
export default function LoginLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <section>{children}</section>
  );
}
