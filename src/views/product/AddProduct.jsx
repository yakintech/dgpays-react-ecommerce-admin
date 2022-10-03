import { Button, Checkbox, Col, Form, Input, InputNumber, Modal, PageHeader, Row, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { useEffect, useState } from 'react'
import { networkService } from '../../network/network'

const { Option } = Select;

function AddProduct() {

  const [categories, setcategories] = useState([]);
  const [suppliers, setsuppliers] = useState([]);

  useEffect(() => {

    networkService.getAll('categories')
      .then(data => {
        setcategories(data);
      })

    networkService.getAll('suppliers')
      .then(data => {
        setsuppliers(data);
      })

  }, [])


  const onFinish = (values) => {

    networkService.add('products', values)
      .then((res) => {
        Modal.success({
          content: 'Success! your new productID: ' + res.id,
        });
      })

  }

  return (<>
    <PageHeader
      className="site-page-header"
      title="Product"
      subTitle="Add new product form"
    />
    <Form
      layout='vertical'
      onFinish={onFinish}
      size='large'
      initialValues={
        { name: '', unitsInStock: 0, unitPrice: 0, quantityPerUnit: '' }
      }
    >
      <Row gutter={24}>
        <Col span={12}>
        <FormItem
          name='categoryId'
          label='Category'
          rules={[{ required: true, message: 'Please select category' }]}
        >
          <Select
          placeholder='Lütfen bir kategori seçiniz'
          >
            {
              categories && categories.map((item) => {
                return <Option key={item.id} value={item.id}>{item.name}</Option>
              })
            }

          </Select>

        </FormItem>

        </Col>
       
        <Col span={12}>
        <FormItem
          name='supplierId'
          label='Supplier'
          rules={[{ required: true, message: 'Lütfen bir tedarikçi seçiniz' }]}

        >
          <Select
          placeholder='Lütfen bir tedarikçi seçiniz'
          >
            {
              suppliers && suppliers.map((item) => {
                return <Option key={item.id} value={item.id}>{item.companyName}</Option>
              })
            }

          </Select>

        </FormItem>

        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input product name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label='Unit Price'
            name='unitPrice'
            rules={[{ required: true, message: 'Please input unit price!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label='Quantity Per Unit'
            name='quantityPerUnit'
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label='Units In Stock'
            name='unitsInStock'
          >
            <Input />
          </Form.Item>
        </Col>


      </Row>

      <Row>
        <Form.Item
          name='discontinued'
          valuePropName="checked"
        >
          <Checkbox>Discontinued</Checkbox>

        </Form.Item>
      </Row>


      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  </>)
}

export default AddProduct