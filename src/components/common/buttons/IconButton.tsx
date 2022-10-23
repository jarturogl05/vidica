import { classNames } from "../../../uitls/classes"
import {ButtonSize, ButtonVariant } from "./buttonTypes"

interface IconButtonPropsI {
    icon: any;
    variant?: ButtonVariant;
    size?: ButtonSize;
    text?: string;
    onClick?: () => void;
    isSelected?: boolean;
}


const BUTTON_COMMON_STYLES = 'rounded-full flex items-center justify-center'

const MAPS_BUTTON_VARIANT: Record<ButtonVariant,string> = {
    [ButtonVariant.PRIMARY]: 'bg-primary text-white ',
    [ButtonVariant.SECONDARY]: 'bg-secondary text-white',
    [ButtonVariant.TRANSPARENT]: 'bg-transparent text-primary'
}

const MAPS_BUTTON_SIZES: Record<ButtonSize,string> = {
    [ButtonSize.SMALL]: 'p-1',
    [ButtonSize.MEDIUM]: 'p-2',
    [ButtonSize.LARGE]: 'p-4'
}

const MAPS_ICON_VARIANT: Record<ButtonVariant,string> = {
    [ButtonVariant.PRIMARY]: 'text-white',
    [ButtonVariant.SECONDARY]: 'text-white',
    [ButtonVariant.TRANSPARENT]: 'text-primary ',
}

const MAPS_ICON_SIZES: Record<ButtonSize, string> = {
    [ButtonSize.SMALL]: 'h-[20px] text-[20px]',
    [ButtonSize.MEDIUM]: 'h-[24px] text-[24px]',
    [ButtonSize.LARGE]: 'h-[40px] text-[40px]'
}


const MAPS_LABEL_SIZES: Record<ButtonSize, string> = {
    [ButtonSize.SMALL]: 'text-[8px] mt-[2px] w-11 leading-none',
    [ButtonSize.MEDIUM]: 'text-[12px] mt-1 w-15 leading-none',
    [ButtonSize.LARGE]: 'text-[12px] mt-2 w-20'
}

const getOpositeVariant = (variant: ButtonVariant) => {
    if(variant === ButtonVariant.PRIMARY){
        return ButtonVariant.SECONDARY
    }
    return ButtonVariant.PRIMARY;
}

export const IconButton = ({icon: Icon, text, variant = ButtonVariant.TRANSPARENT, size = ButtonSize.SMALL, onClick, isSelected= false}: IconButtonPropsI) => {

    return (
        <div className='flex flex-col items-center justify-center'>
            <button onClick={onClick} className={classNames(BUTTON_COMMON_STYLES, MAPS_BUTTON_SIZES[size], isSelected? MAPS_BUTTON_VARIANT[getOpositeVariant(variant)] : MAPS_BUTTON_VARIANT[variant])}>
                {<Icon className={classNames(MAPS_ICON_SIZES[size], isSelected? MAPS_ICON_VARIANT[getOpositeVariant(variant)] : MAPS_ICON_VARIANT[variant])} />}
            </button>
            {
                !!text &&
                (<p className={classNames('text-primary text-center break-words', MAPS_LABEL_SIZES[size])}>{text}</p>)
            }
        </div>

    )
}