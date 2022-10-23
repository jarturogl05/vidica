import { AppIcon } from "../../../assets/icons/AppIcon"
import { PaymentRefoundIconS } from "../../../assets/icons/PaymentRefoundIconS"

interface HeaderProps {
    currentStep: number;
}

export const Header = ({currentStep}: HeaderProps) => {

    return (
        <div className='w-full h-[110px] flex flex-col map-atms__header pb-2 mb-6'>
            <div className='w-full py-[10px] flex items-center justify-center relative gap-2'>
                <PaymentRefoundIconS className='text-secondary text-2xl'/>
                <p className='font-bold text-xl uppercase text-secondary'>Programar movimiento ATM</p>
                <AppIcon className='absolute left-3' />
            </div>
            <div className='px-10 py-1 flex flex-col justify-center items-center'>
                <p className='text-primary'>Paso {currentStep} de 4</p>
                <progress className="progress w-full" value={((currentStep / 4) * 100).toString()} max="100"></progress>
            </div>
        </div>
    )
}