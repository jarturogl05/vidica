import { BankOfficeCard } from "./BankOfficeCard"

interface BankOfficeContainerProps {
    quantity?: number;
    areFavorites?: boolean;
}

export const BankOfficeContainer = ({quantity = 10, areFavorites = false}: BankOfficeContainerProps) => {
    const multiplesATMS =  Array.from({ length: quantity });

    return (
        <div className='h-full flex-1 flex flex-col gap-6 overflow-y-scroll px-[12px] min-h-0 pb-2'>
            {
                multiplesATMS.map((_) =>
                    (<BankOfficeCard isFavorite={areFavorites} />)
                )
            }
        </div>
    )
}