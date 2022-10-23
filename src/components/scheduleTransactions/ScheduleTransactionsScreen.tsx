import { useState } from "react"
import { Navbar } from "../common/Navbar";
import { AtmSelectionStep } from "./components/AtmSelectionStep"
import { DetailsOperationStep } from "./components/DetailsOperationStep";
import { Header } from "./components/Header"
import { SelectTransactionTypeStep } from "./components/SelectTransactionTypeStep";
import { TransactionDetailsStep } from "./components/TransactionDetailsStep";

enum Step {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    LAST = 4
}

export enum TransactionType {
    CASH_WITHDRAW,
    CASH_DEPOSIT,
    CONSULT
}

export const ScheduleTransactionsScreen = () => {

    const [currentStep, setCurrentStep] = useState<Step>(Step.FIRST);

    const [operationType, setOperationType] = useState<TransactionType | null>(null);

    const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null);

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header currentStep={currentStep} />
            {
                currentStep === Step.FIRST &&
                    (<AtmSelectionStep onClick={() => setCurrentStep(Step.SECOND)} />)
            }
            {
                currentStep === Step.SECOND &&
                    (<SelectTransactionTypeStep onClick={(operation) => { setOperationType(operation); setCurrentStep(Step.THIRD)}} />)
            }
            {
                currentStep === Step.THIRD && operationType !== null &&
                    (<DetailsOperationStep operationType={operationType} onNext={(quantity) => {setCurrentStep(Step.LAST); setSelectedQuantity(quantity)}} />)
            }
            {
                currentStep === Step.LAST &&  selectedQuantity !== null &&
                    (<TransactionDetailsStep quantity={selectedQuantity} />)
            }
            <Navbar currentScreen='schedule transaction' />
        </div>
    )

}