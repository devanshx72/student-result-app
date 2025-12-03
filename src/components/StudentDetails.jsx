// StudentDetails.jsx - Modal Popup View
import React from 'react';

const StudentDetails = ({ student, onClose }) => {
    if (!student) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
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

                <div className="button-group" style={{ justifyContent: 'flex-end' }}>
                    <button onClick={onClose} className="btn btn-secondary">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
