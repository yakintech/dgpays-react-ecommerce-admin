import { Col, Modal, Row } from 'antd'
import Input from 'antd/lib/input/Input';
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { networkService } from '../../network/network';
import { addCategoryValidationSchema } from './validation';

function AddCategory() {


    const onFinish = (values) => {

        networkService.add('categories', values)
            .then((res) => {
                Modal.success({
                    content: 'Success! your new category Id: ' + res.id,
                });
            })

    }

    return (<>
        <Formik
            initialValues={
                {
                    name: '',
                    description: ''
                }
            }
            validationSchema={addCategoryValidationSchema}
            onSubmit={onFinish}
        >

            {
                ({ errors, touched }) => (

                    <Form>
                        <Row gutter={24}>
                            <Col span={8}>
                                <p style={{ color: 'tomato' }}>{errors.name}</p>
                                <label>Category Name:</label>
                                <Input name='name' />
                            </Col>
                            <Col span={8}>
                                <p style={{ color: 'tomato' }}>{errors.description}</p>
                                <label>Description:</label>
                                <Input name='description' />
                            </Col>

                        </Row>
                        <button type='submit'>Add</button>
                    </Form>
                )

            }


        </Formik>
    </>
    )
}

export default AddCategory