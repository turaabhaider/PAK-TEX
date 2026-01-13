import React from 'react';

const VenueTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10 text-[#3B3DFF] text-[10px] font-black uppercase tracking-[0.2em]">
            <th className="py-6">City Name</th>
            <th className="py-6">Event or Venue Name</th>
            <th className="py-6">Address</th>
            <th className="w-4"></th> {/* Empty space */}
            <th className="py-6">Phone Number</th>
            <th className="w-4"></th> {/* Empty space */}
            <th className="py-6">Website URL</th>
            <th className="py-6">Accommodation</th> {/* 8th column */}
          </tr>
        </thead>
        <tbody className="text-white/80 text-[14px] font-bold">
          <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
            <td className="py-6">Amsterdam</td>
            <td className="py-6 text-white font-black">The Loft</td>
            <td className="py-6">Overhoeksplein 1</td>
            <td></td>
            <td className="py-6">0681843287</td>
            <td></td>
            <td className="py-6">theloft.nl</td>
            <td className="py-6 text-[#3B3DFF]">Hotel Suites</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VenueTable;