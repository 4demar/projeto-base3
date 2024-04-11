import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ExportarParaExcel } from "../Componentes/ExportarParaExcel";
import { InserirNumeroESomar } from "../Componentes/ImputTextSomaNumero";
import { CadastroUsuario } from "../Pages/CadastroUsuario";
import { Conteudo } from "../Style/styles";
import { Enum_Permissao } from "../Utils/Enum";
import { usePermissao } from "../Hook/usePermissao";
import { TabelaDinamica } from "../Componentes/PivotGrid";
import { Relogio } from "../Componentes/Relogio";
import { CameraWeb } from "../Componentes/CameraWeb";
import { MyDropzone } from "../Componentes/MyDropzone";

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

   function RenderizarPagina() {
      setInterval(Relogio, 1000)
   }


   return (
      <Conteudo>
         <BrowserRouter>
            <div className="row mt-3 d-flex justify-content-center">
               <div className="col-md-2 col-ls-6 text-center mx-3">
                  <Link to="/ExportarExcel">Exportar Para Excel</Link><br />
                  <Link to="/CadastroUsuario">Cadastro Usuario</Link><br />
                  <Link to="/Relogio">Relógio</Link><br />
                  <Link to="/Dropzone">Dropzone</Link><br />

               </div>
               <div className="col-md-2 col-ls-6 text-center mx-3">
                  <Link to="/InserirNumeroESomar">Inserir Numero e Somar</Link><br />
                  <Link to="/TabelaDinamica">Tabela Dinamica</Link><br />
                  <Link to="/CameraWeb">CameraWeb</Link><br />
               </div>
            </div>

            <Routes>
               <Route path="/"></Route>
               <Route path="/ExportarExcel" element={ValidaPermissao(Enum_Permissao.EXPORTA_XLS, <ExportarParaExcel />)} />
               <Route path="/InserirNumeroESomar" element={ValidaPermissao(Enum_Permissao.SOMA_NUMERO, <InserirNumeroESomar />)} />
               <Route path="/CadastroUsuario" element={ValidaPermissao(Enum_Permissao.CADASTRO, <CadastroUsuario />)} />
               <Route path="/TabelaDinamica" element={<TabelaDinamica />} />
               <Route path="/Relogio" element={<Relogio />} />
               <Route path="/CameraWeb" element={<CameraWeb />} />
               <Route path="/Dropzone" element={<MyDropzone />} />
            </Routes>
         </BrowserRouter>
      </Conteudo>
   )
}