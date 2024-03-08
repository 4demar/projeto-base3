
import { Logotipo } from './logotipo'
import { Container, Content } from './styles'

export function Header() {
   return (
      <>
         <Container>
            <Content>
               <div className='rotacao_logo'>
                  <Logotipo className='tamanho-logotipo' />
               </div>
            </Content>
         </Container>
      </>
   )
}