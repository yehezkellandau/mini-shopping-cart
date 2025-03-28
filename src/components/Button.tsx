interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
}


const Button = ({label, type="button"} : ButtonProps) => {
    return (
        <div>
            <button
            type={type}
            >
            {label}
            </button>
        </div>
    );
};
export default Button;