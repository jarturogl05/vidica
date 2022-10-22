import Logo from '../../assets/logo.png'


export const Header = () => {
    return (
        <div className="py-2 flex justify-center">
            <img src={Logo} alt="Logo" className='h-[40px]'/>
        </div>
    )
}