import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./Componentes/Header";
import { GlobalStyle } from "./Style/global";
import { ExportarParaExcel } from "./Componentes/ExportarParaExcel";


export function App() {
   return (
      <>

         <Header />
         <BrowserRouter>
            <div className="row mt-3">
               <div className="col-6">
                  <ul>
                     <li><Link to="/ExportarExcel">Exportar Para Excel</Link><br /></li>
                  </ul>
               </div>
               {/* <div className="col-6">
            <ul>
              <li><Link to="/Paginacao_Simples">Paginação Simples</Link><br /></li>
              
            </ul>
          </div> */}
            </div>

            <Routes>
               <Route path="/"></Route>
               <Route path="/ExportarExcel" element={<ExportarParaExcel />} />

               {/* Exemplo abaixo */}
               {/* <Route path="/Paginacao_Simples" element={<Paginacao_Simples />}></Route> */}

            </Routes>
         </BrowserRouter>
         <GlobalStyle />

      </>
   );
}