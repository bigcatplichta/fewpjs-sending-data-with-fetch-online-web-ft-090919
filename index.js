function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
    
    const configObj = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
       
    let data = fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object);
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
        });
        
    return data
}
