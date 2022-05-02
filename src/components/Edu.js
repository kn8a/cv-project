import React from 'react';
import '../styles/list.css'
import Icon from '@mdi/react'
import { mdiTrashCanOutline } from '@mdi/js';
import '../styles/work.css'

function Edu(props) {
  const items = props.items;
    return (
      <div className='itemList'>
        <ul>
            {items.map((item) => {
                return (
                    <li id={item.id} key={item.id}>
                        <div className="list-item">
                            <div className="work-list">
                                <div>{item.specialty}</div>
                                <div>{item.degree}</div>
                                <div>{item.school}</div>
                                <div>from {item.from} to {item.to}</div> 
                            </div>
                            <Icon path={mdiTrashCanOutline}
                                title={'Delete'}
                                size={1}
                                color="firebrick"
                                className='small-button'
                                onClick={() => props.onDelete(item.id, props.cat)}
                                />
                        </div>
                    </li>
                )
            })}
        </ul>
      </div>
    );
}

export default Edu;