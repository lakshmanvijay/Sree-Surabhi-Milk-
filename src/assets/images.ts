// Verified-content photography used for the hero background carousel and
// decorative splash — everything else now comes from the real brand asset
// pack in ./brand.
const unsplash = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const commons = (filename: string, w: number) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${w}`;

export const img = {
  heroFarm: (w: number) => commons("A beautiful photo of cows grazing in the field.jpg", w),
  heroFarmMisty: (w: number) => commons("A few cows grazing in India 2015.jpg", w),
  qualityCows: (w: number) => unsplash("1500595046743-cd271d694d30", w),
  milkSplash: (w: number) => unsplash("1600788907416-456578634209", w),
  milkingMachine: (w: number) => commons("Cow milking machine in action DSC04132.jpg", w),
  cowFace: (w: number) => unsplash("1546445317-29f4545e9d53", w),
  labTesting: (w: number) => commons("Clinical Pathology Blood Testing Laboratory in Navi Mumbai, India.jpg", w),
  processingTanks: (w: number) => commons("Bright Dairy East China Central Factory 01.jpg", w),
  packagingLine: (w: number) => commons("10 heads stainless steel piston filler.jpg", w),
  deliveryTruck: (w: number) => unsplash("1601584115197-04ecc0da31d7", w),
};

export const avatars = {
  ramesh: "https://randomuser.me/api/portraits/men/32.jpg",
  priya: "https://randomuser.me/api/portraits/women/44.jpg",
  anil: "https://randomuser.me/api/portraits/men/67.jpg",
  sneha: "https://randomuser.me/api/portraits/women/68.jpg",
};
