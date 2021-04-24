class Data {
  async getData() {
    try {
      let result = await fetch("facebook.json");
      let data = await result.json();
      const { users } = data;
      console.log(users);
      return users;
    } catch (error) {
      return error;
    }
  }
}

let allusers = document.querySelector(".general-container-user");
class UI {
  displayUser(data) {
    let result = "";
    data.forEach((user) => {
      result += `
        <div class="container-user">
       <div class="user-name">
         <p  class="user-picture">
          <img src=" ${user.src}">
       </p>
       <p class="name"> ${user.name}</p>
      </div>
         <i class="fa fas fa-circle"></i>
     </div>
     `;
    });
    allusers.innerHTML = result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const data = new Data();
  const ui = new UI();
  data.getData().then((data) => {
    return ui.displayUser(data);
  });
});

//   <div class="general-container-user">
//     <!--  start container-user  -->
//     <div class="container-user">
//       <div class="user-name">
//         <p  class="user-picture">
//           <img src="images/codingphase-joe.jpg" alt="no photo description available">
//         </p>
//         <p class="name">
//           codingphase
//         </p>
//       </div>
//         <i class="fa fas fa-circle"></i>
//     </div>
//   </div>
