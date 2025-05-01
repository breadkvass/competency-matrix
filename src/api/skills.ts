import { apiClient } from './client';
import { Grade, Skill } from './matrix';

export interface SkillCreate {
  area_of_application: string;
  skill: string;
}

export interface SkillsPagination {
  count: number;
  next: number | null;
  previous: number | null;
  result: Skill[];
}

export const skillsService = {
  async getSkills(
    page: number = 1,
    limit: number = 30,
    type?: string
  ): Promise<SkillsPagination> {
    const response = await apiClient.get<SkillsPagination>('/skills/', {
      params: { page, limit, type },
    });
    return response.data;
  },

  async getSkill(skillId: number): Promise<Skill> {
    const response = await apiClient.get<Skill>(`/skills/${skillId}`);
    return response.data;
  },

  async createSkill(data: SkillCreate): Promise<Skill> {
    const response = await apiClient.post<Skill>('/skills/', data);
    return response.data;
  },

  async getGrades(): Promise<Grade[]> {
    const response = await apiClient.get<Grade[]>('/grades/');
    return response.data;
  },
}; 