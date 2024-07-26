import api from "@/service/api"
import { useRouter } from "next/navigation"
import React, { useRef } from "react"

export default function useHandleEnvioDeEmail(){
  const emailRef = useRef<HTMLInputElement>(null)
  const router = useRouter();
  const handleEnvioDeEmail = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    if(emailRef.current){
      const email = emailRef.current.value
      localStorage.setItem('email', email)
      try{
        const response = await api.post('/resetSenha', { email: email })
        if(response.status === 200){
          alert('Email foi enviaodo com sucesso')
          localStorage.setItem('token_code', response.data.token)
          router.push('/email/emailCode')
        }
      }catch(err){
        alert('Erro ao enviar o email, tente novamente!')
      }
    }
  }
  return {emailRef, handleEnvioDeEmail}
}