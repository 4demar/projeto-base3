import * as FileSaver from "file-saver";
import * as XLSX from "sheetjs-style";
import { ListaProdutos } from "../../Repositorio/produtos";
import { Produtos } from "../../Interfaces";
import { Console } from "console";
import { useCallback, useRef } from "react";

const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

export function ExportarParaExcel() {
   const tbl = useRef(null);
   const fileName = "ListaProdutos";
   const listaProduto = ListaProdutos();

   const cabecalho = Object.keys(listaProduto[0]);

   // get maximum character of each column
   function fitToColumn() {
      var wscols = [];
      for (var i = 0; i < cabecalho.length; i++) {  // columns length added
         wscols.push({ wch: Math.max(cabecalho[i].length, 10) })
      }
      return wscols;
   }

   const Exportar = () => {
      if (listaProduto.length > 0) {
         const sheet = XLSX.utils.json_to_sheet(listaProduto);
         const book = { Sheets: { data: sheet }, SheetNames: ["data"] };
         const cabecalho = Object.keys(listaProduto[0])

         //XLSX.utils.book_append_sheet(book, sheet, "data");

         // fix headers 
         XLSX.utils.sheet_add_aoa(sheet, [cabecalho], { origin: "A1" });

         // calculate column width 
         //const max_width = listaProduto.reduce((w, r) => Math.max(w, r.data.toDateString().length), 10);

         sheet["!cols"] = fitToColumn()

         const excelBuffer = XLSX.write(book, { bookType: "xlsx", type: "array" });
         const data = new Blob([excelBuffer], { type: fileType });
         FileSaver.saveAs(data, fileName + fileExtension);
      }
      else
         console.log("Erro ao gerar arquivo excel..");
   }

   return (
      <>
         {Exportar()}
      </>
   );
};