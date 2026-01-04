import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { GallerySection } from './components/sections/GallerySection';
import { LocationsSection } from './components/sections/LocationsSection';
import { InfoSection } from './components/sections/InfoSection';
import { RSVPSection } from './components/sections/RSVPSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <LocationsSection />
      <InfoSection />
      <RSVPSection />
    </Layout>
  );
}

export default App;
