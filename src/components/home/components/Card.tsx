import CardChip from "../../../assets/cardChip.png"
import {useContext, useState } from "react";
import { Toggle } from "../../common/Toggle";
import { AuthContext } from "../../../context/AuthContext";
import { IconButton } from "../../common/buttons/IconButton";
import { GrFormView, GrFormViewHide } from "react-icons/gr"
import { ButtonSize } from "../../common/buttons/buttonTypes";
import BBVALogo from "../../../assets/logoBBVA.png"
import { classNames } from "../../../uitls/classes";


export const Card = () => {
    const [cardActive, setCardActive] = useState(true);
    const [showSensitiveData, setShowSensitiveData] = useState(false);

    const authState = useContext(AuthContext);

    return (
        <div className={classNames('rounded-lg py-[22px] px-[26px] flex flex-col relative', cardActive ? 'bg-primary' : 'bg-base-300')}>
            <div className='flex justify-between items-top'>
                <img src={CardChip} alt="Card chip" className='h-[37px] w-[70px]' />
                <div>
                    <Toggle onChange={(value) => {setCardActive(value)}} />
                    <p className='text-white font-medium text-sm text-center'>Activar</p>
                </div>
            </div>
            <div className='mt-[30px] flex flex-col gap-1'>
                <p className='font-bold text-2xl text-white'>**** **** **** 1234</p>
                <div className='flex gap-3 items-center'>
                    <p className='text-white text-[9px] break-words w-10 uppercase'>Valida hasta</p>
                    <p className='text font-semibold text-white'>03/24</p>
                </div>
                <p className='text-white font-semibold capitalize'>{authState && authState.user?.name}</p>
            </div>
            <div className='flex items-center mt-2'>
                <p className='text-white font-semibold'>Saldo disponible: </p>
                {
                    showSensitiveData
                        ? ( <p className='text-white font-semibold ml-2'>$1750.54</p> )
                        : ( <p className='text-white font-semibold ml-2'>******</p> )
                }
                <div className='ml-2 visibility'>
                    <IconButton
                        size={ButtonSize.MEDIUM}
                        icon={showSensitiveData ? GrFormView : GrFormViewHide }
                        onClick={() => setShowSensitiveData(!showSensitiveData)}/>
                </div>
            </div>
            <div className='absolute bottom-[22px] right-[22px]'>
                <img src={BBVALogo} className='h-[20px]'/>
            </div>
        </div>
    )
}