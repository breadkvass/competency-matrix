import { apiClient } from './client';
import { User } from './users';

export interface Company {
  id: number;
  name: string;
  is_active: boolean;
  director: User;
  employees: User[] | null;
  created_at: string;
  closed_at: string | null;
}

export interface CompanyRegistration {
  name: string;
  employees?: number[];
}

export interface CompanyUpdate {
  name: string;
  is_active: boolean;
}

export interface CompanyUpdateDirector {
  new_director: number;
}

export interface CompanyUpdateEmployees {
  employees: number[];
}

export interface CompanyPagination {
  count: number;
  next: number | null;
  previous: number | null;
  result: Company[];
}

export const companiesService = {
  async getCompanies(page: number = 1, limit: number = 10): Promise<CompanyPagination> {
    const response = await apiClient.get<CompanyPagination>('/companies/', {
      params: { page, limit },
    });
    return response.data;
  },

  async getCompany(companyId: number): Promise<Company> {
    const response = await apiClient.get<Company>(`/companies/${companyId}`);
    return response.data;
  },

  async createCompany(companyData: CompanyRegistration): Promise<Company> {
    const response = await apiClient.post<Company>('/companies/', companyData);
    return response.data;
  },

  async updateCompany(companyId: number, companyData: CompanyUpdate): Promise<Company> {
    const response = await apiClient.put<Company>(`/companies/${companyId}`, companyData);
    return response.data;
  },

  async updateDirector(companyId: number, directorData: CompanyUpdateDirector): Promise<Company> {
    const response = await apiClient.put<Company>(`/companies/${companyId}/update_director`, directorData);
    return response.data;
  },

  async updateEmployees(companyId: number, employeesData: CompanyUpdateEmployees): Promise<Company> {
    const response = await apiClient.put<Company>(`/companies/${companyId}/update_employees`, employeesData);
    return response.data;
  },
}; 