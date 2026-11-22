import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { MapContainer } from './components/MapContainer';
import { TimelineScrubber } from './components/TimelineScrubber';
import { WaypointDrawer } from './components/WaypointDrawer';
import { KingdomModal } from './components/KingdomModal';
import { StoryReaderModal } from './components/StoryReaderModal';
import { AboutModal } from './components/AboutModal';
import { journeyWaypoints } from './data/journeyWaypoints';
import { Waypoint, AncientKingdom } from './types';
import { sacredDrone } from './utils/audioSynth';

export const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedWaypoint, setSelectedWaypoint] = useState<Waypoint | null>(journeyWaypoints[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
  const [selectedKingdom, setSelectedKingdom] = useState<AncientKingdom | null>(null);

  // Layer Visibility
  const [showAncientKingdoms, setShowAncientKingdoms] = useState<boolean>(true);
  const [showModernBoundaries, setShowModernBoundaries] = useState<boolean>(true);
  const [showRoutes, setShowRoutes] = useState<boolean>(true);

  // Filter & Search
  const [activeKandaFilter, setActiveKandaFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isStoryReaderOpen, setIsStoryReaderOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  // Playback & Audio
  const [isPlayingTour, setIsPlayingTour] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Search Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return journeyWaypoints.filter((wp) => 
      wp.ancientName.toLowerCase().includes(q) ||
      wp.sanskritName.toLowerCase().includes(q) ||
      wp.title.toLowerCase().includes(q) ||
      wp.modernLocation.toLowerCase().includes(q) ||
      wp.modernStateOrCountry.toLowerCase().includes(q) ||
      wp.charactersInvolved.some(c => c.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Handle Waypoint Selection
  const handleSelectWaypoint = useCallback((wp: Waypoint) => {
    const idx = journeyWaypoints.findIndex(w => w.id === wp.id);
    if (idx !== -1) {
      setCurrentIndex(idx);
    }
    setSelectedWaypoint(wp);
    setIsDrawerOpen(true);
  }, []);

  // Handle Index Selection from Scrubber
  const handleSelectIndex = useCallback((idx: number) => {
    setCurrentIndex(idx);
    setSelectedWaypoint(journeyWaypoints[idx]);
    setIsDrawerOpen(true);
  }, []);

  // Next / Previous Waypoint
  const handleNextWaypoint = useCallback(() => {
    const nextIdx = (currentIndex + 1) % journeyWaypoints.length;
    handleSelectIndex(nextIdx);
  }, [currentIndex, handleSelectIndex]);

  const handlePrevWaypoint = useCallback(() => {
    const prevIdx = (currentIndex - 1 + journeyWaypoints.length) % journeyWaypoints.length;
    handleSelectIndex(prevIdx);
  }, [currentIndex, handleSelectIndex]);

  // Auto Tour Timer
  useEffect(() => {
    if (!isPlayingTour) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % journeyWaypoints.length;
        setSelectedWaypoint(journeyWaypoints[next]);
        return next;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlayingTour]);

  // Audio Toggle
  const handleToggleAudio = () => {
    const newState = sacredDrone.toggle();
    setIsPlayingAudio(newState);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#0c0f17] text-slate-100 font-sans">
      {/* Top Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showAncientKingdoms={showAncientKingdoms}
        setShowAncientKingdoms={setShowAncientKingdoms}
        showModernBoundaries={showModernBoundaries}
        setShowModernBoundaries={setShowModernBoundaries}
        showRoutes={showRoutes}
        setShowRoutes={setShowRoutes}
        onOpenStoryReader={() => setIsStoryReaderOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
        searchResults={searchResults}
        onSelectWaypoint={handleSelectWaypoint}
      />

      {/* Main Map View Area */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <MapContainer
          selectedWaypoint={selectedWaypoint}
          onSelectWaypoint={handleSelectWaypoint}
          onSelectKingdom={(k) => setSelectedKingdom(k)}
          showAncientKingdoms={showAncientKingdoms}
          showModernBoundaries={showModernBoundaries}
          showRoutes={showRoutes}
          activeKandaFilter={activeKandaFilter}
          allWaypoints={journeyWaypoints}
        />

        {/* Sliding Waypoint Drawer */}
        {isDrawerOpen && (
          <WaypointDrawer
            waypoint={selectedWaypoint}
            onClose={() => setIsDrawerOpen(false)}
            onNext={handleNextWaypoint}
            onPrev={handlePrevWaypoint}
          />
        )}
      </main>

      {/* Bottom Timeline & Controls */}
      <TimelineScrubber
        waypoints={journeyWaypoints}
        currentIndex={currentIndex}
        onSelectIndex={handleSelectIndex}
        isPlayingTour={isPlayingTour}
        onTogglePlayTour={() => setIsPlayingTour(!isPlayingTour)}
        activeKandaFilter={activeKandaFilter}
        onFilterKanda={setActiveKandaFilter}
      />

      {/* Modals */}
      <KingdomModal
        kingdom={selectedKingdom}
        onClose={() => setSelectedKingdom(null)}
      />

      <StoryReaderModal
        isOpen={isStoryReaderOpen}
        onClose={() => setIsStoryReaderOpen(false)}
        waypoints={journeyWaypoints}
        onSelectWaypointOnMap={handleSelectWaypoint}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
};
