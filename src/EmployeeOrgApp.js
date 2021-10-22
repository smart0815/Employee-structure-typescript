"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeOrgApp {
    constructor() {
        this.position = 0;
    }
    move(employeeId, supervisorId) {
        const emp = Object.assign(employeeId);
        emp.uniqueId = supervisorId;
    }
    undo() {
        if (this.position > 0) {
            this.position -= 1;
        }
    }
    redo() {
        if (this.position < history.length - 1) {
            this.position += 1;
        }
    }
}
exports.default = EmployeeOrgApp;
//# sourceMappingURL=EmployeeOrgApp.js.map