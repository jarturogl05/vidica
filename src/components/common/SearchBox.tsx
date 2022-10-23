import { classNames } from "../../uitls/classes";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

export type Type = 'text' | 'password' | 'number';


interface TextInputPropsI {
    name: string;
    label?: string;
    register: UseFormRegister<any>
}

export const SearchBox = ({name, label, register}: TextInputPropsI) => {
    return (
        <div className='w-full'>
            <div className='flex flex-col w-full relative'>
                { label &&
                    (<label className={classNames('text-primary font-bold text-[15px] text-label pl-1')}>
                        {label}
                    </label>)
                }
                <input
                    {...register(name)}
                    className={classNames('bg-info-content mt-0.5 text-primary w-full py-[5px] px-[6px] pr-[40px] text-sm rounded-xl')}
                    name={name}
                />
                <AiOutlineSearch className='text-primary text-2xl absolute bottom-[2px] right-[8px]' />
            </div>
        </div>
    )
}
