import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import { register } from "../../../actions/auth";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Register extends Component {
    state = {
        step: 1,
        homeType: '',
        number0fPeople: '',
        PropertyCost: '',
        DepositeCost: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        title: '',
        company: '',
        location: '',
        start: '',
        email: '',
        password1: '',
        password2: '',
        regsuccess: false,
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        auth: PropTypes.array,
      };

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1,
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    finalSubmit = () => {

        var registerdata = {
            hometype: this.state.homeType,
            number: this.state.number0fPeople,
            propertycost: this.state.PropertyCost,
            depositecost: this.state.DepositeCost,
            firstname: this.state.firstName,
            middlename: this.state.middleName,
            lastname: this.state.lastName,
            title: this.state.title,
            company: this.state.company,
            start: this.state.start,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2,
        }
        console.log(registerdata)

        this.props.register(registerdata);
        this.setState({
            regsuccess: true,
        })

    }
    
    showStep = () => {
        const { 
                step, 
                firstName, 
                middleName, 
                lastName, 
                homeType, 
                number0fPeople, 
                start, 
                PropertyCost, 
                DepositeCost, 
                title, 
                company, 
                location, 
                email, 
                password1, 
                password2 
            } = this.state;

        if(step === 1)
            return (<First 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                DepositeCost={DepositeCost}
                PropertyCost={PropertyCost}
                homeType={homeType}
                number0fPeople={number0fPeople}
            />);

        if(step === 2)
            return (<Second 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                finalSubmit = {this.finalSubmit}
                handleChange = {this.handleChange} 
                title={title}
                firstName={firstName} 
                middleName={middleName}
                lastName={lastName} 
                company={company}
                location={location}
                start={start}
                email={email}
                password1={password1}
                password2={password2}
            />);
    }
    render(){

        if (this.state.regsuccess) {
            return <Redirect to="#/login/" />;
          }

        const { step } = this.state;

        return(
            <>
                {this.showStep()}
            </>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, { register })(Register);