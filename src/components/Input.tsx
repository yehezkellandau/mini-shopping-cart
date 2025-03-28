import { OnChangeType, StateNameType } from "../types/types";

interface InputProps {
    label: string;
    type?: string;
    value: string | number;
    stateName: StateNameType
    onChange: OnChangeType;
}

const Input = (props: InputProps) => {
    const {
        label,
        type="text",
        value,
        stateName,
        onChange,
    } = props;
    return (
    <div>
        <label>
            {label} 
            <input
            type={type}
            value={value}
            onChange={(e)=> onChange(stateName, e.target.value)}
            ></input>
        </label>
    </div>
    );
};
export default Input;