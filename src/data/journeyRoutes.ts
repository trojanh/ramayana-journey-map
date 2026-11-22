import { RouteSegment } from '../types';
import { journeyWaypoints } from './journeyWaypoints';

export const routeSegments: RouteSegment[] = [
  // Bala Kanda: Ayodhya to Mithila and back
  {
    fromId: 1,
    toId: 2,
    type: 'foot',
    color: '#f59e0b',
    coordinates: [
      [26.7922, 82.1998],
      [26.5000, 83.1000],
      [25.7500, 84.1500],
    ]
  },
  {
    fromId: 2,
    toId: 3,
    type: 'foot',
    color: '#f59e0b',
    coordinates: [
      [25.7500, 84.1500],
      [25.6200, 84.0500],
      [25.5647, 83.9777],
    ]
  },
  {
    fromId: 3,
    toId: 4,
    type: 'foot',
    color: '#f59e0b',
    coordinates: [
      [25.5647, 83.9777],
      [25.6000, 85.1000],
      [26.1542, 85.8918],
    ]
  },
  {
    fromId: 4,
    toId: 5,
    type: 'foot',
    color: '#f59e0b',
    coordinates: [
      [26.1542, 85.8918],
      [26.4000, 85.9200],
      [26.7271, 85.9407],
    ]
  },
  {
    fromId: 5,
    toId: 6,
    type: 'foot',
    color: '#f59e0b',
    coordinates: [
      [26.7271, 85.9407],
      [26.5500, 84.8000],
      [26.4000, 83.5000],
    ]
  },
  {
    fromId: 6,
    toId: 7,
    type: 'foot',
    color: '#f59e0b',
    coordinates: [
      [26.4000, 83.5000],
      [26.6000, 82.8000],
      [26.7950, 82.2020],
    ]
  },

  // Ayodhya Kanda: Exile to Chitrakoot
  {
    fromId: 7,
    toId: 8,
    type: 'foot',
    color: '#ef4444',
    coordinates: [
      [26.7950, 82.2020],
      [26.7200, 82.2300],
      [26.6800, 82.2500],
    ]
  },
  {
    fromId: 8,
    toId: 9,
    type: 'foot',
    color: '#ef4444',
    coordinates: [
      [26.6800, 82.2500],
      [26.1000, 82.0000],
      [25.5866, 81.6429],
    ]
  },
  {
    fromId: 9,
    toId: 10,
    type: 'boat',
    color: '#06b6d4',
    coordinates: [
      [25.5866, 81.6429],
      [25.5200, 81.7500],
      [25.4358, 81.8463],
    ]
  },
  {
    fromId: 10,
    toId: 11,
    type: 'foot',
    color: '#ef4444',
    coordinates: [
      [25.4358, 81.8463],
      [25.3800, 81.6000],
      [25.3200, 81.3500],
    ]
  },
  {
    fromId: 11,
    toId: 12,
    type: 'foot',
    color: '#ef4444',
    coordinates: [
      [25.3200, 81.3500],
      [25.2500, 81.1000],
      [25.1764, 80.8655],
    ]
  },
  {
    fromId: 12,
    toId: 13,
    type: 'foot',
    color: '#ef4444',
    coordinates: [
      [25.1764, 80.8655],
      [25.1850, 80.8750],
    ]
  },

  // Aranya Kanda: Deep wilderness to Panchavati and south
  {
    fromId: 13,
    toId: 14,
    type: 'foot',
    color: '#10b981',
    coordinates: [
      [25.1850, 80.8750],
      [25.1400, 80.8500],
      [25.1050, 80.8400],
    ]
  },
  {
    fromId: 14,
    toId: 15,
    type: 'foot',
    color: '#10b981',
    coordinates: [
      [25.1050, 80.8400],
      [24.9500, 80.7000],
      [24.7500, 80.6000],
    ]
  },
  {
    fromId: 15,
    toId: 16,
    type: 'foot',
    color: '#10b981',
    coordinates: [
      [24.7500, 80.6000],
      [22.8000, 78.5000],
      [21.2000, 76.0000],
      [19.5400, 74.0000],
    ]
  },
  {
    fromId: 16,
    toId: 17,
    type: 'foot',
    color: '#10b981',
    coordinates: [
      [19.5400, 74.0000],
      [19.7500, 73.9000],
      [19.9975, 73.7898],
    ]
  },
  {
    fromId: 17,
    toId: 18,
    type: 'foot',
    color: '#10b981',
    coordinates: [
      [19.9975, 73.7898],
      [20.0050, 73.7950],
    ]
  },
  {
    fromId: 18,
    toId: 19,
    type: 'foot',
    color: '#10b981',
    coordinates: [
      [20.0050, 73.7950],
      [17.8000, 75.5000],
      [15.8000, 76.8000],
      [14.0336, 77.6083],
    ]
  },

  // Kishkindha Kanda
  {
    fromId: 19,
    toId: 20,
    type: 'foot',
    color: '#eab308',
    coordinates: [
      [14.0336, 77.6083],
      [14.8000, 77.0000],
      [15.3580, 76.4780],
    ]
  },
  {
    fromId: 20,
    toId: 21,
    type: 'foot',
    color: '#eab308',
    coordinates: [
      [15.3580, 76.4780],
      [15.3410, 76.4650],
    ]
  },
  {
    fromId: 21,
    toId: 22,
    type: 'foot',
    color: '#eab308',
    coordinates: [
      [15.3410, 76.4650],
      [15.3350, 76.4600],
    ]
  },
  {
    fromId: 22,
    toId: 23,
    type: 'vanara_march',
    color: '#eab308',
    coordinates: [
      [15.3350, 76.4600],
      [13.5000, 77.2000],
      [11.5000, 77.8000],
      [9.8000, 77.6000],
      [8.3800, 77.5000],
    ]
  },

  // Sundara Kanda: Hanuman's Ocean Leap
  {
    fromId: 23,
    toId: 24,
    type: 'hanuman_flight',
    color: '#ec4899',
    dashArray: '8, 8',
    coordinates: [
      [8.3800, 77.5000],
      [8.0000, 78.5000],
      [7.5000, 79.8000],
      [6.9271, 80.7718],
    ]
  },

  // Yuddha Kanda: Army march to Rameshwaram & Setu Bandha into Lanka
  {
    fromId: 23,
    toId: 25,
    type: 'vanara_march',
    color: '#dc2626',
    coordinates: [
      [8.3800, 77.5000],
      [8.8000, 78.5000],
      [9.2876, 79.3129],
    ]
  },
  {
    fromId: 25,
    toId: 26,
    type: 'vanara_march',
    color: '#dc2626',
    coordinates: [
      [9.2876, 79.3129],
      [9.0500, 79.7000],
      [8.8000, 80.0000],
      [7.2906, 80.6337],
    ]
  },

  // Victorious Return: Pushpaka Vimana Flight (Lanka -> Rameshwaram -> Kishkindha -> Chitrakoot -> Ayodhya)
  {
    fromId: 26,
    toId: 27,
    type: 'pushpaka_vimana',
    color: '#eab308',
    dashArray: '12, 6',
    coordinates: [
      [7.2906, 80.6337],
      [9.2876, 79.3129],
      [15.3350, 76.4600],
      [20.0050, 73.7950],
      [25.1764, 80.8655],
      [25.4358, 81.8463],
      [26.7922, 82.1998],
    ]
  },

  // Uttara Kanda & Conclusion: Ayodhya to Valmiki Ashram (Bithoor) and Sarayu Mahaprasthana
  {
    fromId: 27,
    toId: 28,
    type: 'pushpaka_vimana',
    color: '#8b5cf6',
    dashArray: '6, 6',
    coordinates: [
      [26.7922, 82.1998],
      [26.6200, 80.2700], // Bithoor / Valmiki ashram on Ganga
      [26.7800, 82.1600], // Guptar Ghat, Sarayu
    ]
  }
];

// Helper to get all coordinates for calculating overall bounds
export const getAllCoordinates = (): [number, number][] => {
  return journeyWaypoints.map(w => w.coordinates);
};
