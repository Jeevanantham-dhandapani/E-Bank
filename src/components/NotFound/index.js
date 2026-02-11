import {Background, Image, Heading, Description} from './StyledComponents'

const NotFound = () => (
  <Background>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found
    </Description>
  </Background>
)

export default NotFound
