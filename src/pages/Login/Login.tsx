import React from 'react'
import { LoginLayout } from '../../components/layouts'
import { Logo } from '../../components/global'
import PabloSignIn from '../../assets/images/pablo-sign-in.png'
import { Input } from '../../components/interface'

const Login: React.FC = () => {

    return (
        <LoginLayout>
            <div className='login'>
                <div className='login-image-wrapper'>
                    <Logo className='login-logo' />
                    <div className='login-image-container'>
                        <img src={PabloSignIn} alt='sign-in illustration' />
                    </div>
                </div>
                <div className='login-form'>
                    <div className='login-form-caption'>
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                    </div>
                    <div className='login-form-container'>
                        <form>
                            <div>
                                <Input
                                    placeholder='Email'
                                    border='lg'
                                    type='email'
                                />
                            </div>
                            <div style={{ margin: '1.5rem 0' }}>
                                <Input
                                    placeholder='Password'
                                    border='lg'
                                    type='password'
                                    icon={
                                        <span
                                            className='password-input-icon'
                                        >
                                            show
                                        </span>
                                    }
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>
    )
}

export default Login