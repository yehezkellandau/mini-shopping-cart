import {useEffect, useState} from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import {Product, ProductStatus, StateNameType} from '../types/types';

interface FormProps {
    onClick: (product: Product) => void;
}

const defaultProductState = {
    name: "",
    price: 0,
    quantity: 0,
    status: ProductStatus.DRAFT,
};

const Form = ({onClick}: FormProps) => {
    const [formState, SetFormState] = useState<Product>(defaultProductState);
    const { name, price, quantity, status} = formState;

    const onChange = (stateName: StateNameType, value: string) => { SetFormState((prevState) =>({...prevState, [stateName]: value}))};

    return (
        <div>
            <p>Add Product Form</p>
            <form>
                <Input
                label="Name"
                stateName="name"
                value={name}
                onChange={onChange}
                />
                <Input
                label="Price"
                stateName="price"
                type="number"
                value={price}
                onChange={onChange}
                />
                <Input
                label="Quantity"
                stateName="quantity"
                type="number"
                value={quantity}
                onChange={onChange}
                />
                <Select 
                value={status}
                stateName="status"
                onChange={onChange}
                />
                <Button
                label="Add Product"
                onClick={()=>{
                    onClick(formState);
                    SetFormState(defaultProductState);
                }}
                />
            </form>

        </div>
    );
};
export default Form;