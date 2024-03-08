import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ExportarParaExcel } from "../Componentes/ExportarParaExcel";
import { InserirNumeroESomar } from "../Componentes/ImputTextSomaNumero";
import { CadastroUsuario } from "../Pages/CadastroUsuario";
import { Conteudo } from "../Style/styles";
import { Enum_Permissao } from "../Utils/Enum";
import { usePermissao } from "../Hook/usePermissao";
import { TabelaDinamica } from "../Componentes/PivotGrid";

// type Props = {
//    listaPermissao: PermissaoTela[]
// }

export function RoutesApp() {
   const { ValidaPermissao } = usePermissao()

   // console.log(listaPermissao)

   // const ValidarPermissao = (flagPagina: string, pagina: React.ReactNode) => {
   //    const dados = listaPermissao.find(x => x.nomeTela == flagPagina)
   //    if (dados?.permissao)
   //       return pagina
   //    else
   //       return <PaginaRestrita />
   // }

   return (
      <Conteudo>
         <BrowserRouter>
            <div className="row mt-3">
               <div className="col-6">
                  <ul>
                     <li><Link to="/ExportarExcel">Exportar Para Excel</Link><br /></li>
                     <li><Link to="/CadastroUsuario">Cadastro Usuario</Link><br /></li>
                  </ul>
               </div>
               <div className="col-6">
                  <ul>
                     <li><Link to="/InserirNumeroESomar">Inserir Numero e Somar</Link><br /></li>
                     <li><Link to="/TabelaDinamica">Tabela Dinamica</Link><br /></li>

                  </ul>
               </div>
            </div>

            <Routes>
               <Route path="/"></Route>
               <Route path="/ExportarExcel" element={ValidaPermissao(Enum_Permissao.EXPORTA_XLS, <ExportarParaExcel />)} />
               <Route path="/InserirNumeroESomar" element={ValidaPermissao(Enum_Permissao.SOMA_NUMERO, <InserirNumeroESomar />)} />
               <Route path="/CadastroUsuario" element={ValidaPermissao(Enum_Permissao.CADASTRO, <CadastroUsuario />)} />
               <Route path="/TabelaDinamica" element={<TabelaDinamica />} />

            </Routes>
         </BrowserRouter>
      </Conteudo>
   )
}