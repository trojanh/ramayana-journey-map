import { KandaType } from '../types';

export const getKandaColor = (kanda: KandaType): string => {
  switch (kanda) {
    case 'Bala Kanda':
      return '#f59e0b'; // Amber / Gold
    case 'Ayodhya Kanda':
      return '#ef4444'; // Red / Saffron
    case 'Aranya Kanda':
      return '#10b981'; // Forest Emerald
    case 'Kishkindha Kanda':
      return '#eab308'; // Vanara Yellow
    case 'Sundara Kanda':
      return '#ec4899'; // Pink / Lotus
    case 'Yuddha Kanda':
      return '#dc2626'; // War Crimson
    case 'Uttara Kanda':
      return '#8b5cf6'; // Transcendent Violet
    default:
      return '#f97316';
  }
};

export const getKandaBadgeClass = (kanda: KandaType): string => {
  switch (kanda) {
    case 'Bala Kanda':
      return 'bg-amber-900/60 text-amber-200 border-amber-500/40';
    case 'Ayodhya Kanda':
      return 'bg-red-900/60 text-red-200 border-red-500/40';
    case 'Aranya Kanda':
      return 'bg-emerald-900/60 text-emerald-200 border-emerald-500/40';
    case 'Kishkindha Kanda':
      return 'bg-yellow-900/60 text-yellow-200 border-yellow-500/40';
    case 'Sundara Kanda':
      return 'bg-pink-900/60 text-pink-200 border-pink-500/40';
    case 'Yuddha Kanda':
      return 'bg-rose-900/60 text-rose-200 border-rose-500/40';
    case 'Uttara Kanda':
      return 'bg-purple-900/60 text-purple-200 border-purple-500/40';
    default:
      return 'bg-orange-900/60 text-orange-200 border-orange-500/40';
  }
};

export const calculateDistanceKm = (coord1: [number, number], coord2: [number, number]): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c);
};
