'use client';

import Link from 'next/link';
import { menuItems } from './menuItems';

const Menu = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="flex flex-col gap-2 border-b p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PP</span>
          </div>
          <span className="font-semibold">Pousada Parnaioca</span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-4 h-screen">
        <ul className="flex w-full min-w-0 flex-col gap-1">
          {menuItems.map((item) => {
            return (
              <Link key={item.label} href={item.path}>
                <li className="flex items-center gap-2 cursor-pointer">
                  <div>{item.icon}</div>
                  <span>{item.label}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
