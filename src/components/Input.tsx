interface InputProps {
    label: string;
    type?: string;
    value: string | number;
}

const Input = (props: InputProps) => {
    const {
        label,
        type="text",
        value,
    } = props;
    return (
    <div>
        <label>
            {label} 
            <input
            type={type}
            value={value}
            ></input>
        </label>
    </div>
    );
};
export default Input;