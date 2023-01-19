import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import PatientRecordCard from '../PatientRecordCard/PatientRecordCard';
import Loading from '../Shared/Loading';
import './AllRecord.css';

const AllRecord = () => {
  const { user } = useContext(AuthContext);
  const url = `https://medicare-server.vercel.app/records?email=${user?.email}`;

  const {
    isLoading,
    isError,
    data: allRecord = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['records', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="all-record-page">
      <div className="container">
        <h2 className="text-center pt-4 text-white">All Patient Records</h2>

        <div className="patient-record-card-container py-4">
          {allRecord.length === 0 && (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="d-flex justify-content-center align-items-center text-white pt-5"
            >
              <h1>Oops! you haven't add any Patient Record.</h1>
            </div>
          )}

          {allRecord.map((record) => (
            <PatientRecordCard
              key={record._id}
              record={record}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRecord;
