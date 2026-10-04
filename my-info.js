/* =====================================================================
   ★★★  THIS IS THE ONLY FILE YOU NEED TO EDIT!  ★★★
   =====================================================================

   HOW TO EDIT:
   • Change the words between the "quote marks".
   • Keep the quote marks "  " and the commas , at the end of lines.
   • Save this file, then refresh index.html in your browser to see it.

   TIP: If your page goes blank, you probably deleted a quote mark,
        a comma, or a bracket. Press Ctrl+Z (or Cmd+Z) to undo!
   ===================================================================== */

const myInfo = {

  /* ---------- 1. ABOUT YOU (the big header at the top) ---------- */
  name:      "Your Name",           // EDIT: Your first name
  nickname:  "Your Nickname",       // EDIT: What your friends call you
  grade:     "6th",                 // EDIT: 6th, 7th, or 8th
  school:    "Your School Name",    // EDIT: The name of your school
  iLove:     "something you love",  // EDIT: Finishes the sentence "I love ___"

  /* ---------- 2. YOUR PHOTO ----------
     Put a picture in the "images" folder, then type its name here.
     Example: "images/me.png"
     Leave it as "" (empty) to show the camera placeholder. */
  photo: "",

  /* ---------- 3. YOUR FAVORITE COLOR ----------
     This color is used to highlight your name and your Color card.
     Type a color name like "hotpink", "skyblue", "limegreen", "orange"
     or a color code like "#FF5DA2". */
  favoriteColor: "#FF5DA2",

  /* ---------- 4. ABOUT ME (a short paragraph or two) ---------- */
  aboutMe: [
    "Write 3–4 sentences about yourself here. Who is in your family? Do you have any pets? What do you like to do after school?",
    "Add a second paragraph if you want — maybe about a trip you loved or something you are proud of."
  ],

  /* ---------- 5. THREE WORDS THAT DESCRIBE YOU ---------- */
  threeWords: ["Funny", "Creative", "Kind"],

  /* ---------- 6. QUICK FACTS ---------- */
  birthdayMonth: "Month",
  hometown:      "City, State",
  languages:     "English, Spanish",

  /* ---------- 7. YOUR FAVORITE THINGS ----------
     Each { ... } is one card on your page.
     • label   = what kind of favorite it is
     • answer  = YOUR favorite
     • because = why you like it
     • icon    = pick one: food, color, animal, school, book, movie,
                 music, game, star, heart, sport, art
     Want another card? Copy one whole { ... }, block (with its comma)
     and paste it underneath! */
  favorites: [
    { label: "Food",           answer: "Your favorite food",    because: "it's so good!",                icon: "food"   },
    { label: "Color",          answer: "Your favorite color",   because: "it makes me happy",            icon: "color"  },
    { label: "Animal",         answer: "Your favorite animal",  because: "they're so cute",              icon: "animal" },
    { label: "School Subject", answer: "Your favorite subject", because: "I learn cool stuff",           icon: "school" },
    { label: "Book",           answer: "Your favorite book",    because: "I couldn't put it down",       icon: "book"   },
    { label: "Movie or Show",  answer: "Your favorite movie",   because: "I've watched it 10 times",     icon: "movie"  },
    { label: "Song or Artist", answer: "Your favorite song",    because: "it's always stuck in my head", icon: "music"  },
    { label: "Game or Sport",  answer: "Your favorite game",    because: "I'm really good at it",        icon: "game"   },
  ],

  /* ---------- 8. FUN FACTS (add as many as you want!) ---------- */
  funFacts: [
    "A surprising fact about you — like a hidden talent or something you collect.",
    "Something funny that happened to you, or a place you've visited.",
    "Something most people don't know about you!",
  ],

  /* ---------- 9. SKILLS ---------- */
  goodAt:       ["Drawing", "Soccer", "Making people laugh", "Math"],
  wantToLearn:  ["Guitar", "Coding", "A new language", "Skateboarding"],

  /* ---------- 10. WHEN I GROW UP ---------- */
  dreamJob:    "scientist",         // EDIT: your dream job (example: "teacher", "pro gamer", "vet")
  dreamReason: "Tell us why! What would you do every day? Who would you help?",

};

/* =====================================================================
   DONE! That's it! Save this file and refresh your page.
   Want to change the page colors? Open style.css (look at the top).
   ===================================================================== */
