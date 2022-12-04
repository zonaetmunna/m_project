import React from 'react';
import { Layout,Input, Select } from 'antd';
const { Sider} = Layout;
const { Search } = Input;


const Sidebar = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Sider width={200} className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >

        <Search placeholder="search" style={{ width: 200,padding:"10px" }} />
        <Select
          defaultValue="Last Week"
          style={{ width:  180,padding:"10px",textAlign:'center'}}
          onChange={handleChange}
          options={[
            {
              value: 'Last Week',
              label: 'Last Week',
            },
            {
              value: 'Last Month',
              label: 'Last Month',
            },
            {
              value: 'Last Year',
              label: 'Last Year',
            },
          ]}
        />
      </Sider>
  );
};

export default Sidebar;