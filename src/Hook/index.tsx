import React, { ReactNode } from "react";
import { LoadingProvider } from "./useLoading";
import { PermissaoProvider } from "./usePermissao";
// import { PermissaoProvider } from "../Context/usePermissao";

interface Props {
   children: ReactNode;
}

const Hooks = ({ children }: Props) => (
   <LoadingProvider>
      <PermissaoProvider>
         {children}
      </PermissaoProvider>
   </LoadingProvider>

);

export default Hooks;
