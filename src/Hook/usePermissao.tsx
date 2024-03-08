import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { PermissaoTela } from "../Interfaces";
import { PermissoesService } from "../Services/request/permissaoService";
import { PaginaRestrita } from "../Pages/PaginaRestrita";
import { Enum_Permissao } from "../Utils/Enum";

interface PermissaoContextData {
   ValidaPermissao: (flagPagina: string, pagina: React.ReactNode) => any;
}
interface PermissaoProviderProps {
   children: ReactNode;
}

const PermissaoContext = createContext<PermissaoContextData>({} as PermissaoContextData);

const PermissaoProvider = ({ children }: PermissaoProviderProps) => {
   const { buscarPermissoes } = PermissoesService();
   const [lista, setLista] = useState<PermissaoTela[]>([])

   useEffect(() => {
      MontaListaPermissao();
   }, [])

   const MontaListaPermissao = async () => {
      const lista: PermissaoTela[] = [
         { nomeTela: Enum_Permissao.CADASTRO, permissao: await buscarPermissoes(Enum_Permissao.CADASTRO) },
         { nomeTela: Enum_Permissao.EXPORTA_XLS, permissao: await buscarPermissoes(Enum_Permissao.EXPORTA_XLS) },
         { nomeTela: Enum_Permissao.SOMA_NUMERO, permissao: await buscarPermissoes(Enum_Permissao.SOMA_NUMERO) }
      ]
      setLista(lista)
   }

   const ValidaPermissao = (flagPagina: string, pagina: React.ReactNode) => {
      const dados = lista.find(x => x.nomeTela === flagPagina)
      if (dados?.permissao)
         return pagina
      else
         return <PaginaRestrita />
   }


   return (
      <PermissaoContext.Provider
         value={{
            ValidaPermissao
         }}>
         {children}
      </PermissaoContext.Provider>
   );
};

function usePermissao(): PermissaoContextData {
   const context = useContext(PermissaoContext);

   if (context === undefined) {
      window.location.replace("/")
      throw new Error("usePermissao deve ser usado dentro de um PermissaoProvider");
   }

   return context;
}

export { PermissaoProvider, usePermissao };
