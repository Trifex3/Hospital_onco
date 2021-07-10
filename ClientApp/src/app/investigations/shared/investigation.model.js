"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVESTIGATION_TYPES = exports.InvestigationType = exports.Investigation = void 0;
var Investigation = /** @class */ (function () {
  function Investigation() {
    }
    return Activity;
}());
exports.Investigation = Investigation;
var InvestigationType;
(function (InvestigationType) {
  InvestigationType[InvestigationType["CT"] = 0] = "CT";
  InvestigationType[InvestigationType["Appointmnet"] = 1] = "Appointmnet";
  InvestigationType[InvestigationType["Biology"] = 2] = "Biology";
  InvestigationType[InvestigationType["Surgery"] = 3] = "Surgery";
  InvestigationType[InvestigationType[" Biopsy"] = 4] = " Biopsy";
  InvestigationType[InvestigationType["RTE"] = 5] = "RTE";
  InvestigationType[InvestigationType["Ultrasound"] = 6] = "Ultrasound";
})(InvestigationType = exports.InvestigationType || (exports.InvestigationType = {}));
exports.ACTIVITY_TYPES = ['CT', 'Appointmnet', 'Strength', 'Surgery', ' Biopsy', 'RTE', 'Ultrasound'];
//# sourceMappingURL=activity.model.js.map

/*CT,
  Appointmnet,
  Biology,
  Surgery,
  Biopsy,
  RTE,
  Ultrasound
*/
