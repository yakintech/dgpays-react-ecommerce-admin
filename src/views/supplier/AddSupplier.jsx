import { Modal, Row } from 'antd';
import { Field, Formik, Form } from 'formik'
import React from 'react'
import { networkService } from '../../network/network';


function AddSupplier() {

    const onFinish = (values) => {

        networkService.add('suppliers', values)
        .then((res) => {
            Modal.success({
                content: 'Success! your new Supplier ID: ' + res.id,
              });
        })

    }

    return (<>
        <Formik
            initialValues={{
                companyName: '',
                contactName: '',
                contactTitle: '',
            }}
            onSubmit={onFinish}
        >
            <Form>

                <Row>
                    <label htmlFor="companyName">Company Name: </label>
                    <Field id="companyName" name="companyName" />
                </Row>

                <Row>
                    <label htmlFor="contactName">Contact Name: </label>
                    <Field id="contactName" name="contactName" />
                </Row>

                <Row>
                    <label htmlFor="contactTitle">Contact Title: </label>
                    <Field id="contactTitle" name="contactTitle" />
                </Row>

                <Row>
                      <button type="submit">Submit</button>
                </Row>

              
            </Form>
        </Formik>
    </>
    )
}

export default AddSupplier