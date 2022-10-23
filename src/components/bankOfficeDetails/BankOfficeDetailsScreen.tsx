import { ButtonSize, ButtonVariant } from "../common/buttons/buttonTypes"
import { IconButton } from "../common/buttons/IconButton"
import { BankOfficeCard } from "../nearlyAtms/components/BankOfficeCard"
import { BsFillShareFill } from "react-icons/bs";
import { PersonIcon } from "../../assets/icons/PersonIcon";
import { CarIcon } from "../../assets/icons/CarIcon";
import { PaymentRefoundIcon } from "../../assets/icons/PaymentRefoundIcon";
import { CiWarning } from "react-icons/ci";
import { PaymentRefoundIconS } from "../../assets/icons/PaymentRefoundIconS";
import { Header } from "../home/components/Header";
import { ScheduleDetails } from "./components/ScheduleDetails";
import { RatingsAndCommnetsContainer } from "./components/RatingsAndCommnetsContainer";
import { Navbar } from "../common/Navbar";

export const BankOfficeDetailsScreen = () => {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header />
            <div className='h-[calc(100%-130px)] flex-1 flex flex-col w-full'>
                <div className='p-[20px]'>
                    <BankOfficeCard enableGoToDetails={false} />
                </div>
                <div className='border-t border-primary border-b py-[12px] flex justify-evenly items-start'>
                    <IconButton
                        icon={BsFillShareFill}
                        size={ButtonSize.MEDIUM}
                        variant={ButtonVariant.SECONDARY}
                        text="Compartir ubicacion" />
                    <IconButton
                        icon={PersonIcon}
                        size={ButtonSize.MEDIUM}
                        variant={ButtonVariant.SECONDARY}
                        text="Ruta caminando" />
                    <IconButton
                        icon={CarIcon}
                        size={ButtonSize.MEDIUM}
                        variant={ButtonVariant.SECONDARY}
                        text="Ruta en auto" />
                    <IconButton
                        icon={PaymentRefoundIconS}
                        size={ButtonSize.MEDIUM}
                        variant={ButtonVariant.SECONDARY}
                        text="Programar movimiento" />
                    <IconButton
                        icon={CiWarning}
                        size={ButtonSize.MEDIUM}
                        variant={ButtonVariant.SECONDARY}
                        text="Reportar cajero" />
                </div>
                <div className='flex flex-col mt-[17px] border-b border-primary'>
                    <p className='text-primary font-semibold text-lg ml-[35px]'>Horario mas concurrido: 10:00</p>
                    <div className='px-10 py-[12px] flex items-center justify-center'>
                        <ScheduleDetails />
                    </div>
                </div>
                <RatingsAndCommnetsContainer />
            </div>
            <Navbar currentScreen='maps' />
        </div>
    )
}