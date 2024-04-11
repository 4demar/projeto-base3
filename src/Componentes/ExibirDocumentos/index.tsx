import { Modal } from "react-bootstrap"
import { FaFile, FaFileAlt, FaFileAudio, FaFileImage, FaFileVideo } from "react-icons/fa"
import { MeusArquivos } from "../../Interfaces"
import { useEffect, useState } from "react"
import { StyleDropzone } from "../MyDropzone/styles"

type Props = {
   listaDocumentos: MeusArquivos[]
}

export const ExibirDocumentos = ({ listaDocumentos }: Props) => {
   const [imagemModal, setImagemModal] = useState<boolean>(false);
   const [exibirDocumento, setExibirDocumento] = useState<MeusArquivos>({} as MeusArquivos)

   const getExtensionIcon = (extension: string) => {
      switch (extension) {
         case "txt":
         case "docx":
         case "doc":
         case "pdf":
            return <FaFileAlt size="30" />;
         case "png":
         case "jpg":
         case "jpeg":
         case "gif":
         case "heif":
            return <FaFileImage size="30" />;
         case "mp3":
         case "aac":
         case "wma":
         case "ogg":
         case "wav":
            return <FaFileAudio size="30" />;
         case "wmv":
         case "avi":
         case "mp4":
         case "mov":
            return <FaFileVideo size="30" />;
         default:
            return <FaFile size="30" />;
      }
   };

   const ApresentarImagem = (extension: string, url: string) => {
      if (["png", "jpg", "jpeg", "gif", "heif"].includes(extension)) {
         return <img className="dzu-previewImage" src={url} alt="imagemAnexada" />;
      } else if (["mp3", "aac", "wma", "ogg", "wav"].includes(extension)) {
         return <audio controls><source src={url} type={`audio/${extension}`} /></audio>;
      } else if (["wmv", "avi", "mp4", "mov"].includes(extension)) {
         return <video controls width="100%"><source src={url} type={`video/${extension}`} /></video>;
      } else {
         return <iframe src={url} title={exibirDocumento.doc.name} width="100%" height="600px"></iframe>;
      }
   };

   const downloadFile = () => {
      const link = document.createElement("a");
      link.href = JSON.stringify(exibirDocumento.doc);
      link.target = "_blank";
      link.download = exibirDocumento.doc.name;
      link.click();
   };

   useEffect(() => {
      console.log(listaDocumentos)
   }, [listaDocumentos])

   return (
      <StyleDropzone>
         <h3 className="mt-5"><b>Anexos Cadastrados</b></h3>
         <div className="row">
            {listaDocumentos.map((anexos, key) => {
               let extension = anexos.doc.type;
               return (
                  <div
                     key={key}
                     className="dzu-previewContainer mouse-pointer"
                     onClick={() => setExibirDocumento(anexos)}
                  >
                     {getExtensionIcon(extension)}
                     <small className="p-2">{anexos.doc.name}</small>
                  </div>
               )
            })
            }
         </div>
         <Modal show={imagemModal} onHide={() => setImagemModal(false)} centered size="xl">
            <Modal.Header closeButton />
            <Modal.Body>
               <div className="container">
                  <div className="row">
                     {ApresentarImagem(exibirDocumento.doc.type, JSON.stringify(exibirDocumento.doc))}
                     <label className="d-flex justify-content-end">{exibirDocumento.doc.name}</label>
                  </div>
                  <div className="row d-flex justify-content-end">
                     <div className="d-flex justify-content-end">
                        <button className="btn btn-primary btn-sm" onClick={downloadFile}>Visualizar</button>
                     </div>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </StyleDropzone>
   );
}