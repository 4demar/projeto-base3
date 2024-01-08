import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, forwardRef, useCallback, useRef, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import { Item } from "./styles";
import { DateMask } from "../Maskara";
registerLocale("ptBR", ptBR);

type Props = {
   value: Date | null
   onChange: (value: Date) => void
}

export function InputDate({ value, onChange }: Props) {

   const handleChange = useCallback((event: any) => {
      DateMask(event)
   }, []);


   const refDatePicker = useRef<DatePicker>(null);

   const handleFocus = useCallback(() => {
      refDatePicker.current?.setFocus();
   }, []);

   const minDate = new Date();
   minDate.setFullYear(minDate.getFullYear() - 150);

   return (
      <Item>
         <DatePicker
            ref={refDatePicker}
            onKeyDown={handleChange}
            locale="ptBR"
            className="form-control"
            dateFormat="dd/MM/yyyy"
            selected={value}
            maxDate={new Date()}
            minDate={minDate}
            showYearDropdown
            dateFormatCalendar="MMMM"
            onChange={onChange}
         />
      </Item>
   );
}
