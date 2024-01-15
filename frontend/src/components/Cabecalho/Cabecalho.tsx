import { Button } from "@mui/material";
import { CabecalContainer, Logo } from "./Cabecalho.style";

export default function Cabecalho() {
  return (
    <CabecalContainer>
      <div>
        <Logo src="/images/myteacher.png" />
        <p>Encontre o professor perfeito!</p>
      </div>
    </CabecalContainer>
  );
}
