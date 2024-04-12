import { useRef, useState } from 'react';
import { Modal } from "react-bootstrap";
import { StyleContainerScan } from './styles';
import { FaCamera } from 'react-icons/fa';
import { DadosImagem } from '../../Interfaces';

type props = {
   imagemObtida: (dadosImagem: DadosImagem) => void
}

export const CameraWeb = ({ imagemObtida }: props) => {
   const videoRef = useRef<HTMLVideoElement>(null);
   const imagem = document.createElement('canvas');
   const [showModalCamera, setShowModalCamera] = useState<boolean>(false);
   const [playCamera, setPlayCamera] = useState<boolean>(false);

   const constraints = {
      video: { facingMode: "environment" }
   };

   const CarregarCamera = () => {
      setPlayCamera(true)
      setShowModalCamera(true);
      navigator.mediaDevices.getUserMedia(constraints)
         .then((stream) => {
            if (videoRef.current) {
               videoRef.current.srcObject = stream;
               videoRef.current.play().catch(err => console.error('Erro ao tentar reproduzir o vídeo', err));
            }
         })
         .catch((error) => {
            console.error('Não foi possivel acessar a camera:', error);
            setPlayCamera(false)
            setShowModalCamera(false);
         });
   }

   const TirarFoto = () => {
      if (videoRef.current) {
         imagem.width = videoRef.current.videoWidth;
         imagem.height = videoRef.current.videoHeight;

         const context = imagem.getContext('2d');
         context?.drawImage(videoRef.current, 0, 0);

         closeModal()
         imagem.toBlob((blob: Blob | null) => {
            if (blob) {
               const file = new File([blob], blob.size + '.jpeg', { type: 'image/jpeg' });

               imagemObtida({
                  stringImagem: blob.size.toString(),
                  fileImagem: file
               })
            }
         });

         // const stringImagem = imagem.toDataURL("image/jpeg")
         // // console.log(stringImagem)
         // canvasRef.current?.toDataURL(stringImagem)

         // ImagemRetirada('123', new File([""], stringImagem));
         // closeModal()
      }
   }

   const closeModal = () => {
      if (videoRef.current?.srcObject) {
         const stream = videoRef.current.srcObject as MediaStream;
         stream.getTracks().forEach((track) => track.stop());
         videoRef.current.srcObject = null;
      }
      setShowModalCamera(false);
   };


   return (
      <div>
         <div className="row d-flex justify-content-center mt-5" >
            <button type="button" className="col-md-2 col-ls-6" onClick={CarregarCamera}>
               <FaCamera type='button' size={45} />
               <h3 className="text-center">Tirar foto</h3>

            </button>
         </div>

         <Modal show={showModalCamera} onHide={closeModal} centered>
            <Modal.Header closeButton>
               <span className="title-header">Tirar foto</span>
            </Modal.Header>
            <Modal.Body>
               <video autoPlay ref={videoRef} />
               <button className={"btn btn-primary"} onClick={TirarFoto}>Tirar Foto</button>
            </Modal.Body>
         </Modal>

         {/* <canvas ref={canvasRef}></canvas> */}
      </div>
   );
};