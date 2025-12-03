// studentService.js - All CRUD operations using Fetch API
const API_URL = 'http://localhost:3000/students';

/**
 * Get all students
 */
export const getStudents = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

/**
 * Get a single student by ID
 */
export const getStudentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch student');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching student:', error);
    throw error;
  }
};

/**
 * Add a new student
 */
export const addStudent = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to add student');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

/**
 * Update an existing student
 */
export const updateStudent = async (id, data) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update student');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

/**
 * Delete a student
 */
export const deleteStudent = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete student');
    }
    return true;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};
