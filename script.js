const chemicals = [
  {
    name: "Copper",
    formula: "Cu",
    facts: [
      "Copper is that reddish metal you see in wires and old pennies.",
      "It conducts electricity super well, which is why it's in cables.",
    ]
  },
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    facts: [
      "We breathe out CO₂ every time we exhale.",
      "Plants eat CO₂ and turn it into oxygen for us.",
    ]
  },
  {
    name: "Water",
    formula: "H₂O",
    facts: [
      "Water is literally everywhere and we drink it everyday.",
      "It doesn't mix with oil no matter how hard you shake it.",
      "Ice floats because it's actually less dense than liquid water.",
      "Water can absorb a lot of heat before getting hot.",
    ]
  }
];

function renderCards() {
  const container = document.getElementById("cards-container");

  chemicals.forEach(chemical => {
    const flipCard = document.createElement("div");
    flipCard.className = "flip-card";

    const inner = document.createElement("div");
    inner.className = "flip-card-inner";

    const front = document.createElement("div");
    front.className = "flip-card-front";

    const title = document.createElement("h2");
    title.textContent = chemical.name;

    const formula = document.createElement("p");
    formula.innerHTML = chemical.formula;

    front.appendChild(title);
    front.appendChild(formula);

    const back = document.createElement("div");
    back.className = "flip-card-back";

    const list = document.createElement("ul");
    chemical.facts.forEach(fact => {
      const li = document.createElement("li");
      li.textContent = fact;
      list.appendChild(li);
    });

    back.appendChild(list);

    inner.appendChild(front);
    inner.appendChild(back);
    flipCard.appendChild(inner);
    container.appendChild(flipCard);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);
