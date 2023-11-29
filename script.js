$(document).ready(function() {
    $('#donationForm').submit(function(event) {
      event.preventDefault();
      const amount = parseInt($('#amount').val());
      if (amount > 0) {
        updateProgressBar(amount);
      } else {
        alert('Please enter a valid donation amount.');
      }
    });
  });


  

  
  function updateProgressBar(amount) {
    const totalGoal = 1000; // Set your donation goal amount
    const progressPercentage = Math.min((amount / totalGoal) * 100, 100);
    $('#progressBar').css('width', progressPercentage + '%');
    $('#progressText').text(progressPercentage.toFixed(1) + '% funded');
  }
  
