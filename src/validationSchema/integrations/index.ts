import * as yup from 'yup';

export const integrationValidationSchema = yup.object().shape({
  type: yup.string().required(),
  settings: yup.string().required(),
  business_id: yup.string().nullable(),
});
