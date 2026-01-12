import React from 'react';

const VenueTable = () => {
  return (
    <section className="w-full bg-[#050729] py-10 flex justify-center px-6">
      <div className="max-w-[1300px] w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">City Name</th>
              <th className="py-4 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">Event or Venue Name</th>
              <th className="py-4 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">Address</th>
              <th className="w-4"></th>
              <th className="py-4 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">Phone Number</th>
              <th className="w-4"></th>
              <th className="py-4 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">Website URL</th>
              <th className="py-4 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">Accommodation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white font-bold text-[13px]">
              <td className="py-6">Amsterdam</td>
              <td className="py-6">The Loft</td>
              <td className="py-6">A'DAM Tower, Overhoeksplein 1</td>
              <td></td>
              <td className="py-6">0681843287</td>
              <td></td>
              <td className="py-6">www.theloft.nl</td>
              <td className="py-6 text-[#3B3DFF]">Hotel Suites</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VenueTable;