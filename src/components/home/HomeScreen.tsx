import { DailyNewsIcon } from "../../assets/icons/DailyNewsIcon"
import { PaymentRefoundIcon } from "../../assets/icons/PaymentRefoundIcon"
import { UserDetailsIcon } from "../../assets/icons/UserDetailsIcon"
import { ButtonSize, ButtonVariant } from "../common/buttons/buttonTypes"
import { IconButton } from "../common/buttons/IconButton"
import { Navbar } from "../common/Navbar"
import { Card } from "./components/Card"
import { Header } from "./components/Header"

export const HomeScreen = () => {

    return (
        <div className='w-screen h-screen flex flex-col '>
            <Header />
            <div className='flex flex-col p-3.5 flex-1 h-full'>
                <div className='mt-4'>
                    <Card />
                </div>
                <div className='mt-10 flex justify-evenly items-start h-full'>
                    <IconButton
                        icon={DailyNewsIcon}
                        size={ButtonSize.LARGE}
                        variant={ButtonVariant.SECONDARY}
                        text="Ultimos movimientos" />
                    <IconButton
                        icon={PaymentRefoundIcon}
                        size={ButtonSize.LARGE}
                        variant={ButtonVariant.SECONDARY}
                        text="Ultimos movimientos" />
                    <IconButton
                        icon={UserDetailsIcon}
                        size={ButtonSize.LARGE}
                        variant={ButtonVariant.SECONDARY}
                        text="Detalles de cuenta" />
                </div>
            </div>
            <Navbar currentScreen='my account' />
        </div>
    )
}