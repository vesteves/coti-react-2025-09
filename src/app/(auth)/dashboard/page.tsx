'use client';

import CardTotal from '@/components/atoms/CardTotal';
import CardInfo from '@/components/molecules/CardInfo';
import { useMenu } from '@/contexts/MenuContext';

const DashboardPage = () => {
  const { toggleMenu } = useMenu();
  return (
    <main>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardTotal />
        <CardTotal />
        <CardTotal />
        <CardTotal />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CardInfo toggleMenu={toggleMenu} />
        <CardInfo toggleMenu={toggleMenu} />
      </div>
    </main>
  );
};

export default DashboardPage;
