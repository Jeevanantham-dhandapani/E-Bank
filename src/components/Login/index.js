import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  Background,
  CardContainer,
  LoginCard,
  LoginImage,
  Heading,
  LoginForm,
  InputContainer,
  Label,
  Input,
  LoginButton,
  ErrMsg,
} from './StyledComponents'

class Login extends Component {
  state = {userId: '', pin: '', isShowSubmitError: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, isShowSubmitError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state

    const userDetails = {user_id: userId, pin}

    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, isShowSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Background>
        <CardContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginCard>
            <Heading>Welcome back</Heading>
            <LoginForm onSubmit={this.onSubmitForm}>
              <InputContainer>
                <Label htmlFor="userId">User ID</Label>
                <Input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={this.onChangeUserId}
                  placeholder="Enter User ID"
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="pin">PIN</Label>
                <Input
                  type="password"
                  id="pin"
                  value={pin}
                  onChange={this.onChangePin}
                  placeholder="Enter PIN"
                />
              </InputContainer>
              <LoginButton type="submit">Login</LoginButton>
            </LoginForm>
            {isShowSubmitError && <ErrMsg>{errorMsg}</ErrMsg>}
          </LoginCard>
        </CardContainer>
      </Background>
    )
  }
}

export default Login
