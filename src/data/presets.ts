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
  Ensolyss: [
    { id: "ensolyss-p1", label: "Phase 1", size: 2000 },
    { id: "ensolyss-p2", label: "Phase 2", size: 2250 },
    { id: "ensolyss-p3", label: "Phase 3", size: 2250 },
  ],
  Skorvald: [{ id: "skorvald-p1", label: "Phase 1", size: 2200 }],
  Artsariiv: [
    { id: "artsariiv-p1", label: "Phase 1", size: 2100 },
    { id: "artsariiv-split1-c1", label: "Split 1 - Northwest", size: 600 },
    { id: "artsariiv-split1-c2", label: "Split 1 - Northeast", size: 600 },
    { id: "artsariiv-split1-c3", label: "Split 1 - Southeast", size: 600 },
    { id: "artsariiv-split1-c4", label: "Split 1 - Southwest", size: 600 },

    { id: "artsariiv-p2", label: "Phase 2", size: 2100 },

    { id: "artsariiv-split2-c1", label: "Split 2 - Northwest", size: 340 },
    { id: "artsariiv-split2-c2", label: "Split 2 - North", size: 340 },
    { id: "artsariiv-split2-c3", label: "Split 2 - Northeast", size: 340 },
    { id: "artsariiv-split2-c4", label: "Split 2 - East", size: 340 },

    { id: "artsariiv-split2-c5", label: "Split 2 - Southeast", size: 340 },
    { id: "artsariiv-split2-c6", label: "Split 2 - South", size: 340 },

    { id: "artsariiv-split2-c7", label: "Split 2 - Southwest", size: 340 },
    { id: "artsariiv-split2-c8", label: "Split 2 - West", size: 340 },

    { id: "artsariiv-p3", label: "Phase 3", size: 2100 },
  ],
  Arkk: [
    { id: "arkk-p2", label: "Phase 2", size: 1800 },
    { id: "arkk-p4", label: "Phase 4", size: 1800 },
    { id: "arkk-p6", label: "Phase 6", size: 1800 },
  ],
  Ai: [
    { id: "ai-p1", label: "Phase 1", size: 3200 },
    { id: "ai-sorrow1", label: "Sorrow 1", size: 1500 },
    { id: "ai-p2", label: "Phase 2", size: 3200 },
    { id: "ai-sorrow2", label: "Sorrow 2", size: 1500 },
    { id: "ai-sorrow3", label: "Sorrow 3", size: 1500 },
  ],
};
