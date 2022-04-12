import React, {Component} from 'react';
import '../styles/list.css'
import Icon from '@mdi/react'
import { mdiTrashCanOutline } from '@mdi/js';
import '../styles/work.css'


class Edu extends Component {
  constructor(props) {
    super(props);
    }



  render(){

    const items = this.props.items;
    console.log(items);
    return (
      <div className='itemList'>
        <ul>
            {items.map((item) => {
                return (
                
                    <li id={item.id} key={item.id}>
                    
                        <div className="list-item">
                            
                            <div class="work-list">
                                <div>{item.specialty}</div>
                                <div>{item.degree}</div>
                                <div>{item.school}</div>
                                <div>from {item.from} to {item.to}</div>
                                
                            </div>
                            
                            
                            <Icon path={mdiTrashCanOutline}
                                title={'Delete'}
                                size={1}
                                color="firebrick"
                                onClick={() => this.props.onDelete(item.id, this.props.cat)}
                                />
                        </div>
                    
                    </li>
                
                )
            })}
        </ul>
      </div>
    );
  }
}

export default Edu;