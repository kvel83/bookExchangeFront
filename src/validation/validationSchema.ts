import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/, 'La contraseña debe incluir al menos una mayúscula y un número')
      .required('La contraseña es obligatoria'),
  });

  export default validationSchema;