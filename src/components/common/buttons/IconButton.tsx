import { classNames } from "../../../uitls/classes"
import {ButtonSize, ButtonVariant } from "./buttonTypes"

interface IconButtonPropsI {
    icon: any;
    variant?: ButtonVariant;
    size?: ButtonSize;
    text?: string;
    onClick?: () => void;
}


const BUTTON_COMMON_STYLES = 'rounded-full flex items-center justify-center'

const MAPS_BUTTON_VARIANT: Record<ButtonVariant,string> = {
    [ButtonVariant.PRIMARY]: 'bg-transparent text-primary ',
    [ButtonVariant.SECONDARY]: 'bg-secondary text-white'
}

const MAPS_BUTTON_SIZES: Record<ButtonSize,string> = {
    [ButtonSize.SMALL]: 'p-1',
    [ButtonSize.MEDIUM]: 'p-2',
    [ButtonSize.LARGE]: 'p-4'
}

const MAPS_ICON_VARIANT: Record<ButtonVariant,string> = {
    [ButtonVariant.PRIMARY]: 'text-primary',
    [ButtonVariant.SECONDARY]: 'text-white'
}

const MAPS_ICON_SIZES: Record<ButtonSize, string> = {
    [ButtonSize.SMALL]: 'h-[20px] text-[20px]',
    [ButtonSize.MEDIUM]: 'h-[24px] text-[24px]',
    [ButtonSize.LARGE]: 'h-[40px] text-[40px]'
}


const MAPS_LABEL_SIZES: Record<ButtonSize, string> = {
    [ButtonSize.SMALL]: 'text-[8px] mt-[2px] w-11 leading-none',
    [ButtonSize.MEDIUM]: 'text-[12px] mt-1 w-20',
    [ButtonSize.LARGE]: 'text-[12px] mt-2 w-20'
}


export const IconButton = ({icon: Icon, text, variant = ButtonVariant.PRIMARY, size = ButtonSize.SMALL, onClick}: IconButtonPropsI) => {

    return (
        <div className='flex flex-col items-center justify-center'>
            <button onClick={onClick} className={classNames(BUTTON_COMMON_STYLES, MAPS_BUTTON_SIZES[size], MAPS_BUTTON_VARIANT[variant])}>
                {<Icon className={classNames(MAPS_ICON_SIZES[size], MAPS_ICON_VARIANT[variant])} />}
            </button>
            {
                !!text &&
                (<p className={classNames('text-primary text-center break-words', MAPS_LABEL_SIZES[size])}>{text}</p>)
            }
        </div>

    )
}