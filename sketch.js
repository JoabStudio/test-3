let particles = [];

        function setup() {
            createCanvas(windowWidth, windowHeight);
            for (let i = 0; i < 0; i++) {
                particles.push(new Particle());
            }
        }

        function draw() {
         
      

            for (let particle of particles) {
                particle.update();
                particle.display();
            }
        }

        function mousePressed() {
           background(random(255), random(255), random(255));
            // Add a burst of particles on mouse click
            for (let i = 0; i < 2; i++) {
                particles.push(new Particle(mouseX, mouseY));
            }
        }
  function touchStarted() {
            // The touches array contains information about all current touch points
            for (let i = 0; i < touches.length; i++) {
                let touchX = touches[i].x;
                let touchY = touches[i].y;
                handleInput(touchX, touchY);
            }
            // Prevent default to avoid scrolling/zooming on touch devices
            return false;
        }

        function handleInput(inputX, inputY) {
            background(random(255), random(255), random(255));
            for (let i = 0; i < 2; i++) {
                particles.push(new Particle(inputX, inputY));
            }
        }
        class Particle {
            constructor(x = random(width), y = random(height)) {
                this.position = createVector(x, y);
                this.velocity = createVector(random(-5, 5), random(-5, 5));
                this.size = random(1, 5);
                this.color = color(random(255), random(255), random(255),255);
            }

            update() {
                this.position.add(this.velocity);

                if (this.position.x < 0 || this.position.x > width) {
                    this.velocity.x *= -1;
                }

                if (this.position.y < 0 || this.position.y > height) {
                    this.velocity.y *= -1;
                }
            }

            display() {
                noStroke();
                fill(this.color);
                ellipse(this.position.x, this.position.y, this.size, this.size)
              this.position.add(this.velocity);
              this.velocity.mult(0.98);
              if (this.position.y > height - this.size / 2) {
            this.velocity.y *= -0.8; // Bounce with reduced energy loss
            this.position.y = height - this.size / 2; // Prevent particles from sinking into the ground
        }
               // Simulate bouncing off the walls
        if (this.position.x < this.size / 2 || this.position.x > width - this.size / 2) {
            this.velocity.x *= -1;
        }
              

             
            }
        }