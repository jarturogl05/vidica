import { useState } from "react"
import { CashDepositIcon } from "../../../assets/icons/CashDepositIcon"
import { CashWithdrawalIcon } from "../../../assets/icons/CashWithdrawalIcon"
import { DailyNewsIcon } from "../../../assets/icons/DailyNewsIcon"
import { Button } from "../../common/buttons/Button"
import { ButtonSize, ButtonVariant } from "../../common/buttons/buttonTypes"
import { IconButton } from "../../common/buttons/IconButton"
import { TransactionType } from "../ScheduleTransactionsScreen"


interface SelectTransactionTypeStepProps {
    onClick: (operation: TransactionType) => void;
}



export const SelectTransactionTypeStep = ({onClick}: SelectTransactionTypeStepProps) => {

    const [selectedOption, setSelectedOption] = useState<null | TransactionType>(null);

    return (
        <div className='h-full flex-1 flex flex-col p-4 w-full'>
            <p className='text-primary px-4 font-semibold text-xl mb-8'>Selecciona un tipo de operacion: </p>
            <div className='flex justify-evenly items-start w-full'>
                <IconButton
                    icon={CashWithdrawalIcon}
                    size={ButtonSize.LARGE}
                    variant={ButtonVariant.SECONDARY}
                    isSelected={selectedOption === TransactionType.CASH_WITHDRAW}
                    onClick={() => setSelectedOption(TransactionType.CASH_WITHDRAW)}
                    text="Retiro de efectivo" />
                <IconButton
                    icon={CashDepositIcon}
                    size={ButtonSize.LARGE}
                    variant={ButtonVariant.SECONDARY}
                    isSelected={selectedOption === TransactionType.CASH_DEPOSIT}
                    onClick={() => setSelectedOption(TransactionType.CASH_DEPOSIT)}
                    text="Deposito" />
                <IconButton
                    icon={DailyNewsIcon}
                    size={ButtonSize.LARGE}
                    variant={ButtonVariant.SECONDARY}
                    isSelected={selectedOption === TransactionType.CONSULT}
                    onClick={() => setSelectedOption(TransactionType.CONSULT)}
                    text="Consulta" />
            </div>
            {
                selectedOption !== null &&
                    ( <div className='mt-6 flex justify-center items-center'>
                        <Button text='SIGUIENTE' variant={ButtonVariant.PRIMARY} onClick={() => onClick(selectedOption)} />
                    </div>)
            }
        </div>
    )
}