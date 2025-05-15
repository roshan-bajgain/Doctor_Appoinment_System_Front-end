import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Appcontext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc,setFilterDoc] = useState([])

  const { doctors } = useContext(AppContext);

  const applyFilter = ()=> {
    if(speciality){
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=> {
applyFilter()
  },[doctors,speciality])
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterogolist</p>
        </div>
        <div>
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appoinment/${item._id}`)}
              key={index}
              className="border border-blue-400 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-3 transition-all duration-500"
            >
              <img className="bg-blue-50 " src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500 ">
                  <p className="w-2 h-2 bg-green-400 rounded-full"></p>
                  <p>Availables</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
