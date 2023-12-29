import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./Componentes/Header";
import { GlobalStyle } from "./Style/global";
import { ExportarParaExcel } from "./Componentes/ExportarParaExcel";
import { InserirNumeroESomar } from "./Componentes/ImputTextSomaNumero";


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
               <div className="col-6">
                  <ul>
                     <li><Link to="/InserirNumeroESomar">Inserir Numero e Somar</Link><br /></li>
                  </ul>
               </div>
            </div>

            <Routes>
               <Route path="/"></Route>
               <Route path="/ExportarExcel" element={<ExportarParaExcel />} />
               <Route path="/InserirNumeroESomar" element={<InserirNumeroESomar />}></Route>
            </Routes>
         </BrowserRouter>
         <GlobalStyle />
      </>
   );
}