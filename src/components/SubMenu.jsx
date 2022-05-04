import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import '../index.css';

const SubMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div className={open ? 'menu-item open' : 'menu-item'}>
        <div className='menu-title'>
          <span>{item.title}</span>
          <AiIcons.AiOutlineDown
            className='toggle-btn'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='menu-content'>
          {item.children.map((child, index) => (
            <SubMenu key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || '#'} className='menu-item plain'>
        {item.title}
      </Link>
    );
  }
};

export default SubMenu;

/*


<Link
        className="flex text-black font-bold justify-between items-center p-5 h-16 no-underline text-lg hover:bg-gray-900 cursor-pointer"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <label className="ml-16">{item.title}</label>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, id) => {
          return (
            <Link
              className="bg-gray-700 h-16 pl-12 flex items-center no-underline text-gray-200 text-lg hover:bg-purple-700 cursor-pointer"
              to={item.path}
              key={id}
            >
              <label>{item.title}</label>
            </Link>
          );
        })}




*/
