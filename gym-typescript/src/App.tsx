import Navbar from '@/scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from './shared/types';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <h1 className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </h1>
  );
}
//
