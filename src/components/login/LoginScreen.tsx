import { Button } from "../common/buttons/Button";
import { ButtonVariant } from "../common/buttons/buttonTypes";
import { Header } from "../common/Header";
import { Link } from "../common/Link";
import { TextInput } from "../common/TextInput";
import { Title } from "../common/Title";
import LoginAsset from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Roles } from "../../models/roles";


export const LoginScreen = () => {

    const {register, handleSubmit} = useForm();

    const authState = useContext(AuthContext)

    const onLogin = () => {
        if(authState){
            authState.setUserRole(Roles.BBVA_CLIENT);
            authState.setUser({
                name: 'Usuario de prueba BBVA',
                accountType: 'Credito',
                amountAvailable: 60000,
                reportsRaised: []
            })
        }
    }

    const onImNotClient = () => {
        if(authState){
            authState.setUserRole(Roles.COMMON_USER);
            authState.setUser({
                name: 'Usuario invitado',
            })
        }
    }

    return (
        <div className='w-screen h-screen overflow-scroll flex flex-col'>
            <Header />
            <div className='relative'>
                <img src={LoginAsset} />
                <div className='absolute -bottom-2 w-full'>
                    <Title text='Iniciar sesion' />
                </div>
            </div>
            <div className='mt-[45px]'>
                <form onSubmit={onLogin}>
                    <div className='flex flex-col w-full items-center px-[50px] gap-[40px]'>
                        <TextInput name="email" label='Correo electronico' register={register}/>
                        <TextInput name="password" label='Contraseña' type='password' register={register}/>
                    </div>
                    <div className='flex flex-col justify-evenly items-center gap-[20px] mt-[40px]'>
                        <Button text="Ingresar" variant={ButtonVariant.PRIMARY} type='submit' />
                        <Link text='Utilizar huella' />
                        <Link text='No soy cliente BBVA' onClick={onImNotClient} />
                    </div>
                </form>

            </div>
        </div>
    );
}