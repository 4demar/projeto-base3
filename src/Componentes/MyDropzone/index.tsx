import Dropzone, { defaultClassNames, IFileWithMeta, ILayoutProps, StatusValue } from "react-dropzone-uploader";
import { StyleDropzone } from './styles'
import { BsPaperclip } from 'react-icons/bs';
import { useState } from 'react';
import { MeusArquivos } from "../../Interfaces";

export function MyDropzone() {
   const [anexos, setAnexos] = useState<MeusArquivos[]>([]);

   // const Layout = ({ input, previews, dropzoneProps, submitButton, extra: { maxFiles } }: ILayoutProps) => {
   //    return (
   //       <div className="row mb-3">
   //          <span {...dropzoneProps}>
   //             {input}
   //          </span>
   //          <ExibeCardImagens />
   //          {/* ou {previews}  assim pega somente o que for adicionado pelo dropzone*/}
   //          <div>
   //             <div className="d-flex align-items-end flex-column m-0 mt-2">
   //                {submitButton}
   //             </div>
   //          </div>
   //       </div>
   //    )
   // }

   const ExibeCardImagens = () => {
      return (
         <StyleDropzone>
            <div className="">
               <div className="row dzu-previewContainer">
                  {anexos.map((item) => (
                     <>
                        <div className="col col-md-1 d-flex p-0 mb-2">
                           <img
                              src={URL.createObjectURL(item.doc)}
                              className="dzu-previewImage"
                           />
                           <div className="dzu-previewButton" onClick={() => RemoverImagem(item.index)}>X</div>
                        </div>
                     </>
                  ))}
               </div>
            </div>
         </StyleDropzone>
      )
   }

   const handleChangeStatus = ({ file, meta }: IFileWithMeta, status: StatusValue) => {
      if (status === "removed") { //remover
         const newList = anexos.filter(item => item.index !== meta.id)
         setAnexos(newList)
      }
      if (status === 'done') { //inserir
         InserirFotoCamera(meta.id, file)
      }
   }

   const RemoverImagem = (id: string) => {
      const newList = anexos.filter(item => item.index !== id)
      setAnexos(newList)
   }

   //Utilizar junto com camera caso necessario...
   const InserirFotoCamera = (id: string, file: File) => {
      const newList = [
         ...anexos,
         {
            index: id,
            doc: file
         }
      ]
      setAnexos(newList)
   }

   const handleAddAnexo = async () => {
      //Utilizavel para exportar as imagens e salvar em banco de dados...
   }

   return (
      <div className="d-flex justify-content-center">
         <div className="mt-5 col-sm-8 col-md-6 ">
            <StyleDropzone>
               <Dropzone
                  submitButtonContent={"Inserir Anexo"}
                  accept={"image/*,audio/*,video/*,.pdf,.txt,.doc,.docx"}
                  // LayoutComponent={Layout}
                  PreviewComponent={() => <></>} //Feito isso para não apresentar os cards com as imagens dentro do dropzone
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleAddAnexo}
                  inputContent={
                     <div>
                        <BsPaperclip />
                        Solte os arquivos ou <span className="link">Clique aqui</span>
                     </div>
                  }
                  inputWithFilesContent={
                     <div>
                        <BsPaperclip />
                        Solte os arquivos ou <span className="link">Clique aqui</span>
                     </div>
                  }
                  classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
               />
            </StyleDropzone>
         </div>

      </div>
   )
}
