"use client";
import useChat from "@/hooks/useChat";
import { useState } from "react";

export default function Chat() {
  const { chatId, mensagens, adicionarMensagem } = useChat();
  const [texto, setTexto] = useState("")

  return (
    <div>
      <h1>Chat</h1>
      <h2>Chat ID: {chatId}</h2>

      <ul>
        {mensagens.map((mensagem) => (
          <li key={mensagem.id} className="flex gap-2">
            <div>{mensagem.autor}:</div>
            <div>{mensagem.texto}</div>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={texto}
        className="border border-gray-300 rounded p-1"
        onChange={(e: any) => {
          setTexto(e.target.value)
        }}
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            adicionarMensagem
            setTexto("")
          }
        }}
      />
    </div>
  )
}