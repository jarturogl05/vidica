import { useForm } from "react-hook-form"
import {MdFavorite, MdMessage, MdOutlineLocationSearching } from "react-icons/md"
import { ButtonVariant } from "../../common/buttons/buttonTypes"
import { IconButton } from "../../common/buttons/IconButton"
import { SearchBox } from "../../common/SearchBox"

export const Header = () => {

    const {register, handleSubmit} = useForm()

    return (
         <div className='w-full h-[70px] py-2.5 flex justify-between items-end px-2 gap-3 map-atms__header'>
             <div className='pb-1'>
                 <IconButton icon={MdMessage} />
             </div>
             <SearchBox name='searchOnTheMap' register={register} label='Buscar cajeros:'/>
             <div className='flex items-start gap-1 '>
                 <IconButton icon={MdFavorite} variant={ButtonVariant.SECONDARY} text='Favoritos' />
                 <IconButton icon={MdOutlineLocationSearching} variant={ButtonVariant.SECONDARY} text='Ubicacion actual' />
             </div>
         </div>
    )
}