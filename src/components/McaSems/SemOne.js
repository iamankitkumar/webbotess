import React from 'react';


const SemOne = () => {

  const downloadPDF = () => {
    const nameOfSubject = ""
    const link = document.createElement('a');

    link.href = 'https://drive.google.com/drive/folders/1AnQjEjsVJpA_IthCp3UmvvAsfCrlnpCL';
    link.download = 'Semester 1.pdf';
    link.click();
  };

  return (
    <div>Subjects
      <div>
        <div>Mathematical Foundation Course For Computer Science</div>
        <button onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
      <div>
        <div>Advanced Java</div>
        <button onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
      <div>
        <div>Web Technologies</div>
        <button onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
      <div>
        <div>Advanced Database Management System</div>
        <button onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
      <div>
        <div>Software Project Management</div>
        <button onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  )
}

export default SemOne