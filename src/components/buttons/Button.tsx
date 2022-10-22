import {ButtonVariant} from "./buttonTypes";
import {classNames} from "../../uitls/classes";

type ButtonType = 'button' | 'submit'

interface ButtonPropsI {
    text: string;
    icon?: any;
    variant: ButtonVariant;
    type?: ButtonType;
}

const MAPS_BUTTONS_VARIANT: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'bg-primary text-white hover:gb-primaryDark',
    [ButtonVariant.SECONDARY]: 'bg-secondary text-white'
}

export const Button = ({text, icon, variant = ButtonVariant.PRIMARY, type = 'button'}: ButtonPropsI) => {
    return (
        <button
            type={type}
            className={classNames('py-3 px-[35px] rounded-lg uppercase', MAPS_BUTTONS_VARIANT[variant])}>
            {text}
        </button>
    )
}