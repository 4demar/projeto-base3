import { ChangeEvent } from "react";

export function MaskCPFRG(valor: string, tipo: number) {
   if (valor !== '') {
      valor = valor.replace(/\D/g, '');

      if (tipo === 2) {
         valor = valor.replace(/\./g, '');
      } else if (tipo === 0) {
         valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
      } else if (tipo === 1) {
         const lengths = [6, 7, 8, 9];
         const patterns = ["$1.$2.$3", "$1.$2.$3", "$1.$2.$3", "$1.$2.$3-$4"];

         for (let i = 0; i < lengths.length; i++) {
            if (valor.length === lengths[i]) {
               valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, patterns[i]);
               break;
            }
         }
      }
   }

   return valor;
}

export function MaskDate(valor: string) {
   valor = valor.replace(/\D/g, "");

   if (valor.length === 8) {
      valor = valor.replace(/(\d{2})(\d{2})(\d{4})$/, "$1/$2/$3");
   }

   return valor;
}

export function DateMask(event: ChangeEvent<HTMLInputElement>) {
   let value = event.target.value;
   value = value.replace(/\D/g, "");
   value = value.replace(/(\d{2})(\d)/, "$1/$2");
   value = value.replace(/(\d{2})(\d)/, "$1/$2");
   value = value.replace(/(\d{3})(\d)/, "$1");
   event.target.value = value;

   return event;
}

export function MaskTel(valor: string) {
   valor = valor.replace(/\D/g, "");

   if (valor.length === 8) {
      valor = valor.replace(/(\d{4})(\d{4})$/, "$1-$2");
   }

   return valor;
}

export function MaskCel(valor: string) {
   valor = valor.replace(/\D/g, "");

   if (valor.length === 8) {
      valor = valor.replace(/(\d{4})(\d{4})$/, "$1-$2");
   } else if (valor.length === 9) {
      valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
   }

   return valor;
}

export function validarCPFRG(numeroDigitado: string, tipo: number | null) {
   if (numeroDigitado !== '' && numeroDigitado !== null && numeroDigitado !== undefined) {
      numeroDigitado = numeroDigitado.replace(/\./g, '');
      numeroDigitado = numeroDigitado.replace('-', '');
      numeroDigitado = numeroDigitado.replace('/', '');

      //valida a quantidade de numeros
      if (numeroDigitado.length === 11 && tipo === 0) {
         var cpfAntigo = numeroDigitado.trim();

         let cpfNovo = cpfAntigo.split('');

         var v1 = 0;
         var v2 = 0;
         var aux = false;

         for (var i = 1; cpfNovo.length > i; i++) {
            if (cpfNovo[i - 1] !== cpfNovo[i]) {
               aux = true;
            }
         }

         if (aux === false) {
            return false;
         }

         for (var i = 0, p = 10; (cpfNovo.length - 2) > i; i++, p--) {
            v1 += parseInt(cpfNovo[i]) * p;
         }

         v1 = ((v1 * 10) % 11);

         if (v1 === 10) {
            v1 = 0;
         }

         if (v1 !== parseInt(cpfNovo[9])) {
            return false;
         }

         for (var i = 0, p = 11; (cpfNovo.length - 1) > i; i++, p--) {
            v2 += parseInt(cpfNovo[i]) * p;
         }

         v2 = ((v2 * 10) % 11);

         if (v2 === 10) {
            v2 = 0;
         }

         if (v2 !== parseInt(cpfNovo[10])) {
            return false;
         } else {
            return true;
         }
      } else if (numeroDigitado.length > 0 && numeroDigitado.length < 11 && tipo === 0) {
         return false;
      } else if ((numeroDigitado.length > 0 && numeroDigitado.length < 6 || numeroDigitado.length > 9) && tipo === 1) {
         return false;
      }
   } else {
      return true;
   }
}
