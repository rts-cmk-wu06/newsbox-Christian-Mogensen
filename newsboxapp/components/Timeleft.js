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

  return (
    <div className="fixed bottom-10 right-10 text-sm opacity-20 font-bold">
      {test}
    </div>
  );
};

export default Timeleft;
