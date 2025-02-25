const DATASETS = [
  {
    domain: 'zoning',
    summary: [
      'This data layer shows the boundaries of agro-industrial zones, where oil palm and rubber tree plantations, as well as other crops, may be established.',
      'This data layer shows the boundaries of agro-industrial zones, where oil palm and rubber tree plantations, as well as other crops, may be established. In Cameroon, industrial agriculture falls outside of the National Forest Estate. Agricultural plantations are allocated by the Ministry of Economy and Planning to private entities under long-term, renewable contracts, which are then monitored by the Ministry of Agriculture. The agro-industrial data set was mapped using satellite imagery, with ground-truthing to determine the crop type and operating company.',
    ],
    service: {
      id: 'agro-industrial-zones',
      type: 'feature',
      link: 'http://gis-gfw.wri.org/arcgis/rest/services/country_data/africa/MapServer/1',
      fields: [
        {
          name: 'objectid_1',
          type: 'esriFieldTypeOID',
          alias: 'objectid_1',
          domain: null,
        },
        {
          name: 'objectid',
          type: 'esriFieldTypeInteger',
          alias: 'objectid',
          domain: null,
        },
        {
          name: 'aff_code',
          type: 'esriFieldTypeString',
          alias: 'aff_code',
          length: 6,
          domain: null,
        },
        {
          name: 'toponyme',
          type: 'esriFieldTypeString',
          alias: 'toponyme',
          length: 30,
          domain: null,
        },
        {
          name: 'sup_sig',
          type: 'esriFieldTypeDouble',
          alias: 'sup_sig',
          domain: null,
        },
        {
          name: 'shape_leng',
          type: 'esriFieldTypeDouble',
          alias: 'shape_leng',
          domain: null,
        },
        {
          name: 'gfwid',
          type: 'esriFieldTypeString',
          alias: 'gfwid',
          length: 36,
          domain: null,
        },
        {
          name: 'shape',
          type: 'esriFieldTypeGeometry',
          alias: 'shape',
          domain: null,
        },
        {
          name: 'globalid',
          type: 'esriFieldTypeGlobalID',
          alias: 'globalid',
          length: 38,
          domain: null,
        },
        {
          name: 'shape_Length',
          type: 'esriFieldTypeDouble',
          alias: 'shape_Length',
          domain: null,
        },
        {
          name: 'shape_Area',
          type: 'esriFieldTypeDouble',
          alias: 'shape_Area',
          domain: null,
        },
      ],
    },
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::cameroon-agro-industrial-zones/about',
    imgUrl: '/images/agro-industrial-zones.jpeg',
    title: 'Agro-Industrial Zones',
  },
  {
    domain: 'agriculture',
    summary: [
      'Maize (Zea mays), also known as corn, is a crop of world wide importance. Originally domesticated in what is now Mexico, its tolerance of diverse climates has lead to its widespread cultivation. Globally, it is tied with rice as the second most widely grown crop. Only wheat is more widely grown. In Africa it is grown throughout the agricultural regions of the continent from the Nile Delta in the north to the country of South Africa in the south. In sub-Saharan Africa it is relied on as a staple crop for 50% of the population.',
    ],
    service: {
      id: 'maize',
      type: 'image',
      link: 'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Maize/ImageServer/',
    },
    dataProvider: ['Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=6fab7020446c43b0b44727d6cb134ae8',
    imgUrl: '',
    title: 'Maize Production',
  },
  {
    domain: 'agriculture',
    summary: [
      "Rice (Oryza sativa and O. glaberrima) is one of the world's most important staple food crops. Over half of the world's population relies on rice. The people in some parts of Africa have been cultivating rice for over 3,500 years.",
    ],
    service: {
      id: 'rice',
      type: 'image',
      link: 'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Rice/ImageServer',
    },
    dataProvider: ['Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=a35b683f6ba045b2a4da4eacf58ea642',
    imgUrl: '',
    title: 'Rice Production',
  },
  {
    domain: 'agriculture',
    summary: [
      "Sorghum (Sorghum bicolor) is an important grass species used for human and animal food. It was first cultivated in Africa and currently 53% of the world's production is in sub-Saharan Africa. Millions of farmers in arid regions rely on this crop due to its drought tolerant qualities.",
    ],
    service: {
      id: 'sorghum',
      type: 'image',
      link: 'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Sorghum/ImageServer',
    },
    dataProvider: ['Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=f64fbb5ac501469a8ae13543af55632b',
    imgUrl: '',
    title: 'Sorghum Production',
  },
  {
    domain: 'forestry',
    summary: [
      'Boundaries of forests attributed in the non permanent domain and managed by communities.',
      'This data set displays the boundaries of areas designated as Community forests in Cameroon. Community forests legally recognize a community’s ownership rights to forest resources, both timber and non-timber. It includes the right to access, use, withdraw for commercial purposes or subsistence, and exclude others from the forest. The land remains owned by the Cameroonian Government. The community’s rights to forest resources are renewed every five years as long as the community complies with the community forest management agreement. A community may also contract with a third party to commercially harvest timber.',
    ],
    service: {
      id: 'community-forests',
      type: 'feature',
      link: 'http://gis-gfw.wri.org/arcgis/rest/services/country_data/africa/MapServer/0',
    },
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::cameroon-community-forests/about',
    imgUrl: '',
    title: 'Community Forests',
  },
  {
    domain: 'forestry',
    summary: [
      'Boundaries of permanent forests managed by the government (Forest Management Units) or councils (Council Forests).',
      'Logging in Cameroon’s forests is permitted within Forest Management Units (FMUs). This data set displays the FMUs within Cameroon’s permanent forest estate. Selective logging is permitted in Cameroon’s FMUs, which are further divided into logging concessions called annual allowable cuts (AACs). These logging permits require owners and operators to maintain permanent forest cover. This data set was produced in collaboration between the Cameroon Ministry of Forestry and Wildlife and WRI.',
    ],
    service: {
      id: 'forest-management-units',
      type: 'feature',
      link: 'https://gis-gfw.wri.org/arcgis/rest/services/country_data/africa/MapServer/3',
    },
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::cameroon-forest-management-units/about',
    imgUrl: '',
    title: 'Forest Management Units',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) buildings data for Africa, which is updated every 1 minute with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM polygon (closed way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes building features defined as a query against the hosted feature layer (i.e. building is not blank).',
    ],
    service: {
      id: 'buildings',
      type: 'feature',
      link: 'https://services-eu1.arcgis.com/zci5bUiJ8olAal7N/arcgis/rest/services/OSM_AF_Buildings/FeatureServer/0',
      fields: [
        {
          name: 'objectid',
          type: 'esriFieldTypeOID',
          alias: 'objectid',
          sqlType: 'sqlTypeOther',
          nullable: false,
          editable: false,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'osm_id2',
          type: 'esriFieldTypeString',
          alias: 'osm_id2',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_city',
          type: 'esriFieldTypeString',
          alias: 'addr_city',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_conscriptionnumber',
          type: 'esriFieldTypeString',
          alias: 'addr_conscriptionnumber',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_country',
          type: 'esriFieldTypeString',
          alias: 'addr_country',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_district',
          type: 'esriFieldTypeString',
          alias: 'addr_district',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_full',
          type: 'esriFieldTypeString',
          alias: 'addr_full',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_housename',
          type: 'esriFieldTypeString',
          alias: 'addr_housename',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_housenumber',
          type: 'esriFieldTypeString',
          alias: 'addr_housenumber',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_interpolation',
          type: 'esriFieldTypeString',
          alias: 'addr_interpolation',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_municipality',
          type: 'esriFieldTypeString',
          alias: 'addr_municipality',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_postcode',
          type: 'esriFieldTypeString',
          alias: 'addr_postcode',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_province',
          type: 'esriFieldTypeString',
          alias: 'addr_province',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_state',
          type: 'esriFieldTypeString',
          alias: 'addr_state',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_street',
          type: 'esriFieldTypeString',
          alias: 'addr_street',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_subdistrict',
          type: 'esriFieldTypeString',
          alias: 'addr_subdistrict',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_suburb',
          type: 'esriFieldTypeString',
          alias: 'addr_suburb',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'addr_unit',
          type: 'esriFieldTypeString',
          alias: 'addr_unit',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'amenity',
          type: 'esriFieldTypeString',
          alias: 'amenity',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'brand',
          type: 'esriFieldTypeString',
          alias: 'brand',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building',
          type: 'esriFieldTypeString',
          alias: 'building',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_colour',
          type: 'esriFieldTypeString',
          alias: 'building_colour',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_flats',
          type: 'esriFieldTypeString',
          alias: 'building_flats',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_floor',
          type: 'esriFieldTypeString',
          alias: 'building_floor',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_levels',
          type: 'esriFieldTypeString',
          alias: 'building_levels',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_material',
          type: 'esriFieldTypeString',
          alias: 'building_material',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_min_level',
          type: 'esriFieldTypeString',
          alias: 'building_min_level',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_roof',
          type: 'esriFieldTypeString',
          alias: 'building_roof',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_structure',
          type: 'esriFieldTypeString',
          alias: 'building_structure',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'building_walls',
          type: 'esriFieldTypeString',
          alias: 'building_walls',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'ele',
          type: 'esriFieldTypeString',
          alias: 'ele',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'height',
          type: 'esriFieldTypeSingle',
          alias: 'height',
          sqlType: 'sqlTypeOther',
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'levels',
          type: 'esriFieldTypeString',
          alias: 'levels',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'name',
          type: 'esriFieldTypeString',
          alias: 'name',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'name_en',
          type: 'esriFieldTypeString',
          alias: 'name_en',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'ref',
          type: 'esriFieldTypeString',
          alias: 'ref',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'ref_bag',
          type: 'esriFieldTypeString',
          alias: 'ref_bag',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'roof_shape',
          type: 'esriFieldTypeString',
          alias: 'roof_shape',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'shop',
          type: 'esriFieldTypeString',
          alias: 'shop',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'source_transform',
          type: 'esriFieldTypeString',
          alias: 'source_transform',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'source_date',
          type: 'esriFieldTypeString',
          alias: 'source_date',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'start_date',
          type: 'esriFieldTypeString',
          alias: 'start_date',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: 'wall',
          type: 'esriFieldTypeString',
          alias: 'wall',
          sqlType: 'sqlTypeOther',
          length: 255,
          nullable: true,
          editable: true,
          isViewOverride: false,
          domain: null,
          defaultValue: null,
        },
      ],
    },
    dataProvider: ['Open Street Map', 'Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=bb86721588ea49b6b44b10b7d5d2b0b1',
    imgUrl: '',
    title: 'Buildings',
  },
  {
    domain: 'zoning',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) landuse areas data for Africa, which is updated every 15 minutes with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM polygon (closed way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes landuse features defined as a query against the hosted feature layer (i.e. landuse is not blank).',
    ],
    service: {
      id: 'landuse',
      type: 'feature',
      link: 'https://services-eu1.arcgis.com/zci5bUiJ8olAal7N/ArcGIS/rest/services/OSM_AF_Landuse/FeatureServer/0',
    },
    dataProvider: ['Open Street Map', 'Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=1825495e3c1a4238a2b234d4fdc1861d',
    imgUrl: '',
    title: 'Landuse Areas',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This layer represents a network of classified roads, rural roads and forest tracks in Cameroon. The road layer is updated using recently acquired medium-resolution satellite images for the period 2005 to 2010. The new forest roads have been digitized and organized according to the data source (type of imagery), The date (acquisition date of the image), as well as the state of the road and its main use. The status of the old roads has been updated based on more recent observations using satellite imagery. The refining of data on existing public, departmental, regional and national roads was carried out on the basis of information provided by topographical maps and ground tracking for areas where cloud cover over the images made identification difficult. Given the different sources of this layer, the accuracy of the data is a function of the spatial resolution of the satellite images used.',
    ],
    service: {
      id: 'road-network',
      type: 'feature',
      link: 'https://gis.forest-atlas.org/server/rest/services/cmr/open_data_en/MapServer/115',
    },
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/minfof::road-network/about',
    imgUrl: '',
    title: 'Road Networks',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) waterways data for Africa, which is updated every 15 minutes with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM line (way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes waterway features defined as a query against the hosted feature layer (i.e. waterway is not blank).    ',
    ],
    service: {
      id: 'waterways',
      type: '',
      link: '',
    },
    dataProvider: ['Open Street Map', 'Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=82232d0415c04e7086414dff7eb1310f',
    imgUrl: '',
    title: 'Waterways',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) highways data for Africa, which is updated every 5 minutes with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM line (way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes highway features defined as a query against the hosted feature layer (i.e. highway is not blank).',
    ],
    service: {
      id: '',
      type: '',
      link: '',
    },
    dataProvider: ['Open Street Map', 'Esri'],
    imgUrl: '',
    title: 'Highways',
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=6d78851a40f54041a775d7c6f4b2633e',
  },
];

const DOMAINS = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Discover the agricultural yields',
    link: '',
    bgImg: 'bg-agriculture',
    datasets: DATASETS.filter(({domain}) => domain === 'agriculture'),
  },
  {
    id: 'forestry',
    title: 'Forestry',
    description: 'Explore forest conditions',
    link: '',
    bgImg: 'bg-forestry',
    datasets: DATASETS.filter(({domain}) => domain === 'forestry'),
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Understand existing infrastructure',
    link: '',
    bgImg: 'bg-infrastructure',
    datasets: DATASETS.filter(({domain}) => domain === 'infrastructure'),
  },
  {
    id: 'zoning',
    title: 'Landuse',
    description: 'Insights on landuse and zoning',
    link: '',
    bgImg: 'bg-zoning',
    datasets: DATASETS.filter(({domain}) => domain === 'zoning'),
  },
];

const DOMAINS_MAP = new Map();

DOMAINS.forEach(domain => {
  DOMAINS_MAP.set(domain.id, domain);
});

export {DOMAINS, DOMAINS_MAP, DATASETS};
