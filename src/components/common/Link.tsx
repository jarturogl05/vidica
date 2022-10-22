import { useNavigate } from "react-router-dom"

interface LinkProps{
    text: string;
    link?: string;
    onClick?: () => void;
}

export const Link = ({text, link, onClick}: LinkProps) => {

    const navigate = useNavigate();

    const navigateonClick = () => {
        if(link){
            navigate(link);
        }
    }

    return (
        <p className='text-primary underline cursor-pointer' onClick={!!onClick ? onClick : navigateonClick}>{text}</p>
    )
}