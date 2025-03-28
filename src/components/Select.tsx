import { ProductStatus } from "../types/types";


interface SelectProps{
    value:ProductStatus;
}

const Select = ({value} : SelectProps) => {
    return (
        <div>
            <label>
                Status:
                <select
                value={value}
                >
                <option value={ProductStatus.DRAFT}>{ProductStatus.DRAFT}</option>
                <option value={ProductStatus.PUBLISHED}>{ProductStatus.PUBLISHED}</option>
                </select>
            </label>
        </div>
    );
};
export default Select;