import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import Quotes from "../assets/quotes.svg";

const testimonials = [
  {
    content:
      "WeKraft exceeded our expectations. The courses are fantastic and the toolkits adds a fun, hands-on element. Highly Recommended! ",
    author: {
      name: "Honorine Kamizi",
      location: "Parent - Nyagatare City",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
  {
    content:
      "We are thrilled with Wekraft. Our child is thriving and the toolkit brings learning to life with hands-on projects.  5 stars! ",
    author: {
      name: "Mugisha D'Amour",
      location: "Parent - Nyanza City",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
  {
    content:
      "Our child's journey with Wekraft has been incredible. They love the courses and projects. We're impressed with their progress!",
    author: {
      name: "Agakiza Christa",
      location: "Parent - Remera, Kigali",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
  {
    content:
      "Wekraft is a game-changer for kids. Excellent instructors, engaging courses, and 'the toolkit' keeps them excited to learn!",
    author: {
      name: "Thomas Iradukunda",
      location: "Parent - Kigali, Rwanda",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <div className="w-full font-cocon">
      <section className="mt-8 flex w-full gap-2 *:shrink-0 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <AnimatePresence key={testimonial.author.name} mode="popLayout">
            {index >= currentSlide && (
              <motion.div
                animate={{ opacity: 1, x: 0, scale: 1 }}
                className="flex space-y-8 w-full sm:w-[40%] flex-col items-center justify-between rounded-[44px] bg-white p-8 border border-[#3C91BA] border-dashed shadow-2xl dark:bg-neutral-0 shadow-[#FAB548]/25"
                exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                initial={{ opacity: 0, x: 0, scale: 0.8 }}
                layout={true}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <img src={Quotes} alt="double_quotes" width={40} height={40} />
                <p className="font-medium text-[#1E1E1E]/60 leading-6  dark:text-neutral-400 text-lg text-center">
                  {testimonial.content}
                </p>
                <div className="text-neutral-400 text-sm dark:text-neutral-500 flex items-center w-full">
                  <img
                    width={45}
                    height={45}
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    className="w-[45px] h-[45px] rounded-full bg-neutral-500/10 mr-3"
                  />
                  <div>
                    <p className="text-lg md:text-xl text-[#3C91BA]">
                      {testimonial.author.name}
                    </p>
                    <p className="text-[#1E1E1E]/40 text-sm md:text-lg">
                      {testimonial.author.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </section>
      <div className="flex items-center justify-center gap-2 mt-10">
        <button
          // variant="outline"
          className="group inline-flex size-10 items-center justify-center rounded-full p-1.5 bg-[#FAB548] text-white disabled:text-[#FAB548] disabled:bg-[#FAB548]/30"
          disabled={currentSlide === 0}
          onClick={handlePreviousSlide}
          type="button"
        >
          <ArrowLeftIcon className="transform-gpu stroke-primary-500 transition-colors group-disabled:stroke-[#FAB548]" />
        </button>
        <button
          // variant="outline"
          className="group inline-flex size-10 items-center justify-center rounded-full  p-1.5 bg-[#FAB548] text-white disabled:text-[#FAB548] disabled:bg-[#FAB548]/30"
          disabled={currentSlide === testimonials.length - 1}
          onClick={handleNextSlide}
          type="button"
        >
          <ArrowRightIcon className="transform-gpu stroke-primary-500 transition-colors group-disabled:stroke-[#FAB548]" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
