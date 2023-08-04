import { Button, TextField } from "@mui/material";
import * as yup from 'yup';
import { useFormik } from 'formik'
import { createEmployee } from "../services/employees.service";
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './AddUser.module.css';

const validationSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required(),
  email: yup.string().email(),
  jobTitle: yup.string().required().max(40),
});

const AddUser = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      jobTitle: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsAdding(true);
      setShowError(false);
      setShowSuccess(false);

      createEmployee(values)
      .then((resp) => {
        setIsAdding(false);
        setShowSuccess(true);
        console.log(resp);
      })
      .catch(() => {
        setIsAdding(false);
        setShowError(true);
      });
    }
  });
  return (
    <>
    {showError && <p>Error while adding user</p>}
    {showSuccess && <p>Employee has been added! Go to <Link to='/'>list</Link></p>}
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          className={styles['form-control']}
          // className={styles.control}
          variant="outlined"
          name="name"
          label="Name"
          fullWidth value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.name && Boolean(formik.errors.name)}
        />
        <TextField
          // className={styles.control}
          className={styles['form-control']}
          variant="outlined"
          name="email"
          label="Email"
          fullWidth
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          // className={styles.control}
          className={styles['form-control']}
          variant="outlined"
          name="jobTitle"
          label="Job Title"
          fullWidth
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
        />
        <Button variant="contained" type="submit" disabled={isAdding}>Add</Button>
      </form>
    </>
  )
}

export default AddUser