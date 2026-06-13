
import * as topojson from 'topojson-client';
import { geoPath, geoMercator } from 'd3-geo';
import { readFileSync, writeFileSync } from 'fs';

const landData = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf-8'));
const world = topojson.feature(landData, landData.objects.land);

const projection = geoMercator()
  .fitSize([1000, 500], world);

const path = geoPath().projection(projection);

const paths = [];
for (const feature of world.features) {
  const p = path(feature);
  if (p) paths.push(p);
}

const output = 'export const CONTINENT_PATHS = ' + JSON.stringify(paths, null, 2) + ';';
writeFileSync('src/data/continents.ts', output);
console.log('Generated ' + paths.length + ' continent paths');

