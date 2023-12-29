import React, { useState } from 'react';

export function InserirNumeroESomar() {
   const [valorTotal, setValorTotal] = useState<number>(0);
   const [valor, setValor] = useState<number>(0);
   const [valorString, setValorString] = useState<string>("");
   const [valorStringTotal, setValorStringTotal] = useState<number>(0);

   const clickInserirValor = () => {
      if (valor > 0) {
         setValorTotal(valorTotal + valor)
         LimparCampos()
      }
      if (valorString !== "") {
         setValorStringTotal(valorStringTotal + parseFloat(valorString))
         LimparCampos()
      }
   }

   const LimparCampos = () => {
      setValor(0)
   }

   // const vlMonetario = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    let value = e.target.value
   //    value = value.replace(/\D/g, "");
   //    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
   //    value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
   //    setValor(value)
   // }

   function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Enter" && valor > 0)
         clickInserirValor()
   }

   const handleValorChange = (event: any) => {
      const value = event.target.value.replace(/\+|-/ig, '');
      setValorString(value)
   }

   return (
      <>
         <div className="container text-center">
            <div className="row justify-content-center mt-3">
               <div className="col-3">
                  <div className="col-12">
                     <div className="col-10">Valor 1</div>
                     <div className="col-12 d-flex">
                        <input
                           className='form-control'
                           type="number"
                           min="1"
                           placeholder="R$"
                           value={valor === 0 ? '' : valor}
                           onChange={(event) => setValor(parseInt(event.target.value))} //Falta validar numero com virgula
                           onKeyDown={(event) => handleKeyPress(event)}
                        />
                        <div className="col-2">{valorTotal}</div>
                     </div>
                  </div>
                  <div className="col-12">
                     <div className="col-10">Valor 2</div>
                     <div className="col-12 d-flex">
                        <input
                           className='form-control'
                           type="number"
                           min="1"
                           placeholder="R$"
                           value={valorString}
                           onChange={handleValorChange} //Falta validar numero com virgula
                        />
                        <div className="col-2">{valorStringTotal}</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center mt-3">
               <div className="col-4">
                  <button className="col-12 btn btn-primary" onClick={clickInserirValor}>Inserir</button>
               </div>

            </div>
         </div>
      </>
   );
}
