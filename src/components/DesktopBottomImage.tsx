import bottomImage from '../assets/bottom_image.jpg';

export default function DesktopBottomImage() {
  return (
    // 'hidden md:block' ensures this section ONLY appears on desktop
    <section className="hidden md:block relative w-full bg-black">
      {/* We removed the fixed height here so the image dictates the height naturally */}
      <div className="relative w-full">
         <img
            src={bottomImage}
            alt="Kazimi band atmospheric"
            // 'w-full h-auto' ensures the aspect ratio is perfectly preserved
            // 'block' removes any tiny gaps below the image
            className="w-full h-auto block"
            loading="lazy"
          />
          {/* Gradients overlay to blend top and bottom edges.
             Adjust 'opacity-80' if you want the image brighter or darker.
          */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>
    </section>
  );
}