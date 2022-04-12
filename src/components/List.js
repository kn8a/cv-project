import React, {Component} from 'react';
import '../styles/list.css'

class List extends Component {
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
                    
                        <div class="list-item">
                            {item.item}
                            <button className='remove-list-item' data-taskId={item.id}>X</button>
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