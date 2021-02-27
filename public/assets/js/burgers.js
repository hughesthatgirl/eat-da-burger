// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  // UPDATE
  // const changeSleepBtns = document.querySelectorAll('.change-sleep');

  // Set up the event listener for the create button
  // if (changeSleepBtns) {
  //   changeSleepBtns.forEach((button) => {
  //     button.addEventListener('click', (e) => {
  //       // Grabs the id of the element that goes by the name, "id"
  //       const id = e.target.getAttribute('data-id');
  //       const newSleep = e.target.getAttribute('data-newsleep');

  //       const newSleepState = {
  //         sleepy: newSleep,
  //       };

  //       fetch(`/api/cats/${id}`, {
  //         method: 'PUT',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },

  //         // make sure to serialize the JSON body
  //         body: JSON.stringify(newSleepState),
  //       }).then((response) => {
  //         // Check that the response is all good
  //         // Reload the page so the user can see the new quote
  //         if (response.ok) {
  //           console.log(`changed sleep to: ${newSleep}`);
  //           location.reload('/');
  //         } else {
  //           alert('something went wrong!');
  //         }
  //       });
  //     });
  //   });
  // }

  // CREATE/ADD
  const addBurgerBtn = document.getElementById('create-form');

  if (addBurgerBtn) {
    addBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      const newBurger = {
        burger_name: document.getElementById('burger').value.trim(),
      };
      fetch('/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById('burger').value = '';
        console.log('Created a new cat!');
        location.reload();
      });
    });
  }

  // DELETE
  const deleteCatBtns = document.querySelectorAll('.burgers__button--devour');

  deleteCatBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      fetch('/', {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);
        location.reload();
      });
    });
  });
});
