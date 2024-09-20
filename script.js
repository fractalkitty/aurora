//stream of consciousness code - not cleaned up or organized. 
let myLetters;
let stars = [];
let aur, w;
function preload() {
  myLetters = loadFont("AuroraRegular.ttf");
}
function setup() {
  textAlign(CENTER);
  nPages = 8;
  describe(
    "a 7 page zine with haiku. page 1 is a title with aurora colors, page 2 is part of a sun beaming out particles, page 3 is mostly void with particle paths, page 4 is of earth and its orbit, page 5-8 are auroras."
  );
  textFont(myLetters);
  cnv = createCanvas(850, 1100 * nPages);
  background(0);
  noLoop();
  aur = [];
  for (let i = 0; i < 1000; i++) {
    stars[i] = {
      x: random(0, width),
      y: random(0, height),
      a: random(5, 255),
      s: random(0.5, 2)
    };
  }
  for (let i = 0; i < width; i += 10) {
    aur[i / 10] = {
      x: i,
      y: 200 * sin(i / 5) + 300,
      con: abs(randomGaussian(300, 500))
    };
  }
}

function draw() {
  background(0);
  stroke(50, 60, 70);
  for (let i = 1; i < nPages - 1; i++) {
    line(0, 1100 * i, width, 1100 * i);
  }
  noStroke();
  t = random(); //frameCount / 10;
  //stars
  for (let i = 0; i < stars.length; i++) {
    fill(255, 255, 255, stars[i].a);
    circle(stars[i].x, stars[i].y, stars[i].s);
  }
  page1();
  translate(0, 1100);
  page2();
  translate(0, 1100);
  page3();
  translate(0, 1100);
  page4();
  translate(0, 1100);
  page5();
  translate(0, 1100);
  page6();
  translate(0, 1100);
  page7();
  translate(0, 1100);
  page8();
}

function page1() {
  push();
  fill(155, 205, 255, 150);
  stroke(255);
  textSize(150);
  text("Aurora", width / 2, 1100 / 3);
  textSize(70);
  text("Sophia Wood", width / 2, 1100 - 200);
  noStroke();
  for (let i = 0; i < aur.length; i += 5) {
    for (let j = 0; j < aur[i].con; j += 12) {
      fill(
        190 * abs(sin(t + i / 921 - j / (300 + i / 40))),
        155 * abs(cos(t + i / 1500 - j / 700)),
        255 * abs(cos(t + i / 2700 - j / 300)),
        1
      );
      circle(
        aur[i].x + 50 * sin(j / 100 + t),
        aur[i].y - j - 500 * cos(i + j / 2),
        20 + 100 * sin(i / 100 + j / 100)
      );
      circle(
        aur[i].x + 50 * sin(j / 100 + t),
        aur[i].y - j + 500 * cos(i / 10000),
        300 + 250 * sin(20 + i / 100 + j / 100 + 100) * cos(t)
      );
    }
  }

  stroke(200, 220, 235);

  pop();
}
function page2() {
  push();

  noStroke();
  for (let i = 0; i < aur.length; i += 2) {
    stroke(
      100 * abs(sin(t * 5 + i / 92)),
      100 + 155 * abs(cos(t * 5 + i / 150)),
      150 + 155 * abs(cos(t * 5 + i / 270)),
      40 * cos(i / 1000)
    );
    noFill();
    beginShape();
    for (let j = 0; j < 100; j += 3) {
      x1 =
        width / 2 +
        (width / 2 + 250) * cos(i / 10) +
        500 * sin(j / 1200) +
        400 * sin(j / 600);
      y1 = abs((width / 2 + 100) * sin(i / 1000) + +100 * abs(tan(i * j)));
      vertex(x1, min(2200, y1));
    }
    endShape();
  }
  fill(0);
  // arc(width/2,0,00,300,0,-PI)
  stroke(200, 220, 235);
  for (let i = 1; i < nPages - 1; i++) {
    line(0, 1100 * i, width, 1100 * i);
  }
  for (let i = 0; i < aur.length; i += 1) {
    noStroke();
    fill(
      100 * abs(sin(t * 5 + i / 92)),
      50 + 155 * abs(cos(t * 5 + i / 150)),
      70 + 155 * abs(cos(t * 5 + i / 270)),
      5 * cos(i / 1000)
    );
    arc(
      width / 2 + 150 * sin(i / 500 + t),
      0 - 5 * cos(i + i / 2),
      width + 500 * sin(i / 100 + i / 100),
      width + 300 * sin(i / 100 + i / 100),
      0,
      -PI
    );
  }
  fill(0);
  textSize(60);
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  text("your breath - raidance", width / 2, 1100 / 3);
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  textSize(50);
  text("a light - a wind from your core", width / 2, 1100 - 400);
  text("begins a journey", width / 2, 1100 - 200);
  pop();
}
function page3() {
  push();
  fill(0);
  textSize(60);
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  text("through the space between", width / 2, 100);
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  textSize(50);
  text("your", 100, 300);
  text("ancient", 180, 480);
  text("particles", width / 2, 600);
  text("flow", width - 200, 1100 - 400);
  text("traversing the void", width / 2, 1100 - 100);
  pop();
}
function page4() {
  push();
  fill(0);
  textSize(80);
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  text("toward our existence", width / 2, 100);
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  textSize(50);
  text("on this small, beautiful, sphere", width / 2, 450);
  b4 = random(10, 50);
  stroke(100, 100, 100, 100);
  noFill();
  arc(width / 2, 0, 100, 1100 + 10, 0, -PI);
  for (let i = 0; i < 100; i++) {
    noStroke();
    fill(0, 20, 220 + b4, 5 + i / 20);
    circle(width / 2, 1100 / 2, 60 - i / 2);
    fill(255, 255, 255, 2);
    circle(width / 2, 1100 / 2 + 30, 10 - i / 40);
  }
  fill(200, 240, 255, 100);
  stroke(255, 255, 255, 200);
  textSize(50);
  text("a vessel of life", width / 2, 1100 - 200);
  pop();
}
function page5() {
  push();
  fill(155, 205, 255, 150);
  stroke(255);
  textSize(60);
  text("and then it happens", width / 2, 1100 / 3);
  textSize(60);
  text("silken aurora rivers", width / 2, 600);
  text("stretch", width / 3, 800);
  text("and flow", width / 2, 900);
  text("with light", width / 2 + 100, 1000);
  noStroke();
  for (let i = 0; i < aur.length; i += 5) {
    for (let j = 0; j < aur[i].con; j += 10) {
      fill(
        190 * abs(sin(t + i / 921 - j / (300 + i / 40))),
        155 * abs(cos(t + i / 1500 - j / 700)),
        255 * abs(cos(t + i / 2700 - j / 300)),
        1
      );
      circle(
        aur[i].x + 50 * sin(j / 100 + t),
        aur[i].y - j - 500 * cos(i + j / 2),
        20 + 100 * sin(i / 100 + j / 100)
      );
      circle(
        aur[i].x + 50 * sin(j / 100 + t),
        aur[i].y - j + 500 * cos(i / 10000),
        300 + 50 * sin(20 + i / 100 + j / 100 + 100) * cos(t)
      );
    }
  }

  stroke(200, 220, 235);

  pop();
}

