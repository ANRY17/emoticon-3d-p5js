function setup() {
  createCanvas(400, 400, WEBGL); // Mode 3D menggunakan WebGL
}

function draw() {
  background(200); // Warna latar belakang
  
  // Rotasi untuk membuat emoticon terlihat dinamis
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);

  // Warna bola (emoticon)
  noStroke();
  fill(255, 204, 0); // Warna kuning
  sphere(100); // Membuat bola 3D sebagai dasar emoticon

  // Tambahkan wajah pada emoticon
  // Mata kiri
  push();
  fill(0); // Warna hitam untuk mata
  translate(-30, -30, 90); // Pindahkan ke posisi mata kiri
  sphere(15); // Mata kiri
  pop();

  // Mata kanan
  push();
  fill(0); // Warna hitam untuk mata
  translate(30, -30, 90); // Pindahkan ke posisi mata kanan
  sphere(15); // Mata kanan
  pop();

  // Mulut tersenyum
  push();
  fill(255, 0, 0); // Warna merah untuk mulut
  translate(0, 20, 90); // Pindahkan ke posisi mulut
  rotateX(PI / 2); // Putar agar busur mulut terlihat melengkung
  arc(0, 0, 90, 30, 0, PI); // Membuat mulut melengkung kecil
  pop();
}
