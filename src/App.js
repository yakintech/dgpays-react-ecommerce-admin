import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import LayoutFooter from './views/layout/LayoutFooter';
import LayoutHeader from './views/layout/LayoutHeader';
import { Route, Routes } from 'react-router-dom';
import ProductList from './views/product/ProductList';
import AddProduct from './views/product/AddProduct';
import { routeConfig } from './routes/routeConfig';

const { Content } = Layout;

function App() {
  return (<>
    <Layout>
      <LayoutHeader />

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          

          <Routes>

            {
              routeConfig && routeConfig.map((item, key) => {
                return <Route key={key} path={item.path} element={item.element} />

              })
            }

          </Routes>
        </div>
      </Content>

      <LayoutFooter />

    </Layout>
  </>
  )
}

export default App