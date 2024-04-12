import { useRef, useState } from "react";
import { CameraWeb } from "../CameraWeb"
import { DadosImagem } from "../../Interfaces";
import Tesseract from "tesseract.js";

export const LerImagem = () => {
   const [textoImagem, setTextoImagem] = useState("")


   const carregarImagem = async (dadosImagem: DadosImagem) => {
      // Ler o texto da imagem - 'por' indicar o idioma
      const { data } = await Tesseract.recognize(dadosImagem.fileImagem, 'por');

      // Atribuir o texto da imagem para a variável "text"
      setTextoImagem(data.text);
   }

   return (
      <>
         <CameraWeb imagemObtida={carregarImagem} />
         {textoImagem && <p>Texto extraído da imagem: </p>}
         <pre>{textoImagem}</pre>
      </>
   )
}