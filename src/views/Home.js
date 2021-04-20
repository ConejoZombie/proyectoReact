import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {

  state = {
    persons: []
  }

  async componentDidMount() {
    const res = await axios.get('https://fakerapi.it/api/v1/persons');
    this.setState({ persons: res.data.data });
    console.log(this.state.persons);

  }

  render() {


    return (

      <div className="row  justify-content-center align-items-center">
        <div>
          
          <div className="col-md-12">
            <ul className="list-group">
              {
                this.state.persons.map(person => (
                  // <li className="list-group-item list-group-item-action" >
                  //   {person.firstname}
                  // </li> 

                  <div className="card mb-3" key={person.email} >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={person.image} alt="..." style={{width: 500, height: 200}}/>
                      </div>

                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{person.firstname}</h5>
                          <p className="card-text">
                            {person.lastname}
                          </p>
                          <p className="card-text"><small class="text-muted">{person.email}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )


                )
              }
            </ul>

          </div>
         
        </div>
      </div>

    );
  }
}


export default Home;