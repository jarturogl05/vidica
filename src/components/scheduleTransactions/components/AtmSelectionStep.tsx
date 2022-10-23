import { BankOfficeCard } from "../../nearlyAtms/components/BankOfficeCard";

interface AtmSelectionStepProps {
    onClick: () => void;
}

export const AtmSelectionStep = ({onClick}: AtmSelectionStepProps) => {
    const multiplesATMS =  Array.from({ length: 3 });

    return (
        <div className='h-full flex-1 flex flex-col'>
            <p className='text-primary px-4 font-semibold text-xl my-4'>Selecciona un cajero: </p>
            <div className='h-full flex-1 flex flex-col gap-6 px-4'>
                {
                    multiplesATMS.map((_) =>
                        (<BankOfficeCard onClick={onClick} />)
                    )
                }
            </div>
        </div>
    )
}