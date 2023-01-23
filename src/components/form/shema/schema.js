import * as yup from "yup";

export const schemaConsultate = yup.object().shape({
   name: yup
      .string()
      .min(2, " ваше имя")
      .required("Введите ваше имя"),
   phone: yup
      .string()
      .matches(/^\d+$/, "номер телефона")
      .min(11, 'номер телефона')
      .required("Введите ваш номер"),
   description: yup
      .string()
      .min(20, 'Введите минимум 20 символов')
      .required("Body is a required field"),
})
