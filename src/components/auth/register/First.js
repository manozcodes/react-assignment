import React, { Component } from 'react';

class First extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { 
                PropertyCost, 
                DepositeCost, 
                handleChange 
              } = this.props;

        return(
            <>
            <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 login-section-wrapper">
                    <div className="login-wrapper my-auto">
                    <h1 className="login-title">Basic Information</h1>

                    <form className="login-form">
                    
                    <div className="form-group">
                      <label for="home">Home</label><br />
                      <select className="form-control" onChange={handleChange('homeType')}>
                          <option value="1" name="homeType">1 floor</option>
                          <option value="2" name="homeType">2 floor</option>
                          <option value="3" name="homeType">3 floor</option>
                      </select><br /><br />
                    </div>

                        <div className="form-group">
                          <label>Number of people</label><br />
                          <input type="radio" value="1" name="number0fPeople" 
                            onChange={handleChange('number0fPeople')}/>
                          <label for="1">&nbsp;&nbsp;1</label><br />
                          <input type="radio" value="2" name="number0fPeople" 
                            onChange={handleChange('number0fPeople')}/>
                          <label for="2">&nbsp;&nbsp;2</label><br />
                          <input type="radio" value="3" name="number0fPeople" 
                            onChange={handleChange('number0fPeople')}/>
                          <label for="3">&nbsp;&nbsp;3</label><br /><br />
                        </div>

                        <div className="form-group">
                          <label>Property cost:</label><br />
                          <input id="propertycost" className="form-control" type="number" name="PropertyCost" 
                            value={PropertyCost} onChange={handleChange('PropertyCost')}/>
                        </div><br />

                        <div className="form-group">
                          <label>Deposite cost:</label><br />
                          <input className="form-control" type="number" name="DepositeCost" 
                            value={DepositeCost} onChange={handleChange('DepositeCost')}/>
                        </div><br />
                        
                        <button className="Next" onClick={this.continue}>
                            NEXT
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
        );
    }
}

export default First;