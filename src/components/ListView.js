import React, {Component} from 'react';
import '../styles/itemView.css'


class ListView extends Component {
  constructor(props) {
    super(props);
    }


  render(){
    const items = this.props.items;
    return (
      <div className='itemList-view'>
          <div className='items-view-title'>{this.props.secTitle}</div>
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
}

export default ListView;