
import './styles/App.css';
import React, {Component} from 'react';
import uniqid from "uniqid";
import List from './components/List'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: { //personal info object
        name:"", 
        lastName:'', 
        title:'',
        email:'',
        phone:'',
        website:'',
        address:'',
      },
      about: '', //done
      skills: [], //done
      hobbies: [], //done
      languages: [], //done
      education: [],
      work:[],
    }
  }

  handleChange = (e) => { //handles personal info
    this.setState({
      personalInfo: {
        name:document.getElementById('name').value, 
        lastName:document.getElementById('lastName').value, 
        title:document.getElementById('title').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        website:document.getElementById('website').value,
        address:document.getElementById('address').value,
      },
      about: document.getElementById('about').value
    })
  }

  addItem = function(category) { //adds item to skills/hobbies/languages
    const item = {
      item: document.getElementById(category).value,
      id: uniqid(),
    }
    this.setState({
      [category]: this.state[category].concat(item)
    })
    document.getElementById(category).value = '';
  };

  handleDelete = (itemId, cat) => {
    const items = this.state[cat].filter(item => item.id !== itemId);
    this.setState({ [cat]: items });
  };
    
  render(){
    return (
      <div className="app">
        <div className='main'>
          <div className="left">
            <form action="">
              <div className='personal'>
                <h2>Personal info</h2>
                <input onChange={this.handleChange} value={this.state.personalInfo.name} id='name' placeholder='First Name'/>
                <input onChange={this.handleChange} value={this.state.personalInfo.lastName} id='lastName' placeholder='Last Name'/>
                <input onChange={this.handleChange} value={this.state.personalInfo.title} id='title' placeholder='Current Role'/>
                <input onChange={this.handleChange} value={this.state.personalInfo.address} id='address' placeholder='City, State, Country'/>
                <input onChange={this.handleChange} value={this.state.personalInfo.phone} id='phone' placeholder='Phone'/>
                <input onChange={this.handleChange} value={this.state.personalInfo.email} id='email' placeholder='Email'/>
                <input onChange={this.handleChange} value={this.state.personalInfo.website} id='website' placeholder='Website'/>
              </div>
            </form>
            <div className='skills'>
              <h2>Skills</h2>
              <List cat='skills' onDelete={this.handleDelete} items={this.state.skills} />
              <div class="input">
                <input id='skills' placeholder='e.g. React'/>
                <Icon path={mdiPlusCircleOutline}
                                    size={1}
                                    color="darkcyan"
                                    onClick={() => this.addItem('skills')}
                                    className='add-button'
                                    />
                
              </div>
            </div>
            <div className='skills'>
              <h2>Hobbies</h2>
              <List cat='hobbies' onDelete={this.handleDelete} items={this.state.hobbies} />
              <div class="input">
                <input id='hobbies' placeholder='e.g. Tennis'/>
                <Icon path={mdiPlusCircleOutline}
                                  size={1}
                                  color="darkcyan"
                                  onClick={() => this.addItem('hobbies')}
                                  className='add-button'
                                  />
              </div>
              

            </div>
            <div className='skills'>
              <h2>Languages</h2>
              <List cat='languages' onDelete={this.handleDelete} items={this.state.languages} />
              <div className="input">
                <input  id='languages' placeholder='e.g. English'/>
                <Icon path={mdiPlusCircleOutline}
                                    size={1}
                                    color="darkcyan"
                                    onClick={() => this.addItem('languages')}
                                    className='add-button'
                                    />
              </div>
            </div>
          </div>
          <div className='right'>
            <div className="work">
              <h2>About Me</h2>
              <hr></hr>
              <div className="workForm">
                <textarea onChange={this.handleChange} value={this.state.about} id='about' placeholder='Write a bit about yourself'/>
              </div>
            </div>
            <div className='work'>
              <h2>Work Experience</h2>
              <hr></hr>
              <form className='workForm'>
                <input placeholder='Title e.g. Software Engineer'/>
                <input placeholder='Company'/>
                <div>
                  <input placeholder='From e.g. Feb. 2008'/>
                  <input placeholder='To e.g. 2021/Present'/>
                </div>
                <textarea placeholder='Responsibilities/Achievements'/>
                <button  type='submit'>Add</button>
              </form>
            </div>
            <div className='work'>
              <h2>Education</h2>
              <hr></hr>
              <form className='workForm'>
                <input placeholder='Specialty'/>
                <input placeholder='Degree'/>
                <input placeholder='School'/>
                <div className="range">
                  <input placeholder='From e.g. Feb. 2008'/>
                  <input placeholder='To e.g. 2021/Present'/>
                </div>
                <button type='submit'>Add</button>
              </form>
            </div>
          </div>
        
        </div>
        <div className='main'>
          <div className='left'>
            <h1>{this.state.personalInfo.name} {this.state.personalInfo.lastName}</h1>
            <h2>{this.state.personalInfo.title}</h2>
            <p>{this.state.about}</p>
          </div>
          <div className='right'></div>

        </div>
      </div>
    );
  }
}

export default App;