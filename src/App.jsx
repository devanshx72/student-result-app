// App.jsx - Main application component with state management
import { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';
import './App.css';

function App() {
  // Main state management using only useState
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('list'); // 'list' | 'add' | 'edit' | 'details'

  // Load students - triggered by button click only
  const handleLoadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      alert('Error loading students. Make sure JSON Server is running on port 3000.');
    }
  };

  // Navigate to Add Student screen
  const handleAddStudent = () => {
    setSelectedStudent(null);
    setCurrentScreen('add');
  };

  // Navigate to Edit Student screen
  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setCurrentScreen('edit');
  };

  // Navigate to View Details screen
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setCurrentScreen('details');
  };

  // Submit Add form
  const handleSubmitAdd = async (formData) => {
    try {
      await addStudent(formData);
      alert('Student added successfully! Please click "Load Students" to refresh the list.');
      setCurrentScreen('list');
    } catch (error) {
      alert('Error adding student. Please try again.');
    }
  };

  // Submit Edit form
  const handleSubmitEdit = async (formData) => {
    try {
      await updateStudent(selectedStudent.id, formData);
      alert('Student updated successfully! Please click "Load Students" to refresh the list.');
      setCurrentScreen('list');
    } catch (error) {
      alert('Error updating student. Please try again.');
    }
  };

  // Delete student
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully! Please click "Load Students" to refresh the list.');
      } catch (error) {
        alert('Error deleting student. Please try again.');
      }
    }
  };

  // Cancel form and go back to list
  const handleCancel = () => {
    setCurrentScreen('list');
    setSelectedStudent(null);
  };

  // Render appropriate screen based on currentScreen state
  return (
    <div className="app">
      <div className="container">
        {currentScreen === 'list' && (
          <StudentList
            students={students}
            onLoadStudents={handleLoadStudents}
            onAddStudent={handleAddStudent}
            onEditStudent={handleEditStudent}
            onDeleteStudent={handleDeleteStudent}
            onViewDetails={handleViewDetails}
          />
        )}

        {currentScreen === 'add' && (
          <StudentForm
            mode="add"
            onSubmit={handleSubmitAdd}
            onCancel={handleCancel}
          />
        )}

        {currentScreen === 'edit' && (
          <StudentForm
            mode="edit"
            initialData={selectedStudent}
            onSubmit={handleSubmitEdit}
            onCancel={handleCancel}
          />
        )}

        {currentScreen === 'details' && (
          <StudentDetails
            student={selectedStudent}
            onBack={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default App;
