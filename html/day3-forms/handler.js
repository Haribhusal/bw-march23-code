function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const form = event.target;
  const formData = new FormData(form);

  // Convert form data to an object
  const data = {};
  formData.forEach((value, key) => {
    if (data[key]) {
      // Handle multiple checkboxes (store as an array)
      data[key] = Array.isArray(data[key])
        ? [...data[key], value]
        : [data[key], value];
    } else {
      data[key] = value;
    }
  });

  console.log("Form Data:", data);
  fetch("backendurl/api/register", data);
}
