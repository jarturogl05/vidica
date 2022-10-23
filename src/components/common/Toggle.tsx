
interface TogglePropsI {
    onChange: (value: boolean) => void;
    label?: { text: string, position?: 'top' | 'bottom'};
    checked?: boolean;
}

export const Toggle = ({onChange, checked}: TogglePropsI) => {

    return (
        <div className="flex justify-center">
            <input
                type="checkbox"
                checked={checked}
                className="toggle toggle-secondary"
                onChange={(e) => { onChange(e.target.checked)}} />
        </div>
    )
}