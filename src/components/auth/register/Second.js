import React, { Component } from 'react';

class Second extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = e => {
        e.preventDefault();
        this.props.finalSubmit();
    }


    render(){
        const { 
            firstName, 
            middleName, 
            lastName, 
            title, 
            company, 
            start, 
            location, 
            handleChange, 
            email, 
            password1, 
            password2 } = this.props;
        return(
            <>
             <div className="container-fluid">
             <div className="row">
                <div className=" login-section-wrapper">
                    <div className="login-wrapper my-auto">
                    <h1 className="login-title">Personal Information</h1>
                    <form className="login-form">
                    
                    <div className="form-group">
                        <label>Job Title:&nbsp;&nbsp;</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange('title')}
                        />
                    </div><br />

                    <div className="form-group">
                    <label>Company:&nbsp;&nbsp;</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="company"
                            value={company}
                            onChange={handleChange('company')}
                        />
                    </div><br />

                    <div className="form-group">
                    <label>Start Date:&nbsp;&nbsp;</label>
                    <input className="form-control" type="date" id="start" name="start"
                        min="2017-04-01" max="2020-07-28"
                        value={start} onChange={handleChange('start')} />
                    <span class="validity"></span>
                    </div><br />

                    <div className="form-group">
                    <label>Location:&nbsp;&nbsp;</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="location"
                        value={location}
                        onChange={handleChange('location')}
                    />
                    </div><br />

                    <div className="form-group">
                    <label>First Name:&nbsp;&nbsp;</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange('firstName')}
                    />
                    </div><br />

                    <div className="form-group">
                    <label>Middle Name:&nbsp;&nbsp;</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="middleName"
                        value={middleName}
                        onChange={handleChange('middleName')}
                    />
                    </div><br />

                    <div className="form-group">
                    <label>Last Name:&nbsp;&nbsp;</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange('lastName')}
                    />
                    </div><br />

                    <div className="form-group">
                    <label>Email:&nbsp;&nbsp;</label>
                    <input 
                        className="form-control"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange('email')}
                    />
                    </div><br />

                    <div className="form-group">
                    <label>Password:&nbsp;&nbsp;</label>
                    <input 
                        className="form-control"
                        type="password"
                        name="password1"
                        value={password1}
                        onChange={handleChange('password1')}
                    />
                    </div><br />

                    <div className="form-group">
                    <label>Password*:&nbsp;</label>
                    <input 
                        className="form-control"
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={handleChange('password2')}
                        placeholder="Confirm above password"
                    />
                    </div><br />

                    <button className="Back" onClick={this.back}>
                        BACK
                    </button>
                    <button className="Submit" onClick={this.submit}>
                        SUBMIT
                    </button>
                    </form>
                    </div>
                    </div>
                    </div>
                </div>
                <br />
                
            </>
        );
    }
}

export default Second;