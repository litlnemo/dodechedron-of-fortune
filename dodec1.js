/* The Dodechedron of Fortune — app logic
   Question/answer content lives in dodec-questions.js (the HOUSES array).
   This file is just the math (unchanged) plus the UI wiring. */


// ---------- lookups into HOUSES ----------

function getHouseData(romanNumeral) {
  return HOUSES.find(function (h) { return h.roman === romanNumeral; });
}

function getQuestionData(romanNumeral, questionNum) {
  var house = getHouseData(romanNumeral);
  if (!house) return null;
  return house.questions.find(function (q) { return q.num === Number(questionNum); });
}


// ---------- populate the dropdowns from HOUSES ----------

function populateHouseSelect() {
  var houseSelect = document.getElementById("house");
  houseSelect.innerHTML = "";
  HOUSES.forEach(function (house) {
    var opt = document.createElement("option");
    opt.value = house.roman;
    opt.textContent = house.roman + " — " + house.theme;
    houseSelect.appendChild(opt);
  });
}

function populateQuestionSelect() {
  var houseSelect = document.getElementById("house");
  var qSelect = document.getElementById("q_num");
  var house = getHouseData(houseSelect.value);

  qSelect.innerHTML = "";
  if (!house) return;

  house.questions.forEach(function (q) {
    var opt = document.createElement("option");
    opt.value = q.num;
    opt.textContent = q.num + ". " + q.text;
    qSelect.appendChild(opt);
  });
}


// ---------- original math, unchanged ----------

function getNumbers() {
  var quesNum = document.getElementById("q_num").value;
  var houseNum = document.getElementById("house").value;
  return [quesNum, houseNum];

}

function rollD12() {
var dieResult = Math.floor(Math.random() * (12 - 1 + 1) + 1);
return dieResult;
}



function setHouse() {
    var theHouseNumber = getNumbers();
   switch(theHouseNumber[1]) {
    case 'I':
        return 1;
      break;
    case 'II':
      return 14;
      break;
    case 'III':
      return 27;
      break;
    case 'IV':
      return 40;
      break;
    case 'V':
      return 53;
      break;
    case 'VI':
      return 66;
      break;
    case 'VII':
      return 79;
      break;
    case 'VIII':
      return 92;
      break;
    case 'IX':
      return 105;
      break;
    case 'X':
      return 118;
      break;
    case 'XI':
      return 131;
      break;
    case 'XII':
      return 144;
      break;
    default:
      // code block
    }
  }

function horizCount() {
  var theQueryNum = getNumbers();
  var startSq = setHouse();
  var forwardCount = theQueryNum[0] - 1;
  var totalCount = forwardCount * 12 + startSq;
  if (totalCount > 144) {
    var correctedCount = totalCount - 144;
    
    var newSq = correctedCount;
    return newSq;
  } else {
    var newSq = totalCount; 
    return newSq;

  }
}

function vertCount() {
  var rollThatDie = rollD12();
  var forwardCount = rollThatDie - 1;
  var vertStart = horizCount();
  var vertMod ;

  while (forwardCount != 0) {
    vertMod = vertStart % 12;
    if (vertMod == 0) {
      vertStart = vertStart - 11;
      forwardCount = forwardCount - 1;
    }
    else {
      vertStart++;
      forwardCount = forwardCount - 1;
    }
    
    
    }
  return [vertStart, rollThatDie];

  } 


// ---------- animated die roll ----------
// Purely presentational: spins the die artwork, then hands off to the
// unchanged tellFortune() to do the actual math + reveal the verse.

var isRolling = false;

function animateDieAndTellFortune() {
  if (isRolling) return;

  var dieImg = document.getElementById("dieOverlay");
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!dieImg || prefersReducedMotion) {
    if (dieImg) dieImg.src = "assets/die-1.png";
    tellFortune();
    return;
  }

  isRolling = true;
  // die-1 is the frame that matches the case artwork at rest; 2/3/4 are
  // rotated "tumble" frames used only while the roll is in motion.
  var tumbleFrames = ["assets/die-2.png", "assets/die-3.png", "assets/die-4.png", "assets/die-1.png"];
  var frameIndex = 0;
  var tick = 0;
  var totalTicks = 16;
  var delay = 60;

  function step() {
    dieImg.src = tumbleFrames[frameIndex % tumbleFrames.length];
    frameIndex++;
    tick++;
    if (tick < totalTicks) {
      delay += 10; // ease out — the spin slows before it stops
      setTimeout(step, delay);
    } else {
      dieImg.src = "assets/die-1.png"; // settle back into alignment with the case art
      isRolling = false;
      tellFortune();
    }
  }

  step();
}


// ---------- output ----------

function tellFortune() {

  var theNumbers = getNumbers();
  var finalCount = vertCount();

  var question =  theNumbers[0];
  var house = theNumbers[1];
  var dieRoll = finalCount[1];

  var houseData = getHouseData(house);
  var questionData = getQuestionData(house, question);
  var questionText = questionData ? questionData.text : "(question text not found)";
  var categoryText = (questionData && questionData.category) ? " <span class=\"category-tag\">(" + questionData.category + ")</span>" : "";
  var houseLabel = houseData ? (house + " — " + houseData.theme) : house;

  document.getElementById("questionPrint").innerHTML =
    "<span class=\"house-label\">House " + houseLabel + "</span>" +
    "<span class=\"query-text\">“" + questionText + "”</span>" + categoryText;

  var answerPage = finalCount[0];
  var answerVerse = dieRoll;
  var answerEntry = ANSWERS.find(function(a) { return a.page === answerPage; });
  var verseText = answerEntry ? answerEntry.verses[answerVerse - 1] : null;
  var magicWord = answerEntry ? answerEntry.magicWord : "";

  var verseHtml;
  if (!verseText || verseText === "TODO") {
    verseHtml = "<p class=\"verse-text placeholder-note\">(This answer page hasn't been transcribed yet — it's on page " + answerPage +
      ", verse " + answerVerse + " of the original book. Magic word: <strong>" + magicWord + "</strong>)</p>";
  } else {
    var firstLetter = verseText.charAt(0);
    var restOfVerse = verseText.slice(1);
    verseHtml =
      "<p class=\"verse-text\">" +
        "<span class=\"dropcap\">" + firstLetter + "</span>" +
        restOfVerse +
        "<span class=\"quote-mark\">\u201d</span>" +
      "</p>" +
      "<p class=\"marginalia\">Page " + answerPage + ", verse " + answerVerse +
      " &mdash; <span class=\"magic-word\">" + magicWord + "</span></p>";
  }

  document.getElementById("answerPage").innerHTML = verseHtml;

  document.getElementById("workings").innerHTML =
    "Your house is " + house + " and so you start on number " + setHouse() +
    ". Your question number, " + question + ", means that you move to number " + horizCount() +
    "; your d12 roll, " + dieRoll + ", means you go to number " + finalCount[0] + ".";

}


// ---------- init ----------
// (typeface toggle logic now lives in typeface-toggle.js, shared with credits.html)

window.addEventListener("DOMContentLoaded", function () {
  populateHouseSelect();
  populateQuestionSelect();
  document.getElementById("house").addEventListener("change", populateQuestionSelect);
  initTypeface();
});
