import * as yup from "yup";
import { markCar } from "./dataModal";

const phoneRegExp = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/

export const schemaConsultate = yup.object().shape({
   name: yup
      .string()
      .min(2, " ваше имя")
      .required("введите ваше имя"),
   phone: yup
      .string()
      .matches(phoneRegExp, "номер телефона")
      .required("введите ваш номер"),
   description: yup
      .string()
      .min(10, 'введите минимум 10 символов')
      .required("введите минимум 10 символов"),
})

export const schemaAuto = yup.object().shape({
   name: yup
      .string()
      .min(2, " ваше имя")
      .required("введите ваше имя"),
   phone: yup
      .string()
      .matches(phoneRegExp, "номер телефона")
      .required("ведите ваш номер"),
   cars: yup
      .mixed()
      .oneOf([...markCar])
      .required("ведите марку авто"),
   description: yup
      .string()
      .min(10, 'введите минимум 10 символов')
      .required("введите минимум 10 символов"),
})
