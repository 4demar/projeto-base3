export interface Produtos {
   codigo: number,
   nome: string,
   valor: number,
   data: Date
}

export interface PermissaoTela {
   nomeTela: string,
   permissao: boolean
}

export interface DadosImagem {
   stringImagem: string
   fileImagem: File
}