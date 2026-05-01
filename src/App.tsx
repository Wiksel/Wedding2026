import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { LocationsSection } from './components/sections/LocationsSection';
import { InfoSection } from './components/sections/InfoSection';
import { BusSchedule } from './components/sections/BusSchedule';
import { RSVPSection } from './components/sections/RSVPSection';
import { PasswordGateway } from './components/auth/PasswordGateway';

function App() {
  return (
    <PasswordGateway>
      <Layout>
        <HeroSection />
        <RSVPSection />
        <LocationsSection />
        <InfoSection />
        <TimelineSection />
        <BusSchedule />
      </Layout>
    </PasswordGateway>
  );
}

export default App;
