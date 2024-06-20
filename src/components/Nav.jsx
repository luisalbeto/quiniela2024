import { Container } from "./Container"
import { Logo } from "./Logo"

export const Nav = () => {
  return(
    <div className="w-full bg-sky/70 border-b-4 border-blue/30 shadow">
      <div className="py-5 border-b-[5]">
      <Container>
      <div className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
                ">   
          <Logo/> 
          
      </div>

      </Container>

      </div>
     
    </div>
  )
}