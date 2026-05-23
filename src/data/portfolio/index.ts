import { weddings } from "./weddings";
import { haldi } from "./haldi";
import { mehendi } from "./mehendi";
import { sangeeth } from "./sangeeth";
import { pellikuthuru } from "./pellikuthuru";

export const galleryItems = [
  ...weddings,
  ...haldi,
  ...mehendi,
  ...sangeeth,
  ...pellikuthuru,
];

export const categories = [
  "Wedding",
  "Haldi",
  "Mehendi",
  "Sangeeth",
  "Pellikuthuru",
];