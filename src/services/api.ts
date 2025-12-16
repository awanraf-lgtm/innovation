const API_BASE_URL = 'https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod';

export interface Category {
  categoryId: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  error?: string;
  message?: string;
}

export const apiService = {
  async fetchCategories(): Promise<Category[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<Category[]> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.error || 'Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
};