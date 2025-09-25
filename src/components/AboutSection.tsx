import type { ReactElement } from 'react';

export default function AboutSection(): ReactElement {
  return (
    <section id="about" className="relative z-10 w-full py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-widest text-white">ABOUT</h2>

        <p className="text-white/90">
          Kazimi are the soundtrack to warp speed space travel - basslines built for dance floors, grooves bent out of shape by odd meters, and soaring melodies that feel both chaotic and precise. Written and produced by bassist Tom Chapman and drummer Jon Needham; their music is meticulous in detail yet bursting with playful energy. On stage, the pair expand into a larger band, with additional players covering the synths and textures that turn their sets into full-throttle raves.
        </p>

        <p className="text-white/90">
          The story began in Manchester, where the duo met at the Royal Northern College of Music and found their chemistry in a hidden New Orleans-style dive bar. Off the beaten track, it’s the kind of place you only know if you know. Sticky floors, cheap drinks, and half the city’s working musicians passing through on their nights off. Amid the chaos they discovered a shared musical DNA, pulling from the same influences and pushing grooves too far just to see where they’d land.
        </p>

        <p className="text-white/90">
          Writing sessions began in a basement studio, where their process started to take shape: one brings an idea, the other pushes it forward, and they record as they go, layering textures in Ableton with an 'any idea goes’ attitude. Sessions often turn into experiments, from hours chasing the perfect synth patch to sampling slamming doors. Their tracks carry the same energy. Storming Jupiter was imagined as the music blasting from spaceships in an interplanetary war, while Errant Nodes channels the mild frustration of tiny worker-robots wrestling with faulty circuits. It’s a sound world where meticulous craft collides with mischievous storytelling.
        </p>

        <p className="text-white/90">
          On stage, sets flow without interruption, tracks bleeding into one another like a DJ mix. At its peak, the sound is soaring cinematic melodies slicing over jagged grooves. The force of a basement rave executed with jazz-trained precision.
        </p>

        <p className="text-white/90">
          The first wave of releases arrives in late 2025, each single reflecting a different facet of Kazimi’s ethos. Storming Jupiter, Mauve Coconut and Errant Nodes map the terrain of Kazimi’s sound: punchy, unpredictable, and joyfully danceable. With live videos to accompany the singles and their debut headline show on the horizon, Kazimi are only just beginning.
        </p>
      </div>
    </section>
  );
}


