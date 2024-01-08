import { CCBarProps } from "../components/CCBar/CCBar";

export const presets: Record<string, CCBarProps[]> = {
  MAMA: [
    { id: "mama-p1", label: "Phase 1", size: 1800 },
    { id: "mama-k1", label: "Knight 1", size: 800 },
    { id: "mama-p2", label: "Phase 2", size: 1800 },
    { id: "mama-k2", label: "Knight 2", size: 800 },
    { id: "mama-p3", label: "Phase 3", size: 1800 },
    { id: "mama-k3", label: "Knight 3", size: 800 },
    { id: "mama-p4", label: "Phase 4", size: 1800 },
  ],
  Siax: [{ id: "siax-p1", label: "Phase 1", size: 2100 }],
};
