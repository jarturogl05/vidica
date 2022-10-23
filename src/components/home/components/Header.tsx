import Logo from '../../../assets/logo.png'
import { IconButton } from '../../common/buttons/IconButton'
import { RiSettings4Fill } from 'react-icons/ri';
import { MdMessage } from 'react-icons/md';

export const Header = () => {
    return (
        <div className='flex justify-between items-center px-5 py-2'>
            <div />
            <img src={Logo} alt="Logo" className='h-[40px]'/>
            <div className='flex gap-3'>
                <IconButton icon={RiSettings4Fill} />
                <IconButton icon={MdMessage} />
            </div>
        </div>
    )
}