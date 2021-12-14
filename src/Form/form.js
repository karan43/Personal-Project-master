import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Select,Button} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';
import './form.css';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

class FormAll extends Component {
        state = {
          confirmDirty: false,
          autoCompleteResult: [],
        };
        handleSubmit = (e) => {
          e.preventDefault();
          const formData = new FormData();
          this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              formData.append('data', JSON.stringify(values));
              axios.post('https://jsonplaceholder.typicode.com/posts', formData, {headers : {
                "Content-type": "multipart/form-data; charset=UTF-8"
              }})
              .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }
          });
        }
         render() {
          const { getFieldDecorator } = this.props.form;
          const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
          return (
            <div className='row'>
              <div className='col-md-8 form-padding'>
                  <Form onSubmit={this.handleSubmit}>
                          <FormItem
                      {...formItemLayout}
                      label={(
                        <span>
                          Full Name&nbsp;
                          <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                          </Tooltip>
                        </span>
                      )}
                    >
                      {getFieldDecorator('fullname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                      })(
                        <Input />
                      )}
                    </FormItem>

                  <FormItem
                      {...formItemLayout}
                      label="E-mail"
                    >
                      {getFieldDecorator('email', {
                        rules: [{
                          type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                          required: true, message: 'Please input your E-mail!',
                        }],
                      })(
                        <Input />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="Contact No"
                    >
                      {getFieldDecorator('contactno', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                      })(
                        <Input />
                      )}
                    </FormItem>
                     <FormItem
                      {...formItemLayout}
                      label="Purpose"
                     >
                      {getFieldDecorator('purpose', {
                        rules: [
                          { required: true, message: 'Please select yourpupose to contact us' },
                        ],
                      })(
                        <Select
                        placeholder="Please select your pupose to contact us">
                          <Option key={1} value="Product Regarding Query" >Product Regarding Query</Option>
                          <Option key={2} value="Buisness Collaboration" >Buisness Collaboration</Option>
                          <Option key={3} value="Software Solution" >Software Solution</Option>
                          <Option key={4} value="Consultancy Service" >Consultancy Service</Option>
                          <Option key={5} value="Others" >Others</Option>
                        </Select>
                      )}
                    </FormItem>
                    <FormItem
                              {...formItemLayout}
                              label="Message"
                            >
                              {getFieldDecorator('textarea', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                              })(
                               <TextArea rows={12} />
                              )}
                            </FormItem>
                     <FormItem {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">SEND</Button>
                    </FormItem>
                  </Form>
            </div>
            <div className='col-md-4'>
              <h1 className ='title-map' >Integrated ICT PVT.LTD.</h1>
              <p className='title-info'>
                  <Icon>location_on</Icon>First Cross, Jwagal<br />
                  Lalitpur-10, Kupondole<br />
                  Lalitpur, Nepal<br />
                  <a href="tel:977-01-5535522"><Icon>phone</Icon>&nbsp;&nbsp;+977-01-5535522</a><br />
                  <a href="mailto:info@integratedict.com.np"><Icon>email</Icon>&nbsp;&nbsp;info@integratedict.com.np</a><br /><br />
              </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0592689448017!2d85.32063055028743!3d27.684562982716876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b798e074b1%3A0x4eaa9c1341f18c2a!2sIntegrated+ICT+Pvt.+Ltd.!5e0!3m2!1sen!2snp!4v1531199460046"  className ='map-ict' style={{frameborder:"0px"}} allowFullScreen title='map-ict'></iframe>
            </div>
      </div>
    );
  }
}

 export default Form.create()(FormAll);
