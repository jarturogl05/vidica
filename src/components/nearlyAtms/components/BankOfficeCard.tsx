import Bussy from "../../../assets/bussyBankOfficeLight.png";
import VeryBussy from "../../../assets/veryBussyBankOfficeLight.png";
import Free from "../../../assets/freeBankOfficeLight.png";
import { MAP_COLORS } from "./MapATMs";
import { StarRating } from "../../common/StarRating";
import { MdOutlineAtm, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { AtmIcon } from "../../../assets/icons/AtmIcon";
import { ClockIcon } from "../../../assets/icons/ClockIcon";
import { PersonIcon } from "../../../assets/icons/PersonIcon";
import { CarIcon } from "../../../assets/icons/CarIcon";
import { useNavigate } from "react-router-dom";

const MAPS_BUSSY_STATE_IMAGE: Record<MAP_COLORS, any> = {
    [MAP_COLORS.GREEN]: Free,
    [MAP_COLORS.ORANGE]: Bussy,
    [MAP_COLORS.RED]: VeryBussy,
    [MAP_COLORS.GREY]: VeryBussy,
}

const MAPS_BUSSY_STATE_DESCRIPTION: Record<MAP_COLORS, string> = {
    [MAP_COLORS.GREEN]: 'Disponible',
    [MAP_COLORS.ORANGE]: 'Ocupado',
    [MAP_COLORS.RED]: 'Muy ocupado',
    [MAP_COLORS.GREY]: 'Sin funcionamiento',
}

interface BankOfficeCardProps {
    enableGoToDetails?: boolean;
    isFavorite?: boolean;
}

export const BankOfficeCard = ({enableGoToDetails = true, isFavorite = false}: BankOfficeCardProps) => {

    const navigate = useNavigate();

    const gotToDetails = () => {
        if(enableGoToDetails)
            navigate('/atm-details');
    }

    return (
        <div className='w-full rounded-xl h-[125px] flex flex-col px-[12px] py-[10px] shadow-bank-card cursor-pointer hover:bg-base-200' onClick={gotToDetails}>
            <div className='relative flex gap-[2px]'>
                <div className='flex flex-col gap-[1px]'>
                    <img src={MAPS_BUSSY_STATE_IMAGE[MAP_COLORS.GREEN]} className='h-[60px] w-[36px]'/>
                    <p className='text-primary uppercase text-[7px]'>{MAPS_BUSSY_STATE_DESCRIPTION[MAP_COLORS.GREEN]}</p>
                </div>
                <div className='w-full ml-[4px] pr-[28px]'>
                    <p className='font-bold text-primary text-xl capitalize'>Chedraui - Plaza Crystal</p>
                    <p className='font-bold text-primary text-[8px] capitalize'>Calle Lázaro Cárdenas Col. El Encinal Centro Comercial Plaza Cristal, 91150 Xalapa-Enríquez, Ver.</p>
                    <div className=''>
                        <StarRating fillStarts={4} />
                    </div>
                </div>
                {
                    isFavorite
                        ? (<MdFavorite className='absolute right-1 top-1 text-secondary text-xl' />)
                        : (<MdFavoriteBorder className='absolute right-1 top-1 text-primary text-xl' />)
                }
            </div>
            <div className='flex justify-between items-center mt-1'>
                <div className='flex justify-center items-center gap-[4px] border-r border-r-info-content w-1/4'>
                    <AtmIcon className='text-lg' />
                    <div>
                        <p className='font-bold text-primary text-[15px] leading-0'>9</p>
                        <p className='text-primary uppercase text-[6px] leading-0'>Cajeros</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-[2px] border-r border-r-info-content w-1/4'>
                    <ClockIcon className='text-lg' />
                    <div>
                        <p className='font-bold text-primary text-[15px]'>15 MIN</p>
                        <p className='text-primary uppercase text-[6px]'>Espera Aprox.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-[2px] border-r border-r-info-content w-1/4'>
                    <PersonIcon className='text-lg text-primary' />
                    <div>
                        <p className='font-bold text-primary text-[15px]'>20 MIN</p>
                        <p className='text-primary uppercase text-[6px]'>Llegada caminando</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-[2px] w-1/4'>
                    <CarIcon className='text-lg text-primary' />
                    <div>
                        <p className='font-bold text-primary'>10 MIN</p>
                        <p className='text-primary uppercase text-[8px]'>Llegada en auto</p>
                    </div>
                </div>
            </div>
        </div>
    )

}