"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Lista from "@/components/Lista/Lista";
import { Box, Container } from "@mui/material";
import { Professor } from "@/@types/professor";

export default function Home() {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/age20131120601.162401-e1666656016904.jpg?w=1220&h=674&crop=1",
      descricao: "Mensaleiro",
      valor_hora: 4000000,
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/age20131120601.162401-e1666656016904.jpg?w=1220&h=674&crop=1",
      descricao: "Mensaleiro",
      valor_hora: 4000000,
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/age20131120601.162401-e1666656016904.jpg?w=1220&h=674&crop=1",
      descricao: "Mensaleiro",
      valor_hora: 4000000,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Lista professores={professores} />
    </Box>
  );
}
