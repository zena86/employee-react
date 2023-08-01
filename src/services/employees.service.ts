import { AxiosResponse } from "axios";
import { http } from "../http";
import { User } from "../models/user.model";

export function getEmployees(searchString: string): Promise<User[]> {
  return http.get<User[]>(`/employees?q=${searchString}`).then((response: AxiosResponse<User[]>) => response.data);
}

export function getEmployeeById(employeeId: number): Promise<User> {
  return http.get<User>(`/employees/${employeeId}`).then((response: AxiosResponse<User>) => response.data);
}