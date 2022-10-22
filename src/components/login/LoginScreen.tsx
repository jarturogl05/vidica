import { Button } from "../common/buttons/Button";
import { ButtonVariant } from "../common/buttons/buttonTypes";
import { Header } from "../common/Header";
import { Link } from "../common/Link";
import { TextInput } from "../common/TextInput";
import { Title } from "../common/Title";
import LoginAsset from "../../assets/login.png";

export const LoginScreen = () => {
    return (
        <div className='w-screen h-screen overflow-hidden flex flex-col'>
            <Header />
            <div className='relative'>
                <img src={LoginAsset} />
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