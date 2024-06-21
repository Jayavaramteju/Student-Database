const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

studentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const rollNumber = document.getElementById('rollNumber').value;
  const course = document.getElementById('course').value;
  const Date = document.getElementById('Enrollment Date').value;
  const Contact = document.getElementById('Contact').value;
  const Address = document.getElementById('Address').value;

  const studentInfo = document.createElement('div');
  studentInfo.classList.add('student');
  studentInfo.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Enrollment Date:</strong> ${Date}</p>
    <p><strong>Contact:</strong> ${Contact}</p>
    <p><strong>Address:</strong> ${Address}</p>
  `;

  studentList.appendChild(studentInfo);

  // Clear form fields after adding student
  studentForm.reset();
});
