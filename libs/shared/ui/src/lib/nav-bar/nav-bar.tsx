/* eslint-disable-next-line */
export interface NavBarProps {}

const menus = [
  'SKINCARE',
  'MAKE UP',
  'BODY',
  'HAIR',
  'FRAGRANCE',
  'NAILS',
  'TOOLS',
  'BRANDS',
];

export function NavBar(props: NavBarProps) {
  return (
    <div className="bg-white flex gap-x-6 justify-center items-center border-t-2 border-b-2 border-gray-200 py-3">
      {menus.map((menu) => (
        <a key={menu} href="#" className="text-xs font-semibold text-gray-800">
          {menu}
        </a>
      ))}
    </div>
  );
}

export default NavBar;
