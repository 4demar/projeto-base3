import { createContext, ReactNode, useContext, useState } from "react";
import { LoadingModal } from "../Componentes/LoadingModal"

interface LoadingContextData {
   isLoading: boolean;
   setLoading: (statusPage: boolean) => void;
}

interface LoadingProviderProps {
   children: ReactNode;
}

const LoadingContext = createContext({} as LoadingContextData);

export function LoadingProvider({ children }: LoadingProviderProps) {
   const [isLoading, setIsLoading] = useState(false);

   function setLoading(statusPage: boolean) {
      setIsLoading(statusPage);
   }

   return (
      <LoadingContext.Provider value={{ isLoading, setLoading }}>
         {children}
         {isLoading && <LoadingModal />}
      </LoadingContext.Provider>
   );
}

export function useLoading() {
   return useContext(LoadingContext);
}
