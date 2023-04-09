import { Container, Logo, BackIcon, BackButton } from "./styles"
import LogoPng from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton }: Props) {

  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={LogoPng} />
    </Container>
  )
}