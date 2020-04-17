console.log("start");

document.addEventListener("DOMContentLoaded", () => {
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const four = document.querySelector(".four");
  const five = document.querySelector(".five");

  let timer = 500;

  one.addEventListener(
    "bubblingcapturing",
    () => {
      setTimeout(() => {
        one.classList.add("active");
      }, (timer += 500));
      console.log(
        `Otrzymano zdanienie - el.1, faza ${translatePhase(event.eventPhase)}`
      );
    },
    { capture: true }
  );

  two.addEventListener(
    "bubblingcapturing",
    () => {
      setTimeout(() => {
        two.classList.add("active");
      }, (timer += 500));
      console.log(
        `Otrzymano zdanienie - el.2, faza ${translatePhase(event.eventPhase)}`
      );
    },
    { capture: true }
  );

  three.addEventListener(
    "bubblingcapturing",
    () => {
      setTimeout(() => {
        three.classList.add("active");
      }, (timer += 500));
      console.log(
        `Otrzymano zdanienie - el.3, faza ${translatePhase(event.eventPhase)}`
      );
    },
    { capture: true }
  );

  four.addEventListener(
    "bubblingcapturing",
    () => {
      setTimeout(() => {
        four.classList.add("active");
      }, (timer += 500));
      console.log(
        `Otrzymano zdanienie - el.4, faza ${translatePhase(event.eventPhase)}`
      );
    },
    { capture: true }
  );

  five.addEventListener(
    "bubblingcapturing",
    () => {
      setTimeout(() => {
        five.classList.add("active");
      }, (timer += 500));
      console.log(
        `Otrzymano zdanienie - el.5, faza ${translatePhase(event.eventPhase)}`
      );
    },
    { capture: true }
  );

  one.addEventListener("bubblingcapturing", () => {
    setTimeout(() => {
      setTimeout(() => {
        one.classList.remove("active");
      });
    }, (timer += 500));
    console.log(
      `Otrzymano zdanienie - el.1, faza ${translatePhase(event.eventPhase)}`
    );
  });

  two.addEventListener("bubblingcapturing", () => {
    setTimeout(() => {
      setTimeout(() => {
        two.classList.remove("active");
      });
    }, (timer += 500));
    console.log(
      `Otrzymano zdanienie - el.2, faza ${translatePhase(event.eventPhase)}`
    );
  });

  three.addEventListener("bubblingcapturing", () => {
    setTimeout(() => {
      setTimeout(() => {
        three.classList.remove("active");
      });
    }, (timer += 500));
    console.log(
      `Otrzymano zdanienie - el.3, faza ${translatePhase(event.eventPhase)}`
    );
  });

  four.addEventListener("bubblingcapturing", () => {
    setTimeout(() => {
      setTimeout(() => {
        four.classList.remove("active");
      });
    }, (timer += 500));
    console.log(
      `Otrzymano zdanienie - el.4, faza ${translatePhase(event.eventPhase)}`
    );
  });

  five.addEventListener("bubblingcapturing", () => {
    setTimeout(() => {
      setTimeout(() => {
        five.classList.remove("active");
      });
    }, (timer += 500));
    console.log(
      `Otrzymano zdanienie - el.5, faza ${translatePhase(event.eventPhase)}`
    );
  });

  function translatePhase(eventPhase) {
    switch (eventPhase) {
      case 1:
        return "capturing";
      case 2:
        return "at target";
      case 3:
        return "bubbling;";
    }
  }

  five.dispatchEvent(new CustomEvent("bubblingcapturing", { bubbles: true }));
});
