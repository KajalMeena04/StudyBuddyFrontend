import React, { useState } from 'react';
import './PYQ.css'; // Import the CSS file

const PYQ = () => {
  // State for form values
  const [formData, setFormData] = useState({
    year: '',
    branch: '',
    examType: '',
    subject: '',
    semester: '',
    description: '',
    pdfFile: null
  });

  // State for search filters
  const [searchFilters, setSearchFilters] = useState({
    filterYear: '',
    filterSubject: '',
    filterExamType: '',
    filterSemester: ''
  });

  // Handle form input changes
  const handleFormChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!formData.year || !formData.branch || !formData.examType || 
        !formData.subject || !formData.semester || !formData.pdfFile) {
      alert('Please fill all required fields and upload a PDF file.');
      return;
    }
    
    // Here you would typically send this data to your backend
    alert('Question paper uploaded successfully!');
    
    // Reset form
    setFormData({
      year: '',
      branch: '',
      examType: '',
      subject: '',
      semester: '',
      description: '',
      pdfFile: null
    });
    
    // Reset file input (needs special handling since it's not controlled by React state directly)
    document.getElementById('pdfFile').value = '';
  };

  // Handle search filter changes
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setSearchFilters({
      ...searchFilters,
      [id]: value
    });
  };

  // Handle search button click
  const handleSearch = () => {
    // In a real application, you would send these filters to your backend
    console.log('Filters:', searchFilters);
    alert('Search filters applied. In a real application, results would be updated.');
  };

  return (
    <div className="bg-page">
      <div className="container">
        <header className="header">
          <h1 className="title">Previous Year Questions Portal</h1>
          <p className="subtitle">Access and manage previous year exam questions</p>
        </header>

        {/* Admin Section for Adding Questions */}
        <section className="card">
          <h2 className="section-title">Add New Question Paper</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="year">Year</label>
                <select 
                  id="year" 
                  className="form-select"
                  value={formData.year}
                  onChange={handleFormChange}
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="branch">Branch</label>
                <select 
                  id="branch" 
                  className="form-select"
                  value={formData.branch}
                  onChange={handleFormChange}
                >
                  <option value="">Choose Branch</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="CS">Computer Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="Electrical">Electrical Engineering</option>
                  <option value="ECE">Electronics and Communication Engineering</option>
                  <option value="IIOT">Industrial Internet of Things</option>
                  <option value="PIE">Production and Industrial Engineering</option>
                  <option value="M&C">Mathematics and Computing</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="examType">Exam Type</label>
                <select 
                  id="examType" 
                  className="form-select"
                  value={formData.examType}
                  onChange={handleFormChange}
                >
                  <option value="">Select Exam Type</option>
                  <option value="midterm">Midterm</option>
                  <option value="final">End Sem</option>
                  <option value="assignment">Assignment</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <select 
                  id="subject" 
                  className="form-select"
                  value={formData.subject}
                  onChange={handleFormChange}
                >
                  <option value="">All Subjects</option>
                  <option value="mathematics">Mathematics-I</option>
                  <option value="physics">Physics-I</option>
                  <option value="chemistry">Energy and Environment Science</option>
                  <option value="EP">Engineering Practice</option>
                  <option value="C">Basics of C Programming</option>
                  <option value="English">Communication skills</option>
                  <option value="finance">Finance</option>
                  <option value="Web D">Web Designing</option>
                  <option value="DSD">Digital System Design</option>
                  <option value="DS">Data Structures</option>
                  <option value="Business">Business</option>
                  <option value="Economics">Economics</option>
                  <option value="Mathematics">Mathematics-II</option>
                  <option value="Python">Python</option>
                  <option value="DAA">Design and Analysis Algorithm</option>
                  <option value="IOT">Internet Of Things</option>
                  <option value="Java">Java Programming</option>
                  <option value="Maths">Discrete Mathematics</option>
                  <option value="software">Software Engineering</option>
                  <option value="COA">Computer Organization and Architecture</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="semester">Semester</label>
                <select 
                  id="semester" 
                  className="form-select"
                  value={formData.semester}
                  onChange={handleFormChange}
                >
                  <option value="">Select Semester</option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="pdfFile">Upload PDF</label>
              <input 
                type="file" 
                id="pdfFile" 
                accept=".pdf" 
                className="form-input"
                onChange={handleFormChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="description">Description (Optional)</label>
              <textarea 
                id="description" 
                rows="3" 
                className="form-textarea" 
                placeholder="Add notes or details about this question paper..."
                value={formData.description}
                onChange={handleFormChange}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Upload Question Paper
            </button>
          </form>
        </section>
        
        {/* Search & Filter Section */}
        <section className="card">
          <h2 className="section-title">Search Question Papers</h2>
          <div className="search-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="filterYear">Year</label>
              <select 
                id="filterYear" 
                className="form-select"
                value={searchFilters.filterYear}
                onChange={handleFilterChange}
              >
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="filterSubject">Subject</label>
              <select 
                id="filterSubject" 
                className="form-select"
                value={searchFilters.filterSubject}
                onChange={handleFilterChange}
              >
                <option value="">All Subjects</option>
                <option value="mathematics">Mathematics-I</option>
                <option value="physics">Physics-I</option>
                <option value="chemistry">Energy and Environment Science</option>
                <option value="EP">Engineering Practice</option>
                <option value="C">Basics of C Programming</option>
                <option value="English">Communication skills</option>
                <option value="finance">Finance</option>
                <option value="Web D">Web Designing</option>
                <option value="DSD">Digital System Design</option>
                <option value="DS">Data Structures</option>
                <option value="Business">Business</option>
                <option value="Economics">Economics</option>
                <option value="Mathematics">Mathematics-II</option>
                <option value="Python">Python</option>
                <option value="DAA">Design and Analysis Algorithm</option>
                <option value="IOT">Internet Of Things</option>
                <option value="Java">Java Programming</option>
                <option value="Maths">Discrete Mathematics</option>
                <option value="software">Software Engineering</option>
                <option value="COA">Computer Organization and Architecture</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="filterExamType">Exam Type</label>
              <select 
                id="filterExamType" 
                className="form-select"
                value={searchFilters.filterExamType}
                onChange={handleFilterChange}
              >
                <option value="">All Types</option>
                <option value="midterm">Midterm</option>
                <option value="final">End Sem</option>
                <option value="assignment">Assignment</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="filterSemester">Semester</label>
              <select 
                id="filterSemester" 
                className="form-select"
                value={searchFilters.filterSemester}
                onChange={handleFilterChange}
              >
                <option value="">All Semesters</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
                <option value="7">Semester 7</option>
                <option value="8">Semester 8</option>
              </select>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            className="btn btn-success"
          >
            Search
          </button>
        </section>
      </div>
    </div>
  );
};

export default PYQ;