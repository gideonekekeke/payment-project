import React from "react";
import { Button, Layout } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

function Thepay() {
  return (
    <div>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>
            <Link to="/paynow">
              <Button>Donate</Button>
            </Link>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Thepay;
