interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: any;
}


const Button = ({label, type="button", onClick} : ButtonProps) => {
    return (
        <div>
            <button
            type={type}
            onClick={() => {
                onClick?.()
            }}
            >
            {label}
            </button>
        </div>
    );
};
export default Button;