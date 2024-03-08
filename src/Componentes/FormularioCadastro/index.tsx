import { ChangeEvent, InputHTMLAttributes, useState } from "react"
import { MaskCel, MaskTel } from "../Maskara"
import { InputDate } from "../InputDate"

type EnderecoUsuario = {
   endereco: string,
   bairro: string,
   cidade: string
}
type Documento = {
   numero: string,
   tipo: number
}
type Usuario = {
   nome: string
   endereco: EnderecoUsuario
   documento: Documento
   sexo: number
   ddd1: string
   telefone1: string
   ddd2: string
   telefone2: string
   dtNasc: Date
}

const documento: Documento = {
   tipo: 0,
   numero: ''
}

export function FormularioCadastro() {
   const [doc, setDoc] = useState<Documento>(documento)
   const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
   const [endereco, setEndereco] = useState<EnderecoUsuario>({
      endereco: '', bairro: '', cidade: ''
   });

   const SelectSexo = (event: ChangeEvent<HTMLSelectElement>) => {
      setUsuario({ ...usuario, sexo: parseInt(event.target.value) })
   }

   const SelectTipoDoc = (event: ChangeEvent<HTMLSelectElement>) => {
      const newDocumento: Documento = {
         ...usuario.documento, tipo: parseInt(event.target.value)
      }
      setUsuario({ ...usuario, documento: newDocumento })
   }

   const ChangeNumeroDoc = (event: ChangeEvent<HTMLInputElement>) => {
      const newDocumento: Documento = {
         ...usuario.documento, numero: event.target.value
      }
      setUsuario({ ...usuario, documento: newDocumento })
   }

   return (
      <>
         <div className="row mt-4">
            <div className="col-sm-6 col-md-6 col-xl-4">
               <small>Nome</small>
               <input
                  className="form-control"
                  type="text"
                  value={usuario.nome}
                  onChange={(e) => setUsuario({ ...usuario, nome: e.target.value.replace(/[^a-z A-Z]/g, '') })}
                  maxLength={45}
               />
            </div>
            <div className="col-sm-5 col-md-5 col-lg-2">
               <small>Data Nascimento</small>
               <InputDate
                  value={usuario.dtNasc}
                  onChange={(date: Date) => setUsuario({ ...usuario, dtNasc: date })}
               />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
               <small>Tipo de Documento</small>
               <select className="form-select" value={doc.tipo} onChange={SelectTipoDoc}>
                  <option value={-1}>Selecione</option>
                  <option value={0}>RG</option>
                  <option value={1}>CPF</option>
               </select>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-2">
               <small>{doc.tipo === 0 ? "RG" : "CPF"}</small>
               <input className="form-control"
                  placeholder="Digite numeros"
                  type="number"
                  value={doc.numero}
                  onChange={ChangeNumeroDoc}
                  maxLength={11}
               />
            </div>
            <div className="col-sm-6 col-md-6 col-xl-2">
               <small>Sexo</small>
               <select className="form-select" value={usuario.sexo} onChange={SelectSexo}>
                  <option value={-1}>Selecione</option>
                  <option value={0}>Masculino</option>
                  <option value={1}>Feminino</option>
               </select>
            </div>
         </div>

         <div className="row mt-3 d-flex">
            <div className="col-6 d-flex">
               <div className='offset-md-1 col-sm-2 col-md-2 col-lg-1 pe-0'>
                  <small>(DDD)</small>
                  <input
                     placeholder='00'
                     className="form-control"
                     value={usuario.ddd1}
                     onChange={(e) => setUsuario({ ...usuario, ddd1: e.target.value.replace(/[^0-9]/g, '') })}
                     maxLength={2}
                  />
               </div>
               <div className='col-sm-6 col-md-6 col-xl-3'>
                  <small>Telefone</small>
                  <input
                     placeholder='9999-9999'
                     className="form-control"
                     value={usuario.telefone1}
                     onChange={(e) => setUsuario({ ...usuario, telefone1: MaskTel(e.target.value.replace(/[^0-9]/g, '')) })}
                     maxLength={8}
                  />
               </div>

               <div className='offset-md-1 col-sm-4 col-md-4 col-xl-2 pe-0'>
                  <small>(DDD)</small>
                  <input
                     placeholder='00'
                     className="form-control"
                     value={usuario.ddd1}
                     onChange={(e) => setUsuario({ ...usuario, ddd1: e.target.value.replace(/[^0-9]/g, '') })}
                     maxLength={2}
                  />
               </div>
               <div className='col-sm-7 col-md-7 col-xl-4'>
                  <small>Telefone</small>
                  <input
                     placeholder='9999-9999'
                     className="form-control"
                     value={usuario.telefone1}
                     onChange={(e) => setUsuario({ ...usuario, telefone1: MaskTel(e.target.value.replace(/[^0-9]/g, '')) })}
                     maxLength={8}
                  />
               </div>
            </div>

         </div >

         <div className="row mt-4">
            <div className="col-sm-6 col-md-6 col-xl-6">
               <small>Endereço</small>
               <input className="form-control"
                  onChange={(e) => setEndereco({ ...endereco, endereco: e.target.value.replace(/[^a-z A-Zçã0-9]/g, '') })}
                  value={endereco?.endereco}
                  maxLength={45}
               ></input>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3">
               <small>Bairro</small>
               <input className="form-control"
                  onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value.replace(/[^a-z A-Zçã0-9]/g, '') })}
                  value={endereco?.bairro}
                  maxLength={20}
               ></input>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3">
               <small>Cidade</small>
               <input className="form-control"
                  onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value.replace(/[^a-z A-Zçã0-9]/g, '') })}
                  value={endereco.cidade}
                  maxLength={20}
               ></input>
            </div>
         </div>


      </>
   )
}