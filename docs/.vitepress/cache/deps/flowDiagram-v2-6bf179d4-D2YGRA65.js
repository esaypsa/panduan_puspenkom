import {
  flowRendererV2,
  flowStyles
} from "./chunk-MYZNFCQ2.js";
import "./chunk-FUE7EK6Q.js";
import {
  flowDb,
  parser$1
} from "./chunk-AOCXZ2PS.js";
import "./chunk-74AT2RZL.js";
import "./chunk-GP3OHT5R.js";
import "./chunk-XCOXMYSI.js";
import "./chunk-Y3QXKWDG.js";
import {
  setConfig
} from "./chunk-26HRIC4T.js";
import {
  require_dist
} from "./chunk-RFA2HYNO.js";
import {
  require_dayjs_min
} from "./chunk-BBP2IUEP.js";
import "./chunk-RUZHOX3E.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/mermaid/dist/flowDiagram-v2-6bf179d4.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-6bf179d4-D2YGRA65.js.map
