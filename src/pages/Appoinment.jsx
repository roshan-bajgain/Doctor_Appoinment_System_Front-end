import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext} from '../context/Appcontext'
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  console.log("Currency Symbol: ", currencySymbol);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-blue-500 w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900 ">
              {docInfo.name}
              <img className="w-4" src={assets.verified_icon} alt="verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} = {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-a text-sm font-medium text-gray-900 mt-3">
                About
                <img className="pl-1" src={assets.info_icon} />
              </p>
              <p className="text-sm text-gray-500 max-w[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="mt-4 text-sm">
              Appointment fee:{" "}
              <span className="font-semibold">
                {currencySymbol}{docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );};

export default Appointment;
