import { ChatIcon, MenuIcon, UserIcon } from '@heroicons/react/outline';

/* eslint-disable-next-line */
export interface PopularGroupCardProps {
  image: string;
  name: string;
  description: string;
}

export function PopularGroupCard(props: PopularGroupCardProps) {
  return (
    <div className="w-full shadow-md rounded-md border border-gray-200 py-2.5 px-5 flex flex-col items-center justify-center">
      <img
        src={props.image}
        alt={props.name}
        className="w-32 h-32 rounded-full object-cover object-center mb-3.5"
      />
      <div className="text-base font-bold mb-9">{props.name}</div>
      <div className="w-full flex justify-around items-center mb-2.5">
        <button>
          <UserIcon className="w-4 h-4" />
        </button>
        <button>
          <MenuIcon className="w-4 h-4" />
        </button>
        <button>
          <ChatIcon className="w-4 h-4" />
        </button>
      </div>
      <span className="text-sm">{props.description}</span>
    </div>
  );
}

export default PopularGroupCard;
