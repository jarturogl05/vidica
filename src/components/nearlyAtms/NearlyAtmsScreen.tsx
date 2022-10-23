import { Navbar } from "../common/Navbar"
import { BankOfficeContainer } from "./components/BankOfficeContainer"
import { Header } from "./components/Header"
import { MapATMs } from "./components/MapATMs"

export const NearlyAtmsScreen = () => {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header />
            <div className='w-full h-[calc(100%-131px)] flex flex-col flex-1 items-center'>
                <MapATMs
                    atms={[]}
                    currentLocation={{latitude: 19.42830985644588, longitude: -99.09717858496306}}
                    totalResults={0} />
                <div className='w-[60px] h-[8px] rounded-[5px] bg-white shadow-separator-map my-[15px]' />
                <BankOfficeContainer />
            </div>
            <Navbar currentScreen='maps'/>
        </div>
    )
}