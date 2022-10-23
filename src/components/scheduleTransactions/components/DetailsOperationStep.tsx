import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../common/buttons/Button";
import { ButtonVariant } from "../../common/buttons/buttonTypes";
import { TextInput } from "../../common/TextInput";
import { Card } from "../../home/components/Card";
import { TransactionType } from "../ScheduleTransactionsScreen";


interface DetailsOperationStepProps {
    operationType: TransactionType;
    onNext: (quantity: number) => void;
    isSelected?: boolean;
}

enum LocalSteps {
    SHOW_CARD,
    SHOW_AMOUNTS
}

export const DetailsOperationStep = ({operationType, onNext, isSelected}: DetailsOperationStepProps) => {


    const [currentLocalStep, setCurrentLocalStep] = useState<LocalSteps>(LocalSteps.SHOW_CARD)

    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

    const [showAnotherQuantityInput, setShowAnotherQuantityInput] = useState(false);

    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        setSelectedAmount(Number(data.quantity));
        if(selectedAmount){
            onNext(selectedAmount);
        }
    }

    const CardStepComponet = () => (
        <div className='flex flex-1 h-full flex-col w-full'>
            <p className='text-primary px-4 font-semibold text-xl mb-8'>Selecciona un tipo de operacion: </p>
            <div className='my-4 mx-8'>
                <Card showDisable={false}/>
            </div>
            <div className='flex justify-center'>
                <Button text='SIGUIENTE' variant={ButtonVariant.PRIMARY} onClick={() => {setCurrentLocalStep(LocalSteps.SHOW_AMOUNTS)}} />
            </div>
        </div>
    )

    const AmountsStepComponent = () => (
        <div className='flex flex-1 h-full flex-col'>
            <form onSubmit={onSubmit}>
                <p className='text-primary px-4 font-semibold text-xl mb-8'>Selecciona la cantidad: </p>
                <div className='grid grid-cols-2 h-full flex-1' >
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$200' onClick={() => setSelectedAmount(200)} isSelected={selectedAmount === 200 && !showAnotherQuantityInput}/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$500' onClick={() => setSelectedAmount(500)} isSelected={selectedAmount === 500 && !showAnotherQuantityInput}/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$1000' onClick={() => setSelectedAmount(1000)} isSelected={selectedAmount === 1000 && !showAnotherQuantityInput} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$1500' onClick={() => setSelectedAmount(1500)} isSelected={selectedAmount === 1500 && !showAnotherQuantityInput}/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$2000' onClick={() => setSelectedAmount(2000)} isSelected={selectedAmount === 2000 && !showAnotherQuantityInput}/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$3000' onClick={() => setSelectedAmount(3000)} isSelected={selectedAmount === 3000 && !showAnotherQuantityInput}/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='$4000' onClick={() => setSelectedAmount(4000)} isSelected={selectedAmount === 4000 && !showAnotherQuantityInput}/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button variant={ButtonVariant.SECONDARY} text='Otra cantidad' onClick={() => setShowAnotherQuantityInput(!showAnotherQuantityInput)} isSelected={showAnotherQuantityInput}/>
                    </div>
                </div>
                {
                    showAnotherQuantityInput &&
                    (
                        <div className='flex flex-col gap-2 m-4'>
                            <TextInput label='Especifica la cantidad:' name={'quantity'} register={register} />
                        </div>
                    )
                }
                {
                    (selectedAmount || showAnotherQuantityInput) &&
                        (<div className='flex justify-center mt-4'>
                            <Button text='SIGUIENTE' variant={ButtonVariant.PRIMARY} type='submit' />
                        </div>)
                }
            </form>
        </div>
    )

    return currentLocalStep === LocalSteps.SHOW_CARD ? (<CardStepComponet />) : (<AmountsStepComponent />)
}