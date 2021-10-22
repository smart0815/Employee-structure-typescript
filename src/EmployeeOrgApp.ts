import IEmployeeOrgApp from './IEmployeeOrgApp';
import Employee from './Employee';

class EmployeeOrgApp implements IEmployeeOrgApp {
	position: any = 0
	ceo: Employee;
	move(employeeId: Number, supervisorId: Number): void {
		const emp: Employee = Object.assign(employeeId)
		emp.uniqueId = supervisorId
	}
	undo(): void {
		if (this.position > 0) {
			this.position -= 1;
		}
	}
	redo(): void {
		if (this.position < history.length - 1) {
			this.position += 1;
		}
	}
	uniqueId: Number;
	name: String;
	subordinates?: Employee[];
}

export default EmployeeOrgApp;