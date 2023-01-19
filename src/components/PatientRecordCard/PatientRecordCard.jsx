import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './PatientRecordCard.css';

const PatientRecordCard = ({ record, refetch }) => {
  const {
    _id,
    age,
    bloodPressure,
    diseaseName,
    nextAppointment,
    patientName,
    phoneNumber,
    treatment,
  } = record;

  const handleDeleteRecord = (id) => {
    console.log(id);

    const agree = window.confirm('Are you sure you want to delete the record?');

    if (agree) {
      fetch(`http://localhost:5000/records/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount) {
            toast.success('Record Delete Successfully');
            refetch();
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div>
      <Card
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border-0 shadow h-100 record-card"
      >
        <Card.Body>
          <Card.Title>Name: {patientName}</Card.Title>
          <p className="mb-2 ">
            <strong>Age:</strong> {age}
          </p>
          <p className="mb-2 ">
            <strong>Disease:</strong> {diseaseName}
          </p>
          <p className="mb-2 ">
            <strong>Treatment:</strong> {treatment}
          </p>
          <p className="mb-3 ">
            <strong>Next Appointment:</strong> {nextAppointment}
          </p>

          <div className="icons-and-image-container">
            <div className="d-flex justify-content-between align-items-center gap-3 pe-2">
              <div className="d-flex gap-4">
                <Link to={`/updateRecord/${_id}`}>
                  <FaEdit
                    size={26}
                    style={{ cursor: 'pointer', color: '#439a97' }}
                  />
                </Link>

                <MdDeleteForever
                  onClick={() => handleDeleteRecord(_id)}
                  size={28}
                  style={{ cursor: 'pointer', color: '#ec4899' }}
                />
              </div>

              <div>
                <Link to={`/patientDetails/${_id}`}>
                  <ImArrowRight2
                    size={26}
                    style={{ cursor: 'pointer', color: '#0ea5e9' }}
                    className="see-more"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PatientRecordCard;
