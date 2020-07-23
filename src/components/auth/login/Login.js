import React from 'react'
import { login } from "../../../actions/auth";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Spin, Input, Button, Checkbox } from "antd";


class Login extends React.Component {

    formRef = React.createRef();

    state = {
      email: "",
      password: "",
    };

    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    };
  
    onFinish = (e) => {
      console.log(
        {
          "email": this.state.email,
          "password": this.state.password
        }
      )
      this.props.login(this.state.email, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.auth.isLoading) {
            return (
              <div className="spinner">
                <Spin size="large" tip="Loading..." />
              </div>
            );
          }
          if (this.props.isAuthenticated) {
            return <Redirect to="/dashboard/" />;
          }

        const { email, password } = this.state;

        return(
        <>
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-6 login-section-wrapper">
                    <div className="login-wrapper my-auto">
                    <h1 className="login-title">Log in</h1>
                        <Form
                            onFinish={this.onFinish}
                            className="login-form"
                            ref={this.formRef}
                        >
                        <div className="form-group">
                            <Form.Item>
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                className="form-control"
                                placeholder="enter your email"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                            />
                            </Form.Item>
                            </div>
                            <Form.Item>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                placeholder="enter your passsword"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                            />
                            </Form.Item>
                            <Form.Item>
                            <div>
                                <Checkbox className="remember-me">Remember me</Checkbox>
                            </div>
                            <Button
                            type="default"
                            htmlType="submit"
                            className="login-form-button"
                            >
                            Log in
                            </Button>
                            </Form.Item>
                        </Form>
                        Don't have a account? <span><a href="#/register/">Register Here.</a></span>
                    </div>
                </div>
                </div>
            </div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps, { login })(Login);