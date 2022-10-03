import { Button, Checkbox, Col, Form, Input, Row, Select, Spin } from 'antd'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { networkService } from '../../network/network';

const { Option } = Select;


function UpdateProduct() {

  let { id } = useParams();
  const form = useRef(null);

  const navigate = useNavigate();

  const [product, setProduct] = useState({})
  const [loading, setloading] = useState(true);
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

    networkService.getById('products', id)
      .then(data => {
        setProduct(data);
        form.current.resetFields()
        setTimeout(() => {
          setloading(false);
        }, 500);
      })

  }, [])


  const onFinish = (values) => {

    networkService.update("products", values, id)
      .then(res => {
        navigate('/admin/products');
      })

  }


  return (
    <>
      <Spin spinning={loading}>
        <h1>{product.name}</h1>
        <Form
          ref={form}
          layout='vertical'
          onFinish={onFinish}
          size='large'
          initialValues={product
          }
        >

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
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

              </Form.Item>

            </Col>

            <Col span={12}>
              <Form.Item
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

              </Form.Item>

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
      </Spin>

    </>
  )
}

export default UpdateProduct