document.querySelectorAll(".country-box").forEach((box) => {
  box.addEventListener("toggle", () => {
    if (!box.open) return;

    const content = box.querySelector(".country-content");
    const cards = box.querySelectorAll(".source-card");

    if (!content) return;

    content.getAnimations().forEach((animation) => {
      animation.cancel();
    });

    cards.forEach((card) => {
      card.getAnimations().forEach((animation) => {
        animation.cancel();
      });
    });

    content.animate(
      [
        {
          opacity: 0,
          transform: "translateY(-8px) scaleY(0.96)"
        },
        {
          opacity: 1,
          transform: "translateY(0) scaleY(1)"
        }
      ],
      {
        duration: 280,
        easing: "ease-out",
        fill: "both"
      }
    );

    cards.forEach((card, index) => {
      card.animate(
        [
          {
            opacity: 0,
            transform: "translateY(-6px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 350,
          delay: index * 60,
          easing: "ease-out",
          fill: "both"
        }
      );
    });
  });
});