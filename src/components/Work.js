import React, {Component} from 'react';
import '../styles/list.css'
import Icon from '@mdi/react'
import { mdiTrashCanOutline } from '@mdi/js';
import '../styles/work.css'

class Work extends Component {
  constructor(props) {
    super(props);
    }

  render(){
    const items = this.props.items;
    return (
      <div className='itemList'>
        <ul>
            {items.map((item) => {
                return (
                    <li id={item.id} key={item.id}>
                        <div className="list-item">
                            <div className="work-list">
                                <div>{item.title}</div>
                                <div>{item.company}</div>
                                <div>from {item.from} to {item.to}</div>
                                <div>{item.responsibilities}</div>
                            </div>
                            <Icon path={mdiTrashCanOutline}
                                title={'Delete'}
                                size={2}
                                color="firebrick"
                                className='small-button'
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

export default Work;