
import { Container, Content } from './styles'
import '../../Style/App.css'
import { Logotipo } from './logotipo'

export function Header() {
   return (

      <>
         <Container>
            <Content>
               <div className="App-logo">
                  <Logotipo className='tamanho-logotipo' />
               </div>
            </Content>
         </Container>
      </>
   )
}