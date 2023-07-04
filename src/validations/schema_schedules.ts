import * as yup from "yup"

export const schemaSchedules = yup.object().shape({
    name: yup.string().required('nome é obrigatório'),
    phone: yup.string().required('telefone é obrigatório').min(9, 'número invalido'),
  });