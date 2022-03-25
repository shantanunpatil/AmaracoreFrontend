fetch("https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts").then((data)=>{
    //console.log(data);
    return data.json();     //converted to object
}).then((objectData)=>{
   let tableData="";
   objectData.map((values)=>{       //Printing values to individual columns
    tableData+=`<tr>
    <td>${values.id}</td>
    <td><img src="${values.avatar}"/></td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td>${values.phone}</td>
    <td>${values.email}</td>
    <td>${values.company}</td>
    <td>${values.job_title}</td>
  </tr>`
   });
   document.getElementById("tBody").innerHTML=tableData     //Display data into table body
}).catch((error) => {         //Error handling 
  console.log(error);
});
