import notAuthorized from '../assets/not-authorized.svg';


export function PaginaRestrita() {
   return (
      <>
         <div className="row d-flex justify-content-center">
            <div className="col-6 text-center">
               <img src={notAuthorized} alt="" height={300} className="m-5" />
               <h1>Não autorizado</h1>
               <h6>Você não tem permissão para acessar esta página!</h6>
               <a href="/">Voltar para página inicial</a>
            </div>
         </div>
      </>
   );
}
