import { faker } from "@faker-js/faker"
import { Comment } from "./Comment";

export const RatingsAndCommnetsContainer = () => {

    const commentsToShow = Array.from({ length: 10 });

    return (
        <div className='w-full h-full flex-1 overflow-y-scroll flex flex-col gap-4 py-1 px-10'>
            <p className='text-primary font-semibold text-lg my-2'>Calificaciones y opiniones:</p>
            {
                commentsToShow.map(() =>
                    (<Comment />)
                )
            }
        </div>
    )
}