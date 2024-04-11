import { useEffect, useRef, useState } from "react";

export function Relogio() {
   const [contador, setContador] = useState<number>(0);
   const intervalRef = useRef<NodeJS.Timeout>();

   useEffect(() => {
      intervalRef.current = setInterval(() => {
         setContador((prevContador) => prevContador + 1);
      }, 1000);

      return () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current);
         }
      };
   }, []);

   return (
      <h2>
         {contador}
         <br />
         {new Date().toLocaleTimeString()}
      </h2>
   )
}
