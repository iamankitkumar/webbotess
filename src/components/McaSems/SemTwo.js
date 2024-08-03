import React from 'react'

const SemTwo = () => {

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1NTvKSHh7AHgeVOFE4fqVIXRvMs6mOnUY/view?usp=drivesdk';
    link.download = 'Semester 1.pdf';
    link.click();
  };

  <div>
    <div>Java</div>
    <button onClick={downloadPDF}>
      Download PDF
    </button>
  </div>
  return (
    <div>SemTwo</div>
  )
}

export default SemTwo