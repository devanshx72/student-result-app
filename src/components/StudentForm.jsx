// StudentForm.jsx - Form for Add and Edit modes
import React, { useState } from 'react';

const StudentForm = ({ mode, initialData, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState(
        initialData || {
            name: '',
            section: '',
            marks: '',
            grade: '',
        }
    );

    const calculateGrade = (marks) => {
        const m = parseFloat(marks);
        if (isNaN(m)) return '';
        if (m >= 90) return 'A';
        if (m >= 80) return 'B';
        if (m >= 70) return 'C';
        if (m >= 60) return 'D';
        return 'F';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'marks') {
            const grade = calculateGrade(value);
            setFormData({
                ...formData,
                marks: value,
                grade: grade
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.section || !formData.marks || !formData.grade) {
            alert('Please fill in all fields');
            return;
        }

        onSubmit(formData);
    };

    return (
        <div className="student-form">
            <h2>{mode === 'add' ? 'Add New Student' : 'Edit Student'}</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter student name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="section">Section:</label>
                    <input
                        type="text"
                        id="section"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        placeholder="Enter section (e.g., A, B, C)"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="marks">Marks:</label>
                    <input
                        type="number"
                        id="marks"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        placeholder="Enter marks (0-100)"
                        min="0"
                        max="100"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Grade:</label>
                    <input
                        type="text"
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        readOnly
                        className="bg-gray-100 cursor-not-allowed"
                        placeholder="Grade will be calculated automatically"
                    />
                </div>

                <div className="button-group">
                    <button type="submit" className="btn btn-primary">
                        {mode === 'add' ? 'Add Student' : 'Update Student'}
                    </button>
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
