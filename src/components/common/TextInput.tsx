import { classNames } from "../../uitls/classes";
import { UseFormRegister } from "react-hook-form";

export type Type = 'text' | 'password' | 'number';


interface TextInputPropsI {
    name: string;
    label?: string;
    onFocusOut?: (e: any) => void;
    placeHolder?: string;
    type?: Type;
    register: UseFormRegister<any>
}

export const TextInput = ({name, label, type, placeHolder, onFocusOut, register}: TextInputPropsI) => {
    return (
        <div className='w-full'>
             <div className='flex flex-col w-full'>
                 { label &&
                     (<label className={classNames('text-primary font-bold text-label pl-1')}>
                         {label}
                     </label>)
                 }
                 <input
                     {...register(name)}
                     className={classNames('mt-1 text-primary text-input w-full py-[12px] px-[13px] rounded text-input-box')}
                     type={type}
                     onBeforeInput={onFocusOut}
                     name={name}
                     placeholder={placeHolder}
                 />
             </div>
        </div>
    )
}