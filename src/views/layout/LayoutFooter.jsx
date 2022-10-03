import React from 'react'
import { Layout } from 'antd'

const { Footer: AntdFooter } = Layout;

function LayoutFooter() {
  return (<>
    <AntdFooter style={{ textAlign: 'center' }}>
      Ant Design ©2022 Created by DG Pays
    </AntdFooter>
  </>
  )
}

export default LayoutFooter