import React, {Component} from 'react';
import '../styles/list.css'
import Icon from '@mdi/react'
import { mdiTrashCanOutline } from '@mdi/js';


class List extends Component {
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
                            {item.item}
                            <Icon path={mdiTrashCanOutline}
                                title={'Delete '+item.item}
                                size={1}
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

export default List;