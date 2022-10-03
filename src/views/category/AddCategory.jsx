import { Modal, Row } from 'antd'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { networkService } from '../../network/network';
import { addCategoryValidationSchema } from './validation';

function AddCategory() {


    const onFinish = (values) => {
        
        networkService.add('categories',values)
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
                        <Row>
                            <p style={{ color: 'tomato' }}>{errors.name}</p>
                            <label>Category Name:</label>
                            <Field name='name'></Field>
                        </Row>
                        <Row>
                            <p style={{ color: 'tomato' }}>{errors.description}</p>
                            <label>Description:</label>
                            <Field name='description'></Field>
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