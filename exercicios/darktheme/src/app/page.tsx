'use client'

import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { ThemeSwitch } from "@/components/ThemeSwitche"
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext"


const Page =()=>{
 
   return(
    <ThemeProvider>
      <Container>
        <header className=" py-5">
          <h1>Titulo da Pagina</h1>

        </header>
        <section>
          <p>Conteudo da Pagina</p>

        </section>

        <Button  label={`teste de bolinha `} onClick={()=>{}}></Button>
        <ThemeSwitch/>
      </Container>
    </ThemeProvider>
   )
}
export default Page