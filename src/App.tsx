import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { StorySection } from './components/sections/StorySection';
import { LocationsSection } from './components/sections/LocationsSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { RSVPSection } from './components/sections/RSVPSection';
import './App.css';

function App() {
  return (
    <Layout>
      <HeroSection />
      <StorySection />
      <LocationsSection />
      <TimelineSection />
      <RSVPSection />
    </Layout>
  );
}

export default App;
