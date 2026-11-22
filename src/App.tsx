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
import { BookOpen, Sparkles, ChevronUp, Headphones } from 'lucide-react';

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
    }, 7000);

    return () => clearInterval(timer);
  }, [isPlayingTour]);

  // Audio Toggle
  const handleToggleAudio = () => {
    const newState = sacredDrone.toggle();
    setIsPlayingAudio(newState);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#080b12] text-slate-100 font-sans">
      {/* Top Navigation Bar */}
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
        {isDrawerOpen && selectedWaypoint && (
          <WaypointDrawer
            waypoint={selectedWaypoint}
            onClose={() => setIsDrawerOpen(false)}
            onNext={handleNextWaypoint}
            onPrev={handlePrevWaypoint}
          />
        )}

        {/* Floating Focus Pill when drawer is closed */}
        {!isDrawerOpen && selectedWaypoint && (
          <div className="absolute top-4 left-4 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-3 bg-[#0d121f]/95 hover:bg-[#121829] border border-amber-500/40 p-2 pr-4 rounded-2xl shadow-2xl backdrop-blur-xl transition-all hover:scale-105 group"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center font-bold text-xs text-slate-950">
                #{selectedWaypoint.order}
              </div>
              <div className="text-left">
                <div className="text-xs font-serif font-bold text-amber-200 group-hover:text-amber-300">
                  {selectedWaypoint.ancientName}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 max-w-[200px]">
                  {selectedWaypoint.title}
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/30 ml-1">
                Open Details →
              </span>
            </button>
          </div>
        )}
      </main>

      {/* Bottom Timeline Scrubber */}
      <TimelineScrubber
        waypoints={journeyWaypoints}
        currentIndex={currentIndex}
        onSelectIndex={handleSelectIndex}
        isPlayingTour={isPlayingTour}
        onTogglePlayTour={() => setIsPlayingTour(!isPlayingTour)}
        activeKandaFilter={activeKandaFilter}
        onFilterKanda={setActiveKandaFilter}
      />

      {/* Ancient Kingdom Detail Modal */}
      <KingdomModal
        kingdom={selectedKingdom}
        onClose={() => setSelectedKingdom(null)}
      />

      {/* Full Epic Chronicle Book Reader Modal */}
      <StoryReaderModal
        isOpen={isStoryReaderOpen}
        onClose={() => setIsStoryReaderOpen(false)}
        waypoints={journeyWaypoints}
        onSelectWaypointOnMap={handleSelectWaypoint}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
};
