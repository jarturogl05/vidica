import { Navbar } from "../common/Navbar"
import { BankOfficeContainer } from "../nearlyAtms/components/BankOfficeContainer"
import { Header } from "./components/Header"

export const FavoritesAtmScreen = () => {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header />
            <BankOfficeContainer quantity={2} areFavorites={true} />
            <Navbar currentScreen='favorites' />
        </div>
    )
}