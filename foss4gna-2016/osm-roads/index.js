var path = require('path')
var vtGrid = require('vt-grid')

var output = process.argv[3]

var bbox = (process.argv.length > 4)
  ? process.argv.slice(4).map(Number)
  : null

var options = [{
  includeBaseData: false,
  basezoom: 12,
  minzoom: 11,
  gridsize: 4096,
  aggregations: path.join(__dirname, 'base.js'),
  postAggregations: path.join(__dirname, 'base.js')
}, {
  basezoom: 11,
  minzoom: 1,
  gridsize: 4096,
  aggregations: { osm: { road_density: 'areaWeightedMean' } }
}]

options.forEach(function (opts) {
  if (bbox) { opts.bbox = bbox }
})

vtGrid(output, process.argv[2], options)
