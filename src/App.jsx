// App.jsx - Main application component with state management
import { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';
import './App.css';

function App() {
  // Main state management
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('list'); // 'list' | 'add' | 'edit'
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load students automatically on mount
  useEffect(() => {
    loadStudents();
  }, []);

  // Load students function
  const loadStudents = async () => {
    setLoading(true);
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error loading students:', error);
      alert('Error loading students. Make sure JSON Server is running on port 3000.');
    } finally {
      setLoading(false);
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

  // Open View Details Modal
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setShowDetailsModal(true);
  };

  // Close View Details Modal
  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setSelectedStudent(null);
  };

  // Submit Add form
  const handleSubmitAdd = async (formData) => {
    try {
      await addStudent(formData);
      alert('Student added successfully!');
      await loadStudents(); // Auto-refresh
      setCurrentScreen('list');
    } catch (error) {
      alert('Error adding student. Please try again.');
    }
  };

  // Submit Edit form
  const handleSubmitEdit = async (formData) => {
    try {
      await updateStudent(selectedStudent.id, formData);
      alert('Student updated successfully!');
      await loadStudents(); // Auto-refresh
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
        alert('Student deleted successfully!');
        await loadStudents(); // Auto-refresh
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
            onLoadStudents={loadStudents} // Keep button but it's optional now
            onAddStudent={handleAddStudent}
            onEditStudent={handleEditStudent}
            onDeleteStudent={handleDeleteStudent}
            onViewDetails={handleViewDetails}
            loading={loading}
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

        {showDetailsModal && selectedStudent && (
          <StudentDetails
            student={selectedStudent}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;
