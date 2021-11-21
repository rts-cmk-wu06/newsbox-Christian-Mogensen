const Timeleft = () => {
  const today = new Date();
  var aflevering = new Date(today.getFullYear(), 11, 3);
  if (today.getMonth() == 11 && today.getDate() > 3) {
    aflevering.setFullYear(aflevering.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;
  const test =
    Math.ceil((aflevering.getTime() - today.getTime()) / one_day) +
    " dage tilbage til aflevering";

//     // Set the date we're counting down to
// var countDownDate = new Date("dec 3, 2021 14:30:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   const test = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     test = "EXPIRED";
//   }
// }, 1000);

  return (
    <div className="fixed bottom-10 right-10 text-sm opacity-20 font-bold">
      {test}
    </div>
  );
};

export default Timeleft;