function page6() {
  push();
  fill(155, 205, 255, 150);
  stroke(255);
  textSize(60);
  text("", width / 2, 1100 / 3);
  textSize(60);
  text("and so we breathe - deep", width / 2, 700);
  text("bringing your essence into", width / 2, 800);
  text("our very being", width / 2, 900);

  noStroke();
  for (let i = 0; i < aur.length; i += 5) {
    for (let j = 0; j < aur[i].con; j += 10) {
      fill(
        190 * abs(sin(t + i / 821 - j / (200 + i / 45))),
        155 * abs(cos(t + i / 1300 - j / 500)),
        255 * abs(cos(t + i / 2200 - j / 300)),
        1
      );
      circle(
        aur[i].x + 90 * cos(j / 70 - t) * sin(j / 90),
        aur[i].y - j - 500 * sin(i + j / 2),
        20 + 100 * sin(i / 100 + j / 100)
      );
      circle(
        aur[i].x + 50 * sin(j / 80 + t) * cos(j / 100),
        aur[i].y - j + 500 * cos(i / 9000),
        300 + 80 * sin(20 + i / 100 + j / 100 + 100) * cos(t - i)
      );
    }
  }

  stroke(200, 220, 235);

  pop();
}

function page7() {
  push();

  noStroke();
  for (let i = 0; i < aur.length; i += 5) {
    for (let j = 0; j < aur[i].con; j += 10) {
      fill(
        190 * abs(sin(t + i / 1111 - j / (300 + i / 50))),
        155 * abs(cos(t + i / 1800 - j / 700)),
        255 * abs(cos(t + i / 2650 - j / 300)),
        1
      );
      circle(
        aur[i].x + 50 * sin(j / 100 + t),
        aur[i].y - j - 500 * cos(i + j / 2),
        20 + 90 * sin(i / 100 + j / 100)
      );
      circle(
        aur[i].x + 90 * sin(j / 100 + t),
        aur[i].y - j + 500 * cos(i / 8000),
        200 + 150 * sin(20 + i / 80 + j / 100 + 100) * cos(t)
      );
    }
  }

  stroke(200, 220, 235);

  pop();
}

function page8() {
  push();

  noStroke();
  for (let i = 0; i < aur.length; i += 5) {
    for (let j = 0; j < aur[i].con; j += 10) {
      fill(
        190 * abs(sin(t + i / 921 - j / (300 + i / 40))),
        155 * abs(cos(t + i / 1500 - j / 700)),
        255 * abs(cos(t + i / 2700 - j / 300)),
        1
      );
      circle(
        aur[i].x + 150 * cos(j / 80 - 2 * t),
        aur[i].y - j - 500 * sin(i + j / 3),
        20 + 100 * sin(i / 100 + j / 100)
      );
      circle(
        aur[i].x + 50 * cos(j / 90 + t),
        aur[i].y - j + 500 * sin(i / 10000),
        300 + 50 * sin(20 + i / 90 + j / 90 + 100) * cos(t)
      );
    }
  }

  noStroke();
  fill(255, 255, 255, 200);
  textSize(20);

  textFont("roboto");
  text("fractalkitty.com", 100, 1100 - 100);
  text("made with p5js", width - 100, 1100 - 100);

  pop();
}

function keyPressed() {
  if (keyCode === 83) {
    save(cnv, "aurora", "png");
  }
  if(keyCode ===32){
    setup()
    draw()
  }
}

