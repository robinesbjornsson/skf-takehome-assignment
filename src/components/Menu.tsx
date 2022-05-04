import SubMenu from './SubMenu';
import { DataNode } from '../interfaces';

type MenuProps = {
  data: DataNode[];
};

const Sidebar = (props: MenuProps) => {
  
  return (
    <>
      <div className='w-250 bg-gray-800 flex-shrink-0 h-full overflow-auto'>
        {props.data.map((item, index) => (
          <SubMenu key={index} item={item}  />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
