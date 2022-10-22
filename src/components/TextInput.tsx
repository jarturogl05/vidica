import {classNames} from "../uitls/classes";

export type Type = 'text' | 'password' | 'number';


interface TextInputPropsI {
    name: string;
    label?: string;
    onInput: (e: any) => void;
    onFocusOut?: (e: any) => void;
    placeHolder?: string;
    value: string | number;
    type?: Type;
}

export const TextInput = ({onInput, name, label, type, placeHolder, value, onFocusOut}: TextInputPropsI) => {
    return (
        <div className='w-full'>
             <div className='flex flex-col w-full'>
                 { label &&
                     (<label className={classNames('text-primary font-bold text-label pl-1')}>
                         {label}
                     </label>)
                 }
                 <input
                     className={classNames('mt-1 text-primary text-input w-full py-[12px] px-[13px] rounded text-input-box')}
                     type={type}
                     onInput={onInput}
                     onBeforeInput={onFocusOut}
                     value={value}
                     name={name}
                     placeholder={placeHolder}
                 />
             </div>
        </div>
    )
}