
interface LinkProps{
    text: string;
    link: string;
}

export const Link = ({text, link}: LinkProps) => {
    return (
        <a href={link} className='text-primary underline'>{text}</a>
    )
}