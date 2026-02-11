import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  Background,
  Logo,
  LogoutButton,
  Header,
  BottomContainer,
  Heading,
  DigitalCard,
} from './StyledComponents'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <Background>
      <Header>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </Header>
      <BottomContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <DigitalCard
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </BottomContainer>
    </Background>
  )
}

export default Home
