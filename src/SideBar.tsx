import { FaFireAlt } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { FaPlayCircle } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import { TiMediaPlayReverse } from 'react-icons/ti';

const SideBarIcon = ({
  icon,
  text = 'tooltip 💡',
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip flex group-hover:scale-100">
        <TiMediaPlayReverse
          className="absolute bottom-[0px] left-[-15px] text-gray-700"
          size="35"
        />
        {text}
      </span>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="left-0 top-0 m-0 flex h-screen w-16 flex-col bg-gray-700 text-white shadow-md p-2">
      <SideBarIcon icon={<FaFireAlt size="30" />} text="Tooltip 💡" />
      <SideBarIcon icon={<GoHomeFill size="30" />} text="Tooltip 💡" />
      <SideBarIcon icon={<FaPlayCircle size="30" />} text="Tooltip 💡" />
      <SideBarIcon icon={<FaCirclePlus size="30" />} text="Tooltip 💡" />
    </div>
  );
};

export default SideBar;
