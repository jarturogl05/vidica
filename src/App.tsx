import React from 'react';
import {Button} from "./components/buttons/Button";
import {ButtonVariant} from "./components/buttons/buttonTypes";
import {Header} from "./components/Header";
import Login from "./assets/login.png";
import {Title} from "./components/Title";
import {TextInput} from "./components/TextInput";
import {Link} from "./components/Link";

function App() {
  return (
      <div className='w-screen h-screen overflow-hidden flex flex-col'>
          <Header />
          <div className='relative'>
              <img src={Login} />
              <div className='absolute -bottom-2 w-full'>
                  <Title text='Iniciar sesion' />
              </div>
          </div>
          <div className='mt-[45px]'>
              <div className='flex flex-col w-full items-center px-[50px] gap-[40px]'>
                  <TextInput name="email" onInput={() => {}} value='aaaa' label='Correo electronico'/>
                  <TextInput name="password" onInput={() => {}} value='aaaa' label='Contraseña' type='password'/>
              </div>
              <div className='flex flex-col justify-evenly items-center gap-[20px] mt-[40px]'>
                  <Button text="Ingresar" variant={ButtonVariant.PRIMARY} />
                  <Link text='Utilizar huella' link='#' />
                  <Link text='No soy cliente BBVA' link='#' />
              </div>
          </div>
      </div>
  );
}

export default App;
