import React from 'react';
import './AddRecord.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';

const AddRecord = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddTasks = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(handleAddTasks)}>
        <Row className="mb-3 row-cols-1 row-cols-md-2">
          <Col>
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              {...register('age', {
                required: 'Patient Name is required',
              })}
              type="text"
              placeholder="John Smith"
            />

            {errors.patientName && <p>{errors?.patientName?.message}</p>}
          </Col>

          <Col>
            <Form.Label>Age</Form.Label>
            <Form.Control
              {...register('age', {
                required: ' Age is required',
              })}
              type="number"
              placeholder="47"
            />

            {errors.age && <p>{errors?.age?.message}</p>}
          </Col>
        </Row>

        <Row className="mb-3 row-cols-1 row-cols-md-2">
          <Col>
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control
              {...register('bloodPressure', {
                required: ' Blood Pressure is required',
              })}
              type="text"
              placeholder="120/80"
            />

            {errors.bloodPressure && <p>{errors?.bloodPressure?.message}</p>}
          </Col>

          <Col>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              {...register('phoneNumber', {
                required: ' Phone number is required',
              })}
              type="number"
              placeholder="+90 000 000 000"
            />

            {errors.phoneNumber && <p>{errors?.phoneNumber?.message}</p>}
          </Col>
        </Row>

        <Row className="mb-3 row-cols-1 row-cols-md-2">
          <Col>
            <Form.Label>Disease Name</Form.Label>
            <Form.Control
              {...register('diseaseName', {
                required: ' Disease name is required',
              })}
              type="text"
              placeholder="Flu, Diabetes, Arthritis "
            />

            {errors.diseaseName && <p>{errors?.phoneNumber?.message}</p>}
          </Col>

          <Col>
            <Form.Label>Given Treatment</Form.Label>
            <Form.Control
              {...register('treatment', {
                required: ' Treatment description is required',
              })}
              as="textarea"
              rows={3}
              placeholder="Short description about diseases..."
            />

            {errors.treatment && <p>{errors?.treatment?.message}</p>}
          </Col>
        </Row>

        <Row className="mb-3 row-cols-1 row-cols-md-2">
          <Col>
            <Form.Label>Next Appointment</Form.Label>
            <Form.Control
              {...register('nextAppointment', {
                required: ' Treatment description is required',
              })}
              type="date"
              placeholder="Patient's disease name"
            />

            {errors.nextAppointment && (
              <p>{errors?.nextAppointment?.message}</p>
            )}
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddRecord;
