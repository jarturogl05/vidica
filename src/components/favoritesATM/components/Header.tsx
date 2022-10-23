import { useForm } from "react-hook-form";
import { MdFavorite } from "react-icons/md";
import { AppIcon } from "../../../assets/icons/AppIcon";
import { SearchBox } from "../../common/SearchBox";

export const Header = () => {

    const { register } = useForm()

    return (
        <div className='w-full h-[120px] flex flex-col map-atms__header pb-2 mb-6'>
            <div className='w-full py-[10px] flex items-center justify-center relative gap-2'>
                <MdFavorite className='text-secondary text-2xl'/>
                <p className='font-bold text-xl uppercase text-secondary'>Cajeros favoritos</p>
                <AppIcon className='absolute left-3' />
            </div>
            <div className='px-10'>
                <SearchBox name='searchAtm' register={register} label='Buscar cajeros:' />
            </div>
        </div>
    )
}