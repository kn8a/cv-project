import React from 'react';
import '../styles/itemView.css'


function ListView(props) {
  const items = props.items;
    return (
      <div className='itemList-view'>
          <div className='items-view-title'>{props.secTitle}</div>
        <ul>
            {items.map((item) => {
                return (
                    <li id={item.id} key={item.id}>
                        <div className="view-list-item">
                            {item.item}
                        </div>
                    </li>
                )
            })}
        </ul>
      </div>
    );
}


export default ListView;