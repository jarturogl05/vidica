import QrCode from "../../../assets/qrCode.png";
import { BsFillShareFill } from "react-icons/bs";
import { ButtonVariant } from "../../common/buttons/buttonTypes";
import { Button } from "../../common/buttons/Button";

import { useNavigate } from "react-router-dom"

interface TrasnasctionDetailsStepProps {
    quantity: number;
}

export const TransactionDetailsStep = ({quantity}: TrasnasctionDetailsStepProps) => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/nearly-atms');
    }

    return (
        <div className='w-full h-full flex flex-col flex-1 px-7'>
            <div className='w-full flex flex-col items-center gap-2'>
                <p className='text-primary text-lg uppercase font-semibold text-center'>Movimiento ATM disponible</p>
                <p className='text-primary font-semibold text-center'>23 octubre 2022 - 9:54:00 hrs</p>
                <p className='text-secondary font-sm text-center'>Fecha de vencimiento: 30 octubre 2022</p>
            </div>
            <div className='mt-5'>
                <p className='text-primary font-bold text-xl text-center'>${quantity}</p>
                <p className='text-secondary text-sm text-center'>Este movimiento no genera comision</p>
            </div>
            <div className='mt-5'>
                <p className='font-semibold text-primary text-center'>Tu clave de retiro(12 dígitos)</p>
                <div className='flex items-center justify-center gap-4 my-4'>
                    <p className='bg-primary p-2 text-2xl rounded-xl text-white'>1739</p>
                    <p className='bg-primary p-2 text-2xl rounded-xl text-white'>0372</p>
                    <p className='bg-primary p-2 text-2xl rounded-xl text-whitee'>6498</p>
                    <p className='bg-primary p-2 text-2xl rounded-xl text-white'>1946</p>
                </div>
                <p className='font-semibold text-primary text-center'>Tu código de seguridad (4 dígitos)</p>
                <div className='flex items-center justify-center gap-4 my-4'>
                    <p className='bg-primary p-2 text-2xl rounded-xl text-white'>1809</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-secondary text-center tetx-sm'>Puedes compartir esta clave para que otra persona realice el movimiento</p>
                <img src={QrCode} alt='qrCode' className='h-[110px] w-[110px]' />
                <div className='flex flex-col items-center justify-center'>
                    <BsFillShareFill className='text-3xl text-primary' />
                    <p className='text-secondary text-sm text-center'>Compartir</p>
                </div>
            </div>

            <div className='mt-4 flex justify-center'>
                <Button text='Finalizar' variant={ButtonVariant.PRIMARY} onClick={goToHome} />
            </div>
        </div>
    )
}
