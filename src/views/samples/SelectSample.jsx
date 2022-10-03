import { Col, Row, Select } from 'antd'
import React, { useState } from 'react'
import { cities } from '../../data/cities'
import { countries } from '../../data/countries'

const { Option } = Select

function SelectSample() {

    const [cityList, setCities] = useState([]);
    const [cityValue, setcityValue] = useState({})


    const changeCountry = (countryId) => {

        let selectCities = cities.filter(q => q.countryId == countryId);

        setCities(selectCities);

    }

    return (<>

        <Row gutter={24}>
            <Col span={12}>
                <Select
                    onChange={(id) => changeCountry(id)}
                    style={{ width: '80%' }}
                    placeholder='Lütfen bir ülke seçiniz.'
                >
                    {
                        countries.map((item) => {
                            return <Option key={item.id} value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
            </Col>

            <Col span={12}>
                <Select
                    style={{ width: '80%' }}
                    defaultValue={cityList}
                    onChange={(e) => setcityValue(e)}
                >
                    {
                        cityList && cityList.map((item, key) => {
                                return <Option key={item.id} value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
            </Col>
        </Row>

    </>
    )
}

export default SelectSample