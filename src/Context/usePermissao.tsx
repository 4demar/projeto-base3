import { createContext, ReactNode, useContext, useReducer } from 'react';
import { PermissaoTela } from '../Interfaces';

type Action = {
   type: FormActions;
   payload: any;
}

type ContextType = {
   stateGeral: State;
   dispatch: (action: Action) => void;
}

type FormProviderProps = {
   children: ReactNode;
}

//declaração de variavel StateGeral
export type State = {
   listaPermissaoTela: PermissaoTela[],
};

//como vai iniciar
export const initialDate: State = {
   listaPermissaoTela: []
}

/*Context*/
const FormPermissaoContext = createContext<ContextType | undefined>(undefined);


//Setando StateGeral
export enum FormActions {
   setListaPermissaoTela,
}

//Reducer
const formPermissaoReducer = (stateGeral: State, action: Action) => {
   switch (action.type) {
      case FormActions.setListaPermissaoTela:
         return { ...stateGeral, listaPermissaoTela: action.payload };
      default:
         return stateGeral;
   }
}

/*Provider*/
export const PermissaoProvider = ({ children }: FormProviderProps) => {
   const [stateGeral, dispatch] = useReducer(formPermissaoReducer, initialDate)
   const value = { stateGeral, dispatch }

   return (
      <FormPermissaoContext.Provider value={value}>
         {children}
      </FormPermissaoContext.Provider>
   );
}

/*Context Hook*/
export const usePermissao = () => {
   const contextDados = useContext(FormPermissaoContext)
   if (contextDados === undefined || contextDados === null) {
      throw new Error("Mensagem de Erro!!!")
   }

   return contextDados;
}