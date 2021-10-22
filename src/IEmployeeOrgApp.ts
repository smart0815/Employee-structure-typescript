import Employee from './Employee';

interface IEmployeeOrgApp extends Employee {
	ceo: Employee,
	move(employeeId: Number, supervisorId: Number): void,
	undo(): void,
	redo(): void
}

export default IEmployeeOrgApp;