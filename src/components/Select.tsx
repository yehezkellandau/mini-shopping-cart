import { ProductStatus, OnChangeType, StateNameType } from "../types/types";


interface SelectProps{
    value:ProductStatus;
    stateName: StateNameType;
    onChange: OnChangeType;
}

const Select = ({value, stateName, onChange} : SelectProps) => {
    return (
        <div>
            <label>
                Status:
                <select
                value={value}
                onChange={(e)=> onChange(stateName, e.target.value)}
                >
                <option value={ProductStatus.DRAFT}>{ProductStatus.DRAFT}</option>
                <option value={ProductStatus.PUBLISHED}>{ProductStatus.PUBLISHED}</option>
                </select>
            </label>
        </div>
    );
};
export default Select;