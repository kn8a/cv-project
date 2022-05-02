import './styles/App.css';
import React, { useState } from 'react';
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

function App2 () {

    const [personalInfo, setPersonalInfo] = useState({
        name:"", 
        lastName:'', 
        title:'',
        email:'',
        phone:'',
        website:'',
        address:'',
        about:'',
    })
    const [skills, setSkills] = useState([])
    const [hobbies, setHobbies] = useState([])
    const [languages, setLanguages] = useState([])
    const [work, setWork] = useState([])
    const [education, setEducation] = useState([])

    const handleChange = () => { //handles personal info
        setPersonalInfo({
        name:document.getElementById('name').value, 
        lastName:document.getElementById('lastName').value, 
        title:document.getElementById('title').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        website:document.getElementById('website').value,
        address:document.getElementById('address').value,
        about: document.getElementById('about').value
        })
      }
        
    const addItem = function(category) { 
        const item = {
            item: document.getElementById(category).value,
            id: uniqid(),
          }
        console.log(item);
        if (category === 'skills'){
            setSkills(state => [...skills, item]);
        }
        if (category === 'hobbies'){
            setHobbies(state => [...hobbies, item]);
        }
        if (category === 'languages'){
            setLanguages(state => [...languages, item]);
        }
        document.getElementById(category).value = '';
      };
    
    const handleDelete = (itemId, cat) => { //TODO
        if ( cat === 'skills') {
            const items = skills.filter(item => item.id !== itemId)
            setSkills(items)
        }
        if ( cat === 'hobbies') {
            const items = hobbies.filter(item => item.id !== itemId)
            setHobbies(items)
        }
        if ( cat === 'languages') {
            const items = languages.filter(item => item.id !== itemId)
            setLanguages(items)
        }
        if ( cat === 'work') {
            const items = work.filter(item => item.id !== itemId)
            setWork(items)
        }
        if ( cat === 'education') {
            const items = education.filter(item => item.id !== itemId)
            setEducation(items)
        }


      };
    
    const addWork = (event) => {
        event.preventDefault();
        const item = {
            id: uniqid(),
            title: document.getElementById('work-title').value,
            company: document.getElementById('work-company').value,
            from: document.getElementById('work-from').value, 
            to: document.getElementById('work-to').value,
            responsibilities: document.getElementById('work-responsibilities').value,
        };
        setWork(state => [...work, item]);
        document.getElementById("work-form").reset();
      }
    
    const addEdu = (event) => {
        event.preventDefault();
        const item = {
            id: uniqid(),
            specialty: document.getElementById('edu-specialty').value,
            school: document.getElementById('edu-school').value,
            from: document.getElementById('edu-from').value, 
            to: document.getElementById('edu-to').value,
            degree: document.getElementById('edu-degree').value,
        };
        setEducation(state => [...education, item]);
        document.getElementById("edu-form").reset();
      }
    
    function viewer(){
        document.getElementById('editor').style.display='none';
        document.getElementById('viewer').style.display='flex';
        document.getElementById('editor-button').style.display = 'block'
        document.getElementById('viewer-button').style.display = 'none'
    };

    const editor = () => {
        document.getElementById('viewer').style.display='none';
        document.getElementById('editor').style.display='flex';
        document.getElementById('editor-button').style.display = 'none'
        document.getElementById('viewer-button').style.display = 'block'
      }

    const loadTemplate = () => {
        setPersonalInfo({
            name:"John", 
            lastName:'Doe', 
            title:'Software Engineer',
            email:'john@doe.com',
            phone:'(123) 456-7890',
            website:'johndoecoder.com',
            address:'San Jose, CA',
            about: 'Lorem ipsum dolor sit amet. Est velit explicabo ab similique ratione eum tenetur aspernatur. Sit inventore nisi hic incidunt reprehenderit qui maxime fugiat et voluptatem magni et molestiae soluta qui accusamus suscipit et eaque sequi. Nam explicabo illo hic rerum animi et omnis velit At eius voluptatem.',
            })
        setSkills([{id:uniqid(), item: 'JavaScript'}, {id:uniqid(), item: 'React JS'}, {id:uniqid(), item: 'NPM'}, {id:uniqid(), item: 'Webpack'}])
        setHobbies([{id:uniqid(), item: 'Tennis'}, {id:uniqid(), item: 'Soccer'}, {id:uniqid(), item: 'Hiking'}, {id:uniqid(), item: 'Camping'}])
        setLanguages([{id:uniqid(), item: 'English'}, {id:uniqid(), item: 'German'}, {id:uniqid(), item: 'Spanish'}])
        setWork([{id:uniqid(), company: 'IBM', from: 'June 2015', to: 'Present', title: 'Senior Full Stack Developer', responsibilities:'Lorem ipsum dolor sit amet. Aut velit esse est odit dignissimos ea iste nostrum sit voluptatibus excepturi. Vel voluptas rerum qui dolor inventore et laudantium'},
        {id:uniqid(), company: 'Google', from: 'January 2012', to: 'April 2015', title: 'Full Stack Developer', responsibilities:'Lorem ipsum dolor sit amet. Aut velit esse est odit dignissimos ea iste nostrum sit voluptatibus excepturi. Vel voluptas rerum qui dolor inventore et laudantium'}
        ])
        setEducation([{id:uniqid(), school: 'Harvard', degree: 'Bachelor’s degree', specialty: 'Computer Science', from: '2008', to:'2012'}])
      }

    const clearInfo = () => {
        setPersonalInfo({
            name: '', 
            lastName: '', 
            title: '',
            email: '',
            phone: '',
            website: '',
            address: '',
            about: '',
        });
        setSkills([]);
        setHobbies([]);
        setLanguages([]);
        setWork([]);
        setEducation([]);
      }  

    
    const header = (<div className="header">
    <h1>CV Builder</h1>
    <div className='control-buttons'>
      <button id="load-template-button" onClick={()=>loadTemplate()}>Load Template Info</button>
      <button id="clear-info-button" onClick={()=>clearInfo()}>Clear All Info</button>
      <button id="editor-button" onClick={()=>editor()}>Back to Editor</button>
      <button id="viewer-button" onClick={()=>viewer()}>View CV</button>
    </div>
    </div>)

    const editPersonalInfo = (<form action="">
    <div className='personal'>
      <h2>Personal info</h2>
      <input onChange={()=>handleChange()}  value={personalInfo.name} id='name' placeholder='First Name'/>
      <input onChange={()=>handleChange()}  value={personalInfo.lastName} id='lastName' placeholder='Last Name'/>
      <input onChange={()=>handleChange()}  value={personalInfo.title} id='title' placeholder='Current Role'/>
      <input onChange={()=>handleChange()}  value={personalInfo.email} id='address' placeholder='City, State, Country'/>
      <input onChange={()=>handleChange()}  value={personalInfo.phone} id='phone' placeholder='Phone'/>
      <input onChange={()=>handleChange()}  value={personalInfo.website} id='email' placeholder='Email'/>
      <input onChange={()=>handleChange()}  value={personalInfo.address} id='website' placeholder='Website'/>
    </div>
    </form>)
    
    const editSkills = (<div className='skills'>
    <h2>Skills</h2>
    <List cat='skills' items={skills} onDelete={handleDelete}  />
    <div className="input">
      <input id='skills' placeholder='e.g. React'/>
      <Icon path={mdiPlusCircleOutline} size={1} color="darkcyan" onClick={() => addItem('skills')} className='add-button' /> 
    </div>
    </div>)

    const editHobbies = (<div className='skills'>
                <h2>Hobbies</h2>
                <List cat='hobbies' items={hobbies} onDelete={handleDelete}  />
                <div className="input">
                  <input id='hobbies' placeholder='e.g. Tennis'/>
                  <Icon path={mdiPlusCircleOutline} size={1} color="darkcyan" onClick={() => addItem('hobbies')} className='small-button' />
                </div>
        </div>)

    const editLanguages = (<div className='skills'>
                <h2>Languages</h2>
                <List cat='languages' items={languages} onDelete={handleDelete}  />
                <div className="input">
                  <input  id='languages' placeholder='e.g. English'/>
                  <Icon path={mdiPlusCircleOutline} size={1} color="darkcyan" onClick={() => addItem('languages')} className='add-button'/>
                </div>
        </div>)

    const editAbout = (<div className="work">
                <h2>About Me</h2>
                <hr></hr>
                <div className="workForm">
                  <textarea onChange={()=>handleChange()} value={personalInfo.about} id='about' placeholder='Write a bit about yourself'/>
                </div>
        </div>)

    const editWork = (<div className='work'>
            <h2>Work Experience</h2>
            <Work items={work} cat='work' onDelete={handleDelete} />
            <hr></hr>
            <form className='workForm' id='work-form' onSubmit={addWork}>
                <input id='work-title' placeholder='Title e.g. Software Engineer'/>
                <input id='work-company' placeholder='Company'/>
                <div>
                    <input id='work-from' placeholder='From e.g. Feb. 2008'/>
                    <input id='work-to'placeholder='To e.g. 2021/Present'/>
                </div>
                <textarea id='work-responsibilities'placeholder='Responsibilities/Achievements'/>
                <button type='submit'>Add</button>
            </form>
        </div>)

    const editEducation = (<div className='work'>
            <h2>Education</h2>
            <Edu items={education} cat='education' onDelete={handleDelete} />
            <hr></hr>
            <form className='workForm' id='edu-form' onSubmit={addEdu}>
                <input id='edu-specialty' placeholder='Specialty'/>
                <input id='edu-degree' placeholder='Degree'/>
                <input id='edu-school' placeholder='School'/>
                <div className="range">
                    <input id='edu-from' placeholder='From e.g. Feb. 2008'/>
                    <input id='edu-to' placeholder='To e.g. 2021/Present'/>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>)

    const viewPersonalInfo = (<div>
        <div className='items-view-title'>Personal Info</div>
        <div className='personal-info-view'>
          <div className='view-personal-item'>
                <Icon path={mdiCellphoneBasic} title={'phone'} size={1} color="darkcyan"/>
                <div>{personalInfo.phone}</div>
          </div>
          <div className='view-personal-item'>
                <Icon path={mdiAt} title={'email'} size={1} color="darkcyan"/>
                <div>{personalInfo.email}</div>
          </div>

          <div className='view-personal-item'>
                <Icon path={mdiWeb} title={'website'} size={1} color="darkcyan"/>
                <div>{personalInfo.website}</div>
          </div>
          <div className='view-personal-item'>
                <Icon path={mdiMapMarkerOutline} title={'location'} size={1} color="darkcyan"/>
                <div>{personalInfo.address}</div>
          </div>
        </div>
      </div>)

      return (
        <div className="app">
          {header}
          <div id='editor' className='main'>
            <div className="left">
              {editPersonalInfo}
              {editSkills}
              {editHobbies}
              {editLanguages}
            </div>
            <div className='right'>
              {editAbout}
              {editWork}
              {editEducation}
            </div>
          </div>
          <div id='viewer' className='main'>
            <div className='left'>
              <div className='left-top'>
                <img src='https://dummyimage.com/150x150.png' alt=''></img>
                <div className='view-name'>{personalInfo.name}</div>
                <div className='view-last-name'>{personalInfo.lastName}</div>
                <div className='view-title'>{personalInfo.title}</div>
              </div>
              <div className='left-bottom'>
                {viewPersonalInfo}
                <ListView secTitle='Skills' items={skills}/>
                <ListView secTitle='Languages' items={languages}/>
                <ListView secTitle='Hobbies' items={hobbies}/>
              </div>
            </div>
            <div className='right-viewer'>
              <div>
                <div className='view-right-title'>
                  <Icon path={mdiCommentAccountOutline} horizontal title={'location'} size={2} color="darkcyan" />
                  <div className='view-right-title-text'>About Me</div>
                </div>
                <p id='view-about'>{personalInfo.about}</p>
              </div>
              <div>
                <div className='view-right-title'>
                  <Icon path={mdiBriefcaseCheckOutline} title={'location'} size={2} color="darkcyan" />
                  <div className='view-right-title-text'>Work Experience</div>
                </div>
                <WorkView items={work}/>
              </div>
              <div>
                <div className='view-right-title'>
                  <Icon path={mdiSchoolOutline} title={'location'} size={2} color="darkcyan" />
                  <div className='view-right-title-text'>Education</div>
                  <hr></hr>
                </div>
                <EduView items={education}/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default App2;