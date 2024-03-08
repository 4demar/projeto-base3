import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./Componentes/Header";
import { GlobalStyle } from "./Style/global";
import { ExportarParaExcel } from "./Componentes/ExportarParaExcel";
import { InserirNumeroESomar } from "./Componentes/ImputTextSomaNumero";
import { CadastroUsuario } from "./Pages/CadastroUsuario";
import { ContainerPrincipal } from "./Style/styles";
import { RoutesApp } from "./Routes";
import { useEffect, useState } from "react";
import { FormActions, usePermissao } from "./Context/usePermissao";
import { PermissaoTela } from "./Interfaces";
import { Enum_Permissao } from "./Utils/Enum";
import { PermissoesService } from "./Services/request/permissaoService";
import 'devextreme/dist/css/dx.light.css';


export function App() {
   const { buscarPermissoes } = PermissoesService();
   // const [lista, setLista] = useState<PermissaoTela[]>([])

   // useEffect(() => {
   //    MontaListaPermissao()
   // }, [])

   // const MontaListaPermissao = async () => {
   //    const lista: PermissaoTela[] = [
   //       { nomeTela: Enum_Permissao.CADASTRO, permissao: await buscarPermissoes(Enum_Permissao.CADASTRO) },
   //       { nomeTela: Enum_Permissao.EXPORTA_XLS, permissao: await buscarPermissoes(Enum_Permissao.EXPORTA_XLS) },
   //       { nomeTela: Enum_Permissao.SOMA_NUMERO, permissao: await buscarPermissoes(Enum_Permissao.SOMA_NUMERO) }
   //    ]
   //    setLista(lista)
   // }

   return (

      <ContainerPrincipal>
         <GlobalStyle />
         <Header />
         <RoutesApp />
         {/* <Footer /> */}
      </ContainerPrincipal>

   );
}