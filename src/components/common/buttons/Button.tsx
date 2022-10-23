import { classNames } from "../../../uitls/classes";
import {ButtonVariant} from "./buttonTypes";

type ButtonType = 'button' | 'submit'

interface ButtonPropsI {
    text: string;
    icon?: any;
    variant: ButtonVariant;
    type?: ButtonType;
    onClick?: () => void;
    isSelected?: boolean;
}

const MAPS_BUTTONS_VARIANT: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'bg-primary text-white hover:gb-primaryDark disable',
    [ButtonVariant.SECONDARY]: 'bg-secondary text-white',
    [ButtonVariant.TRANSPARENT]: 'bg-trasnparent text-primary border border-primary'
}


const getOpositeVariant = (variant: ButtonVariant) => {
    if(variant === ButtonVariant.PRIMARY){
        return ButtonVariant.SECONDARY
    }
    return ButtonVariant.PRIMARY;
}

export const Button = ({text, icon, variant = ButtonVariant.PRIMARY, type = 'button', onClick, isSelected}: ButtonPropsI) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames('py-3 px-[35px] rounded-lg uppercase',  isSelected ? MAPS_BUTTONS_VARIANT[getOpositeVariant(variant)] : MAPS_BUTTONS_VARIANT[variant])}>
            {text}
        </button>
    )
}