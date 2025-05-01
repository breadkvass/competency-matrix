import { apiClient } from './client';
import { User } from './users';

export interface Grade {
  id: number;
  grade: string;
  evaluation_number: number;
}

export interface Skill {
  id: number;
  area_of_application: string;
  skill: string;
}

export interface SkillWithGrade extends Skill {
  grade: Grade;
}

export interface TemplateMatrix {
  id: number;
  name: string;
  created_at: string;
  author?: User | null;
  company?: {
    id: number;
    name: string;
  } | null;
  skills: Skill[];
}

export interface Matrix {
  id: number;
  name: string;
  user: User;
  template_matrix: TemplateMatrix;
  status: string;
  created_at: string;
  last_update_status: string | null;
  completed_at: string | null;
  deadline: string | null;
  skills: SkillWithGrade[];
}

export interface MatrixCreate {
  name?: string;
  employee: number[];
  template_matrix: number;
  deadline?: string;
}

export interface MatrixInWorkStatus {
  status: string;
}

export interface MatrixCompleted {
  name: string;
  status: string;
  skills: Array<{
    skill: string;
    grade: {
      evaluation_number: number;
    };
  }>;
}

export interface TemplateMatrixCreate {
  name: string;
  skills: number[];
}

export interface TemplateMatrixPagination {
  count: number;
  next: number | null;
  previous: number | null;
  result: TemplateMatrix[];
}

export const matrixService = {
  // Template Matrix endpoints
  async getTemplateMatrices(
    page: number = 1,
    limit: number = 10,
    company?: number,
    author?: number
  ): Promise<TemplateMatrixPagination> {
    const response = await apiClient.get<TemplateMatrixPagination>('/template_matrix/', {
      params: { page, limit, company, author },
    });
    return response.data;
  },

  async getTemplateMatrix(templateId: number): Promise<TemplateMatrix> {
    const response = await apiClient.get<TemplateMatrix>(`/template_matrix/${templateId}`);
    return response.data;
  },

  async createTemplateMatrix(data: TemplateMatrixCreate): Promise<TemplateMatrix> {
    const response = await apiClient.post<TemplateMatrix>('/template_matrix/', data);
    return response.data;
  },

  async updateTemplateMatrix(templateId: number, data: TemplateMatrixCreate): Promise<TemplateMatrix> {
    const response = await apiClient.patch<TemplateMatrix>(`/template_matrix/${templateId}`, data);
    return response.data;
  },

  // Matrix endpoints
  async getMatricesByCompany(): Promise<Matrix[]> {
    const response = await apiClient.get<Matrix[]>('/matrix/by_company');
    return response.data;
  },

  async getMatricesByEmployee(): Promise<Matrix[]> {
    const response = await apiClient.get<Matrix[]>('/matrix/by_employee');
    return response.data;
  },

  async getMatrix(matrixId: number): Promise<Matrix> {
    const response = await apiClient.get<Matrix>(`/matrix/${matrixId}`);
    return response.data;
  },

  async createMatrix(data: MatrixCreate): Promise<Matrix[]> {
    const response = await apiClient.post<Matrix[]>('/matrix/', data);
    return response.data;
  },

  async updateMatrixStatus(matrixId: number, status: MatrixInWorkStatus): Promise<Matrix> {
    const response = await apiClient.put<Matrix>(`/matrix/${matrixId}/new_status`, status);
    return response.data;
  },

  async completeMatrix(matrixId: number, data: MatrixCompleted): Promise<Matrix> {
    const response = await apiClient.patch<Matrix>(`/matrix/${matrixId}/completed/`, data);
    return response.data;
  },
}; 