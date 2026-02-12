const chemicals = [
  {
    name: "water",
    formula: "H₂O",
    facts: [
      "Water is literally everywhere and we drink it everyday.",
      "It doesn't mix with oil no matter how hard you shake it.",
      "Ice floats because it's actually less dense than liquid water.",
      "Water can absorb a lot of heat before getting hot.",
      ]
},
{
  name: "Copper",
  formula: "Cu",
  facts: [
    "copper is that reddish metal you see in wires and old pennies.",
    "it conducts electricity super well, which is why its in cables.",
    ]
},
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    facts: [
      "we breathe out CO₂ every time we exhale.",
      "plants eat CO₂",
      }
  function rendercards() {
    const container = document.getelementbyid("cards-container");

    chemicals.forEach(chemical => {
      const flipcard = document.createlement("div);
      flipcard.classname = "flip-card";

      const inner = document.createlelement("div");
      inner.classname = "flip-card-inner";

      const front = document.createelement("div");
      front.classname = "flip-card-front";

      const title = document.createelement("p");
      formula.innerHTML = chemical.formula;

      front.appendchild(title);
      front.appendchild(formula);

      const back = document.createlement("div");
      back.classname = "flip-card-back";

      const list = document.createlement("ul");
      chemical.facts.forEach(fact => {
        const li = document.createlement("li")
        li.textcontent = fact;
        list.appendchild(li);
      });

      back.appendchild(list);

      inner.appendchild(front);
      inner.appendchild(back);
      flipcard.appendchild(inner);
      container.appendchild(flipcard);
    });
  }

document.addEventListener("DOMContentLoaded", renderCards);
      
    
    
