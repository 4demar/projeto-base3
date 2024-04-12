import { useState } from 'react';
import { ExibirDocumentos } from '../ExibirDocumentos';
import { DadosImagem } from '../../Interfaces';
import { CameraWeb } from '../CameraWeb';

export const ListaImagemCamera = () => {
   const [listaDocumentos, setListaDocumentos] = useState<DadosImagem[]>([]);

   const IncrementarImagemNaLista = (dadosImagem: DadosImagem) => {
      // Use o arquivo conforme necessário
      const novaLista = [...listaDocumentos, dadosImagem]
      setListaDocumentos(novaLista)
   }

   return (
      <div>
         <CameraWeb imagemObtida={IncrementarImagemNaLista} />

         {listaDocumentos.length > 0 && <ExibirDocumentos listaDocumentos={listaDocumentos} />}
      </div>
   );
};