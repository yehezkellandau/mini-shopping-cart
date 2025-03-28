import {useState} from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import {Product, ProductStatus} from '../types/types';

const defaultProductState = {
    name: "",
    price: 0,
    quantity: 0,
    status: ProductStatus.DRAFT,
};

const Form = () => {
    const [formState, SetFormState] = useState<Product>(defaultProductState);
    const { name, price, quantity, status} = formState;
    return (
        <div>
            <p>Add Product Form</p>
            <form>
                <Input
                label="Name"
                value={name}
                />
                <Input
                label="Price"
                type="number"
                value={name}
                />
                <Input
                label="Quantity"
                type="number"
                value={name}
                />
                <Select value={status}
                />
                <Button
                label="Add Product"
                />
            </form>

        </div>
    );
};
export default Form;