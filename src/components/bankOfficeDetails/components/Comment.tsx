import PhotoPerfil from "../../../assets/commentAvatar.png";
import { StarRating } from "../../common/StarRating";

export const Comment = () => {
    return (
        <div className='w-full rounded-[10px] py-[8px] px-[15px] flex gap-2 items-center border border-base-200'>
            <img src={PhotoPerfil} alt='Perfil' className='h-[40px] w-[40px] rounded-full' />
            <div className=''>
                <p className='text-primary text-lg text-semibold'>Antonio</p>
                <p className='text-primary text-[8px] text-semibold'>Cajeros nuevos y en excelentes condiciones.</p>
                <StarRating fillStarts={5} />
                <p className='text-base-200 text-[8px]'>11:11 10/22/2022</p>
            </div>
        </div>
    )
}