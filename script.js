function showPrice() {
    const courseSelect = document.getElementById('course');
    const selectedCourse = courseSelect.options[courseSelect.selectedIndex].value;
    const coursePriceDiv = document.getElementById('course-price');
  
    // Set the prices for ChatGPT and Freelancing courses
    const chatGptPrice = '$100'; // Replace with the actual price for ChatGPT course
    const freelancingPrice = '$150'; // Replace with the actual price for Freelancing course
  
    if (selectedCourse === 'ChatGPT') {
      document.getElementById('course-price').style.display = 'block';
      document.getElementById('course-price').textContent = `Price: ${chatGptPrice}`;
      document.getElementById('course-price').style.backgroundColor = '#007BFF';
    } else if (selectedCourse === 'Freelancing') {
      document.getElementById('course-price').style.display = 'block';
      document.getElementById('course-price').textContent = `Price: ${freelancingPrice}`;
      document.getElementById('course-price').style.backgroundColor = '#FFC107';
    } else {
      document.getElementById('course-price').style.display = 'none';
    }
  }
  






  function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
  
    const formData = {
      name: name,
      email: email,
      course: course
    };
  
    // Here, you can use the formData object to save the data.
    // For demonstration purposes, we log the data to the console.
    console.log(formData);
  }
  