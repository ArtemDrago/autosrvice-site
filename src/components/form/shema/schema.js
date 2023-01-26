import * as yup from "yup";

const phoneRegExp = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/

export const schemaConsultate = yup.object().shape({
   name: yup
      .string()
      .min(2, " ваше имя")
      .required("Введите ваше имя"),
   phone: yup
      .string()
      .matches(phoneRegExp, "Номер телефона")
      .required("Введите ваш номер"),
   description: yup
      .string()
      .min(20, 'Введите минимум 20 символов')
      .required("Body is a required field"),
})


