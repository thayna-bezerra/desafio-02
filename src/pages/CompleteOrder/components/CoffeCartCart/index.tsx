import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText } from "../../../../components/Typography"
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"
import { Trash } from 'phosphor-react'

export function CoffeeCartCard(){
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="../../../../../public/coffees/americano.png" />
        <div>
          <RegularText color="subtitle">Expresso Americano</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}