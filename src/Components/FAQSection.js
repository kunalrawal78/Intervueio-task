import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const faqs = [
  {
    question: "How do I schedule an interview?",
    answer:
      "You can schedule an interview by logging into your account and choosing a suitable time slot from the available options.",
  },
  {
    question: "Will I be charged per interview?",
    answer:
      "Yes, each interview is charged individually based on the type and duration.",
  },
  {
    question: "Can I get a trial for On-demand interviews?",
    answer:
      "Yes, we offer a free trial for first-time users for on-demand interviews. Contact our representative to know more.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col md:flex-row px-6 md:px-20 py-10 md:py-16 gap-10 rounded-2xl shadow-sm"
      style={{ background: "#fdf2f8" }} 
    >
   
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-normal text-black mb-4">FAQs</h2>
        <p className="text-gray-600 mb-8 text-base leading-relaxed"
        style={{color:'gray'}}
        >
          Here are frequently asked questions to clear all your doubts.
        </p>
        <div>
          <p className="text-xl font-normal text-black mb-2">
            Still have doubts?
          </p>
          <button
            href="#"
            className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2"
          >
            <BsFillTelephoneFill className="text-xl " style={{color:"#3674B5"}} />
            <span style={{color:"#3674B5"}}>
                     Talk to our representative
            </span>
       
          </button>
        </div>
      </div>


      <div className="md:w-1/2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-t border-gray-300 py-5 last:border-b"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <FaPlus className="text-gray-600 text-sm" />
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-3 text-base leading-relaxed" style={{color:'gray'}}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
