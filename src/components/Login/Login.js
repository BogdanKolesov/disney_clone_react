import React from 'react';
import { Container, CTA, CTALogoOne, SignUp, Description, CTALogoTwo } from './Login.styles';

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/assets/images/cta-logo-one.svg' alt='logo' />
                <SignUp to='/'>Get all there</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt aut necessitatibus magni maxime quibusdam non? Eaque numquam consequuntur ullam, incidunt praesentium a nisi non quas, dolorum minus velit fugit quibusdam laborum? Vel, iusto quam voluptatibus molestias facere ea voluptates?
                </Description>
                <CTALogoTwo src='/assets/images/cta-logo-two.png' />
            </CTA>
        </Container>
    );
}

export default Login;
