import { Button } from "@mui/material";
import {
  Descricao,
  ItemLista,
  Foto,
  Informacoes,
  ListaStyled,
  Nome,
  Valor,
  ListaVazia,
} from "./Lista.style";
import { Professor } from "@/@types/professor";
import { FormatadorService } from "@/services/FormatadorService";
import { useState } from "react";

interface ListaProps {
  professores: Professor[];
  onSelect: (professor: Professor) => void;
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto}></Foto>
              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>
                  {FormatadorService.valorMonetario(professor.valor_hora)} por
                  hora
                </Valor>
                <Descricao>
                  {FormatadorService.limitarTexto(professor.descricao, 200)}
                </Descricao>
                <Button
                  onClick={() => props.onSelect(professor)}
                  sx={{ width: "70%" }}
                >
                  Marcar Aula com {professor.nome}
                </Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia>Nenhum item encontrado</ListaVazia>
      )}
    </div>
  );
};

export default Lista;
