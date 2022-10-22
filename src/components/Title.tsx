

interface TitlePropsI {
    text: string;
}

export const Title = ({text}: TitlePropsI) => {
    return (
        <h1 className='text-primary font-bold text-title text-center drop-shadow-lg'>{text}</h1>
    )
}