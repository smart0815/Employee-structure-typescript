"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEO = exports.GeorgiaFlangy = exports.SophieTurner = exports.BruceWillis = exports.TylerSimpson = exports.SarahDonald = void 0;
exports.SarahDonald = {
    uniqueId: 2,
    name: "Sarah Donald",
    subordinates: []
};
exports.TylerSimpson = {
    uniqueId: 3,
    name: "Tyler Simpson",
    subordinates: []
};
exports.BruceWillis = {
    uniqueId: 3,
    name: "Bruce Willis"
};
exports.SophieTurner = {
    uniqueId: 5,
    name: "Sophie Turner",
};
exports.GeorgiaFlangy = {
    uniqueId: 4,
    name: "Georgina Flangy",
    subordinates: [exports.SophieTurner]
};
exports.CEO = {
    uniqueId: 1,
    name: "Mark Zuckerberg",
    subordinates: [exports.SarahDonald, exports.TylerSimpson, exports.BruceWillis, exports.GeorgiaFlangy]
};
//# sourceMappingURL=Employee.js.map