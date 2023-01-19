import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './UpdatePatientRecord.css';

const UpdatePatientRecord = () => {
  const record = useLoaderData();
  // console.log(record);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleUpdateRecord = (data) => {
    // console.log(data);

    const updateRecord = {
      patientName: data.patientName,
      age: data.age,
      bloodPressure: data.bloodPressure,
      phoneNumber: data.phoneNumber,
      diseaseName: data.diseaseName,
      treatment: data.treatment,
      nextAppointment: data.nextAppointment,
    };

    // console.log(updateRecord);

    fetch(`https://medicare-server.vercel.app/records/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateRecord),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success('Record Updated Successfully');

          navigate('/allrecord');
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="add-new-record-page">
      <h2 className="text-center py-4">
        Update {patientName}'s Medical Record
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container new-record-form-container"
      >
        <Form onSubmit={handleSubmit(handleUpdateRecord)}>
          <Row className="mb-3 row-cols-1 row-cols-md-2">
            <Col className="mb-3 mb-md-0">
              <Form.Label className="fw-semibold">Patient Name</Form.Label>
              <Form.Control
                {...register('patientName', {
                  required: 'Patient Name is required',
                })}
                type="text"
                defaultValue={patientName}
                placeholder="John Smith"
              />

              {errors.patientName && <p>{errors?.patientName?.message}</p>}
            </Col>

            <Col>
              <Form.Label className="fw-semibold">Age</Form.Label>
              <Form.Control
                {...register('age', {
                  required: ' Age is required',
                })}
                type="number"
                defaultValue={age}
                placeholder="47"
              />

              {errors.age && <p>{errors?.age?.message}</p>}
            </Col>
          </Row>

          <Row className="mb-3 row-cols-1 row-cols-md-2">
            <Col className="mb-3 mb-md-0">
              <Form.Label className="fw-semibold">Blood Pressure</Form.Label>
              <Form.Control
                {...register('bloodPressure', {
                  required: ' Blood Pressure is required',
                })}
                type="text"
                defaultValue={bloodPressure}
                placeholder="120/80"
              />

              {errors.bloodPressure && <p>{errors?.bloodPressure?.message}</p>}
            </Col>

            <Col>
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                {...register('phoneNumber', {
                  required: ' Phone number is required',
                })}
                type="number"
                defaultValue={phoneNumber}
                placeholder="+90 000 000 000"
              />

              {errors.phoneNumber && <p>{errors?.phoneNumber?.message}</p>}
            </Col>
          </Row>

          <Row className="mb-3 row-cols-1 row-cols-md-2">
            <Col className="mb-3 mb-md-0">
              <Form.Label className="fw-semibold">Disease Name</Form.Label>
              <Form.Control
                {...register('diseaseName', {
                  required: ' Disease name is required',
                })}
                type="text"
                defaultValue={diseaseName}
                placeholder="Flu, Diabetes, Arthritis "
              />

              {errors.diseaseName && <p>{errors?.phoneNumber?.message}</p>}
            </Col>

            <Col>
              <Form.Label className="fw-semibold">Given Treatment</Form.Label>
              <Form.Control
                {...register('treatment', {
                  required: ' Treatment description is required',
                })}
                as="textarea"
                rows={3}
                defaultValue={treatment}
                placeholder="Short description about diseases..."
              />

              {errors.treatment && <p>{errors?.treatment?.message}</p>}
            </Col>
          </Row>

          <Row className="mb-3 row-cols-1 row-cols-md-2">
            <Col>
              <Form.Label className="fw-semibold">Next Appointment</Form.Label>
              <Form.Control
                {...register('nextAppointment', {
                  required: ' Treatment description is required',
                })}
                type="date"
                defaultValue={nextAppointment}
                placeholder="Patient's disease name"
              />

              {errors.nextAppointment && (
                <p>{errors?.nextAppointment?.message}</p>
              )}
            </Col>
          </Row>

          <Button
            className="fw-semibold btn-register btn-save"
            variant="primary"
            type="submit"
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePatientRecord;
