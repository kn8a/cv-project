import React, {Component} from 'react';
import '../styles/workView.css';

class EduView extends Component {
  constructor(props) {
    super(props);
    }

  render(){
    const items = this.props.items;
    return (
      <div className='work-view-itemList'>
        <ul>
            {items.map((item) => {
                return (
                    <li id={item.id} key={item.id}>
                        <div className="work-view-item">
                            <div className='company-date'>
                              <div className='item-view-company'>{item.school}</div>
                              <div className='item-view-date'>{item.from} - {item.to}</div>
                            </div>
                              <div className='item-view-title'>{item.specialty}</div>   
                              <div className='item-view-responsibility'>{item.degree}</div>
                          </div>
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}

export default EduView;