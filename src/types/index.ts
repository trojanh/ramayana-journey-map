export type KandaType = 
  | 'Bala Kanda'
  | 'Ayodhya Kanda'
  | 'Aranya Kanda'
  | 'Kishkindha Kanda'
  | 'Sundara Kanda'
  | 'Yuddha Kanda'
  | 'Uttara Kanda';

export interface ScriptureCitation {
  valmiki: {
    kanda: string;
    sarga: string;
    shloka?: string;
    text: string;
    translation: string;
  };
  tulsidas?: {
    kanda: string;
    dohaOrChaupai: string;
    text: string;
    meaning: string;
  };
}

export interface AudioNarration {
  hindi: {
    title: string;
    text: string;
  };
  english: {
    title: string;
    text: string;
  };
}

export interface Waypoint {
  id: number;
  order: number;
  ancientName: string;
  sanskritName: string;
  modernLocation: string;
  modernStateOrCountry: string;
  coordinates: [number, number]; // [lat, lng]
  kanda: KandaType;
  title: string;
  summary: string;
  detailedNarrative: string;
  charactersInvolved: string[];
  keyEvent: string;
  scripture: ScriptureCitation;
  narration: AudioNarration;
  historicalSignificance: string;
  presentDayTempleOrSite?: string;
  travelMode: 'walking' | 'boat' | 'air_divine' | 'army_march' | 'ocean_leap';
  iconType: 'birth' | 'temple' | 'forest' | 'water' | 'mountain' | 'battle' | 'bridge' | 'coronation' | 'ascension';
}

export interface AncientKingdom {
  id: string;
  name: string;
  sanskritName: string;
  capital: string;
  capitalCoordinates: [number, number];
  rulerDuringRamayana: string;
  description: string;
  significance: string;
  modernTerritory: string;
  polygonCoordinates: [number, number][]; // LatLng polygon
  color: string;
}

export interface ModernRegion {
  id: string;
  name: string;
  type: 'state' | 'country';
  capital: string;
  coordinates: [number, number];
  polygonCoordinates?: [number, number][];
}

export interface RouteSegment {
  fromId: number;
  toId: number;
  type: 'foot' | 'boat' | 'vanara_march' | 'hanuman_flight' | 'pushpaka_vimana';
  color: string;
  dashArray?: string;
  coordinates: [number, number][];
}
