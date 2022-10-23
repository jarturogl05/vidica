import { GrMapLocation } from "react-icons/gr"
import { MdFavorite } from "react-icons/md"
import { MapMarkerIcon } from "../../assets/icons/MapMarkerIcon"
import { ButtonSize } from "./buttons/buttonTypes"
import { IconButton } from "./buttons/IconButton"
import { AiFillCreditCard } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import { PaymentRefoundIconS } from "../../assets/icons/PaymentRefoundIconS"
import { useNavigate } from "react-router-dom"

type Screen = 'maps' | 'favorites' | 'my account' | 'schedule transaction' | 'report'

interface NavbarProps {
    currentScreen: Screen;
}

export const Navbar = ({}: NavbarProps) => {

    const navigate = useNavigate();

    const toMaps = () => {
        navigate('/nearly-atms');
    }

    const toMyFavoriteATMs = () => {
        navigate('/favorites-atms');
    }

    const toMyAccount = () => {
        navigate('/home');
    }

    const toSchedduleTransactions = () => {
        navigate('/schedule-transactions');
    }

    const toReportATM = () => {
        navigate('/report-atm');
    }

    return (
        <div className='w-full h-[55px] bg-secondary-content flex justify-evenly items-center'>
            <IconButton icon={GrMapLocation} size={ButtonSize.MEDIUM} onClick={toMaps} />
            <IconButton icon={MdFavorite} size={ButtonSize.MEDIUM} onClick={toMyFavoriteATMs} />
            <IconButton icon={AiFillCreditCard} size={ButtonSize.MEDIUM} onClick={toMyAccount} />
            <IconButton icon={PaymentRefoundIconS} size={ButtonSize.MEDIUM} onClick={toSchedduleTransactions} />
            <IconButton icon={CiWarning} size={ButtonSize.MEDIUM} onClick={toReportATM} />
        </div>
    )
}