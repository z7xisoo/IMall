import Vue from "vue";

import { dragdata, drag, imMove } from "./drag/index.js";

Vue.directive("dragdata", dragdata);
Vue.directive("drag", drag);
Vue.directive("immove", imMove);
