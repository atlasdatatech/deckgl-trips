import { AppSettings } from "./data-interfaces";

export const DEFAULT_APP_SETTINGS: AppSettings = {
    color: [255, 235, 86], // yellow
    colors: [
        [255, 109, 245], // pink
        [0, 255, 119] // green
    ],
    dataSamples: [],
    highlightColor: [255, 109, 245], // pink
    initialLoopTimeMinutes: 1,
    initialTrailLength: 1000,
    initialViewState: {
        latitude: 31.97,
        longitude: 118.79,
        zoom: 9,
        pitch: 15,
        bearing: 0,
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    },
    maxZoom: 20,
    mapboxStyle: "http://api.atlasdata.cn/maps/view/cjVUAf6Vg",
    nodeLabel: "Node",
    nodeLabelPlural: 'Nodes',
    title: "Trips"
};