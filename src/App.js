
import './styles/App.css';
import React, {Component} from 'react';
import uniqid from "uniqid";
import List from './components/List'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js';
import Work from './components/Work';
import Edu from './components/Edu';


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

  handleChange = () => { //handles personal info
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

  addWork = (event) => {
      event.preventDefault();
      console.log(event);
      const item = {
        id: uniqid(),
        title: document.getElementById('work-title').value,
        company: document.getElementById('work-company').value,
        from: document.getElementById('work-from').value, 
        to: document.getElementById('work-to').value,
        responsibilities: document.getElementById('work-responsibilities').value,
      }
      this.setState({
        work: this.state.work.concat(item)
      })
      document.getElementById("work-form").reset();
    }
  

    addEdu = (event) => {
      event.preventDefault();
      console.log(event);
      const item = {
        id: uniqid(),
        specialty: document.getElementById('edu-specialty').value,
        school: document.getElementById('edu-school').value,
        from: document.getElementById('edu-from').value, 
        to: document.getElementById('edu-to').value,
        degree: document.getElementById('edu-degree').value,
      }
      this.setState({
        education: this.state.education.concat(item)
      })
      document.getElementById("edu-form").reset();
    }

    
  render() {
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
              <Work cat='work' onDelete={this.handleDelete} items={this.state.work}/>
              <hr></hr>
              <form className='workForm' id='work-form' onSubmit={this.addWork}>
                <input id='work-title' placeholder='Title e.g. Software Engineer'/>
                <input id='work-company' placeholder='Company'/>
                <div>
                  <input id='work-from' placeholder='From e.g. Feb. 2008'/>
                  <input id='work-to'placeholder='To e.g. 2021/Present'/>
                </div>
                <textarea id='work-responsibilities'placeholder='Responsibilities/Achievements'/>
                <button type='submit'>Add</button>
              </form>
            </div>
            <div className='work'>
              <h2>Education</h2>
              <Edu cat='education' onDelete={this.handleDelete} items={this.state.education}/>
              <hr></hr>
              <form className='workForm' id='edu-form' onSubmit={this.addEdu}>
                <input id='edu-specialty' placeholder='Specialty'/>
                <input id='edu-degree' placeholder='Degree'/>
                <input id='edu-school' placeholder='School'/>
                <div className="range">
                  <input id='edu-from' placeholder='From e.g. Feb. 2008'/>
                  <input id='edu-to' placeholder='To e.g. 2021/Present'/>
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