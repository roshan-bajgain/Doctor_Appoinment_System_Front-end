import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  // grouping Doctors By Specialty(Hash Map Construction)
  const doctorMap = useMemo(() => {
    const map = {};
    for (let i = 0; i < doctors.length; i++) {
      const doc = doctors[i];
      if (!map[doc.speciality]) {
        map[doc.speciality] = [];
      }
      map[doc.speciality].push(doc);
    }
    return map;
  }, [doctors]);

  // Manual filtering inside useEffect
  useEffect(() => {
    const related = [];

    const specialityDoctors = doctorMap[speciality] || [];

    for (let i = 0; i < specialityDoctors.length; i++) {
      const doc = specialityDoctors[i];
      if (doc._id !== docId) {
        related.push(doc);
      }
    }

    setRelDocs(related);
  }, [doctorMap, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 ">
      <h1 className="text-3xl font-medium">Top Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simple browse through our extensive list of trusted doctors
      </p>
      <div className="w-full grid [grid-template-columns:repeat(auto-fill,_minmax(225px,_1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appoinment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-400 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-3 transition-all duration-500"
          >
            <img className="bg-blue-50 " src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500 ">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Availables</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
