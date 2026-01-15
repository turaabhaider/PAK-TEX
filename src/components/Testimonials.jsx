import React from 'react';

const Testimonials = () => {
  // Use strings for the paths since they are in the public folder
  const reviews = [
    { 
      name: "Coach Sarah M.", 
      img: "/images/avatar-1.jpg", 
      text: "Zim Sports transformed how we manage our water polo club. Parents love the live streams, and our coaches save hours every week." 
    },
    { 
      name: "Mike T.", 
      img: "/images/avatar-2.jpg", 
      text: "The broadcasting quality is incredible. We've had scouts from colleges tune in to watch our players. Game changer for recruitment."
    },
    { 
      name: "Jennifer L.", 
      img: "/images/avatar-3.jpg", 
      text: "Finally, a platform that understands club sports. Simple to use, powerful features, and the support team is amazing." 
    }
  ];

  return (
    <section className="w-full py-24 bg-[#F8F9FF] flex justify-center px-6">
      <div className="max-w-[1300px] w-full">
        <h2 className="text-[42px] font-[900] text-center mb-16">
         Loved by  <span className="text-[#3B3DFF]">coaches everywhere</span> 
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <p className="text-gray-600 italic mb-10 leading-relaxed text-lg">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#3B3DFF]">
                  <img 
                    src={rev.img} 
                    alt={rev.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black">{rev.name}</h4>
                  <p className="text-sm text-gray-400">Marketing Director</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;