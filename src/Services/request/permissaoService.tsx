
import { toast } from "react-toastify"
import { api } from "../api"
import { ENDPOINTS } from "../config"

export const PermissoesService = () => {
   //Assim para parametro pelo corpo do endPoint
   async function buscarPermissoes(flagPagina: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
         api.post<boolean>(ENDPOINTS.validaPermissaoAcesso + "/" + flagPagina)
            .then(response => {
               if (response.status == 200) {
                  resolve(response.data)
               }
            }).catch(error => {
               if (error.isAxiosError) {
                  toast.error("Favor entrar em contato com o suporte! \nMensagem do erro : " + error.message)
               }
               reject(error.message)
            })
      })
   }

   // ou

   //Assim passa string pela URL
   // async function buscarPermissoes(flagPagina: string): Promise<boolean> {
   //    return new Promise((resolve, reject) => {
   //       api.get<boolean>(ENDPOINTS.BuscarPermissoes + '/' + flagPagina)
   //          .then(response => {
   //             if (response.status == 200) {
   //                resolve(response.data)
   //             }
   //          })
   //          .catch(error => {
   //             reject(error.response)
   //             if (error.isAxiosError) {
   //                toastError("Favor entrar em contato com o suporte! \n Mensagem do erro: " + error.message)
   //             }
   //          })
   //    })
   // }


   return {
      buscarPermissoes
   }
}
