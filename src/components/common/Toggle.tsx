
interface TogglePropsI {
    onChange: (value: boolean) => void;
    label?: { text: string, position?: 'top' | 'bottom'}
}

export const Toggle = ({onChange}: TogglePropsI) => {

    return (
        <div className="flex justify-center">
            <input
                type="checkbox"
                className="toggle toggle-secondary"
                onChange={(e) => { onChange(e.target.checked)}} />
        </div>
    )
}