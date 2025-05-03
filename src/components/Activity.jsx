import { Calendar } from "lucide-react";
import React from "react";

function Activity() {
  return (
    <div className="mt-16 flex h-1/3 w-full flex-col gap-4 px-16 py-4 font-bold">
      <div className="flex items-center gap-4">
        <Calendar />
        <h3 className="text-xl">Recent Activity</h3>
      </div>
      <table className="text-left">
        <tr>
          <th className="py-4">Name</th>
          <th className="py-4">Email</th>
          <th className="py-4">Joined</th>
          <th className="py-4">Type</th>
          <th className="py-4">Status</th>
        </tr>
        <tr className="text-gray-500">
          <td className="py-4">Prem Shahi</td>
          <td className="py-4">premshahi@gamil.com</td>
          <td className="py-4">2022-02-12</td>
          <td className="py-4">New</td>
          <td className="py-4">Liked</td>
        </tr>
        <tr className="text-gray-500 ">
          <td className="py-4">Prem Shahi</td>
          <td className="py-4">premshahi@gamil.com</td>
          <td className="py-4">2022-02-12</td>
          <td className="py-4">New</td>
          <td className="py-4">Liked</td>
        </tr>
        <tr className="text-gray-500">
          <td className="py-4">Prem Shahi</td>
          <td className="py-4">premshahi@gamil.com</td>
          <td className="py-4">2022-02-12</td>
          <td className="py-4">New</td>
          <td className="py-4">Liked</td>
        </tr>
        <tr className="text-gray-500">
          <td className="py-4">Prem Shahi</td>
          <td className="py-4">premshahi@gamil.com</td>
          <td className="py-4">2022-02-12</td>
          <td className="py-4">New</td>
          <td className="py-4">Liked</td>
        </tr>
      </table>
    </div>
  );
}

export default Activity;
