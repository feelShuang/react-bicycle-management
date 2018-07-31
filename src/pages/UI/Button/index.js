import React from 'react';
import { Card, Button, Radio } from 'antd';
import '../ui.less'
import './index.less';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size: 'default'
    }
  }
  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }
  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Login</Button>
          <Button>终止</Button>
          <Button type="dashed">重启</Button>
          <Button type="danger">删除</Button>
          <Button disabled>删除</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button icon="search" type="primary">搜索</Button>
          <Button icon="download" type="primary">下载</Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>确定</Button>
          <Button size={this.state.size}>测试</Button>
          <Button type="dash" size={this.state.size}>点击加载</Button>
          <Button type="danger" size={this.state.size}>取消</Button>
        </Card>
      </div>
    );
  }
}
