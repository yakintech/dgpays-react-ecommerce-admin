import { Modal } from 'antd';
import React from 'react'
import { useForm } from 'react-hook-form'
import { networkService } from '../../network/network';

function AddCustomer() {

    const { register, errors, handleSubmit } = useForm();

    const onFinish = (values) => {

        networkService.add('customers', values)
        .then((res) => {
            Modal.success({
                content: 'Success! your new customer Id: ' + res.id,
            });
        })

    }

    return (<>

        <form onSubmit={handleSubmit(onFinish)}>
            <div>
                <label>Company Name</label>
                <input type='text' {...register("companyName", { required: true, minLength: 4 })} />
            </div>
            <div>
                <label>Contact Name</label>
                <input type='text'  {...register("contactName")} />
            </div>
            <div>
                <label>Contact Title</label>
                <input type='text' {...register("contactTitle")} />
            </div>
            <input type="submit" value='Add' />

        </form>

    </>
    )
}

export default AddCustomer