
import './styles/App.css';
import React, {Component} from 'react';
import uniqid from "uniqid";
import List from './components/List'
import Icon from '@mdi/react'
import { 
  mdiPlusCircleOutline, 
  mdiCellphoneBasic, 
  mdiAt, 
  mdiWeb, 
  mdiMapMarkerOutline, 
  mdiCommentAccountOutline, //user icon
  mdiSchoolOutline, //education
  mdiBriefcaseCheckOutline, //work
  mdiTennis, //tennis

} from '@mdi/js';
import Work from './components/Work';
import Edu from './components/Edu';
import ListView from './components/ListView';
import WorkView from './components/WorkView';
import EduView from './components/EduView';


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

  loadInfo = () => {
    this.setState({
      personalInfo: { //personal info object
        name:"John", 
        lastName:'Doe', 
        title:'Web Developer',
        email:'johndoe@email.com',
        phone:'(123) 456-7890',
        website:'johndoedevelopment.com',
        address:'San Jose, CA',
      },
      about: 'Derivative Works in Source or Object form, that is to exercise the rights and limitations under the terms of any change; and (c) If You created one or more of the Derived Program shall be reformed only to the extent necessary to use, reproduce, display, perform, sublicense and distribute the Larger Work as permitted above, be liable to you for damages, including any general, special, incidental or consequential damages of any component so that it is the initial grant or subsequently acquired, any and all other entities that control, are controlled by, or is derived from the new version.', //done
      skills: [], //done
      hobbies: [], //done
      languages: [], //done
      education: [],
      work:[],
    })
  }  

  viewer = () => {
    document.getElementById('editor').style.display='none';
    document.getElementById('viewer').style.display='flex';
    document.getElementById('editor-button').style.display = 'block'
    document.getElementById('viewer-button').style.display = 'none'

  }

  editor = () => {
    document.getElementById('viewer').style.display='none';
    document.getElementById('editor').style.display='flex';
    document.getElementById('editor-button').style.display = 'none'
    document.getElementById('viewer-button').style.display = 'block'
  }
    
  render() {
    return (
      <div className="app">
        			<div className="header">
          <h1>CV Builder</h1>
          <div className='control-buttons'>
            <button id="editor-button" onClick={this.editor}>Editor</button>
            <button id="viewer-button" onClick={this.viewer}>View CV</button>
          </div>
        </div>

        <div id='editor' className='main'>
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
              <div className="input">
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
              <div className="input">
                <input id='hobbies' placeholder='e.g. Tennis'/>
                <Icon path={mdiPlusCircleOutline}
                                  size={1}
                                  color="darkcyan"
                                  onClick={() => this.addItem('hobbies')}
                                  className='small-button'
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
        <div id='viewer' className='main'>
          <div className='left'>
            <div className='left-top'>
              <img src='https://dummyimage.com/150x150.png' alt=''/>
              <div className='view-name'>{this.state.personalInfo.name}</div>
              <div className='view-last-name'>{this.state.personalInfo.lastName}</div>
              <div className='view-title'>{this.state.personalInfo.title}</div>
            </div>

            <div className='left-bottom'>
              <div>
                <div className='items-view-title'>Personal Info</div>
                <div className='personal-info-view'>
                  
                  <div className='view-personal-item'><Icon path={mdiCellphoneBasic}
                                title={'phone'}
                                size={1}
                                color="darkcyan"
                                />
                        <div>{this.state.personalInfo.phone}</div>
                  </div>
                  <div className='view-personal-item'><Icon path={mdiAt}
                                title={'email'}
                                size={1}
                                color="darkcyan"
                                />
                        <div>{this.state.personalInfo.email}</div>
                  </div>

                  <div className='view-personal-item'><Icon path={mdiWeb}
                                title={'website'}
                                size={1}
                                color="darkcyan"
                                />
                        <div>{this.state.personalInfo.website}</div>
                  </div>
                  <div className='view-personal-item'><Icon path={mdiMapMarkerOutline}
                                title={'location'}
                                size={1}
                                color="darkcyan"
                                />
                        <div>{this.state.personalInfo.address}</div>
                  </div>

                </div>
              </div>
              <ListView secTitle='Skills' items={this.state.skills}/>
              <ListView secTitle='Languages' items={this.state.languages}/>
            </div>
          </div>
          <div className='right-viewer'>
            <div>
              <div className='view-right-title'>
                <Icon path={mdiCommentAccountOutline}
                                  horizontal
                                  title={'location'}
                                  size={2}
                                  color="darkcyan"
                                  />
                <div className='view-right-title-text'>About Me</div>
              </div>
              <p id='view-about'>{this.state.about}</p>
            </div>
            <div>
              <div className='view-right-title'>
                <Icon path={mdiBriefcaseCheckOutline}
                                  title={'location'}
                                  size={2}
                                  color="darkcyan"
                                  />
                <div className='view-right-title-text'>Work Experience</div>
              
              </div>
              <WorkView items={this.state.work}/>
            </div>
            <div>
              <div className='view-right-title'>
                <Icon path={mdiSchoolOutline}
                                  title={'location'}
                                  size={2}
                                  color="darkcyan"
                                  />
                <div className='view-right-title-text'>Education</div>
                <hr></hr>
              </div>
              <EduView items={this.state.education}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;