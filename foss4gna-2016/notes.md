FOSS4GNA 2016

# In-browser, scale-independent geo data analysis using vector tiles

## Blurb

Currently, we tend to use tiled data exclusively for rendering maps--not so much for data analysis. In recent projects, we've started developing an approach that leverages the scale-independence and indexed nature of vector tiles to do quantitative + geographical data analysis in the browser--for example, a web map enabling a user to draw any polygon at any zoom and calculate demographic statistics within it.

In this talk I'll show that example and a few others, introduce the underlying collection of Node modules focused on interacting with Mapbox vector tiles, and then shift into a conversation with whoever's in the room about other problems that could be engaged using approaches like this one.

## Talk

- Ways to do interactive geo analysis:
  - just use geojson (size-limited)
  - postgis, etc (complexity: needs server; round trip for each interaction or else weird data/state mgmt)

These are the same problems faced when trying to render in the browser, and
this is exactly what VT's were designed to solve for.  Why not use for
in-browser data analysis?

- Background on vector tiles?

- With vector tiles
  - Common 'pipeline' for display and analysis
  - No server necessary; 
  - A lot of the *client* is done for you, too, thanks to Mapbox GL JS

- Modules:
  - vt-grid (uses TileReduce, geojson-vt, Turf, tippecanoe)
  - mapbox-gl-datadriven
  - mapbox-gl-datascope



