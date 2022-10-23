import { BankOfficeCard } from "./BankOfficeCard"



export const BankOfficeContainer = () => {
    const multiplesATMS = [1, 1, 1, 1, 1, 1, 1]

    return (
        <div className='h-full flex-1 flex flex-col gap-6 overflow-y-scroll px-[12px] min-h-0 pb-2'>
            {
                multiplesATMS.map((_) =>
                    (<BankOfficeCard />)
                )
            }
        </div>
    )
}