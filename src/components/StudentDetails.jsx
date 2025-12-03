// StudentDetails.jsx - Read-only view of student details
import React from 'react';

const StudentDetails = ({ student, onBack }) => {
    return (
        <div className="student-details">
            <h2>Student Details</h2>

            <div className="details-card">
                <div className="detail-row">
                    <span className="detail-label">ID:</span>
                    <span className="detail-value">{student.id}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{student.name}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Section:</span>
                    <span className="detail-value">{student.section}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Marks:</span>
                    <span className="detail-value">{student.marks}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Grade:</span>
                    <span className="detail-value">{student.grade}</span>
                </div>
            </div>

            <div className="button-group">
                <button onClick={onBack} className="btn btn-secondary">
                    Back to List
                </button>
            </div>
        </div>
    );
};

export default StudentDetails;
