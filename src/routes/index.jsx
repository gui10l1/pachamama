import { Routes as RoutesDOM, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Members } from '../pages/Members';
import { Seminar } from '../pages/Seminar';
import { BecomeMember } from '../pages/BecomeMember';
import { WhoWeAre } from '../pages/WhoWeAre';
import { Magazines } from '../pages/Magazines';
import { InConstruction } from '../pages/InConstruction';
import { Colloquies } from '../pages/Colloquies';

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/members" element={<Members />}/>
      <Route path="/seminars" element={<Seminar />}/>
      <Route path="/become-member" element={<BecomeMember />}/>
      <Route path="/who-we-are" element={<WhoWeAre />}/>
      <Route path="/magazines" element={<Magazines />}/>
      <Route path="/in-construction" element={<InConstruction />}/>
      <Route path="/colloquies" element={<Colloquies />}/>
    </RoutesDOM>
  );
}