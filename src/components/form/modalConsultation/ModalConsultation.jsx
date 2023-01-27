import React, { useState } from 'react';
import './style.scss'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { schemaAuto, schemaConsultate } from '../shema/schema';
import { Form } from 'react-bootstrap';
import { MenuItem, TextField, Select, InputLabel, FormControl } from '@mui/material';
import rigth from '../../../sorce/icons/modal/rigth.svg'
import { Cars } from '../shema/data';

function ModalConsultation({ setVisible, typeModal }) {
   const { register, handleSubmit, formState: { errors } } = useForm({
      mode: "onBlur",
      resolver: typeModal === 'record' ? yupResolver(schemaAuto) : yupResolver(schemaConsultate),
   })

   const [cars, setCars] = useState('')

   const handleChange = (event) => {
      setCars(event);
   };

   const onSubmit = (data) => {
      console.log(data)
      setVisible(false)
   }

   return (
      <Form
         onSubmit={handleSubmit(onSubmit)}
         className='form'
      >
         <TextField
            {...register('name')}
            type='text'
            label='Ваше имя'
            id='name'
            placeholder='Ваше имя *'
            name="name"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.name}
            helperText={`${errors?.name?.message || ''}`}
         />
         <TextField
            {...register('phone')}
            type='tel'
            label='Контактный телефон'
            id='phone'
            placeholder='Контактный телефон *'
            name="phone"
            variant='outlined'
            fullWidth
            margin='normal'
            error={!!errors.phone}
            helperText={`${errors?.phone?.message || ''}`}
         />
         {typeModal == 'record' &&
            <FormControl fullWidth margin='normal'>
               <InputLabel id="demo-simple-select-label">Марка автомобиля *</InputLabel>
               <Select
                  {...register('cars')}
                  labelId="demo-simple-select-label"
                  id='cars'
                  name='cars'
                  onChange={(e) => handleChange(e.target.value)}
                  fullWidth
                  value={cars}
                  label="марка автомобиля *"
                  variant='outlined'
                  error={!!errors.cars}
               >
                  {Cars.map(el => <MenuItem
                     key={el.id}
                     value={el.title}
                  >
                     {el.desk}
                  </MenuItem>)
                  }
               </Select>
            </FormControl>
         }
         <TextField
            {...register('description')}
            id='description'
            label={
               typeModal == 'record' ?
                  'Комментарий'
                  :
                  'Краткое описание проблемы'
            }
            className='text-area'
            name="description"
            multiline
            placeholder={
               typeModal == 'record' ?
                  'Комментарий'
                  :
                  'Краткое описание проблемы'
            }
            margin='normal'
            variant='outlined'
            rows={3}
            error={!!errors.description}
            helperText={`${errors?.description?.message || ''}`}
         />
         <div className="form-controls">
            <div className="form-controls_colum">
               <div className="form-controls_text">
                  Нажимая кнопку «Отправить заявку» вы даете согласие на
                  <span className='person-data'>
                     Обработку персональных данных
                  </span>
               </div>
            </div>
            <div className="form-controls_colum">
               <button
                  type='submit'
                  className='form-btn'
               >
                  Отправить заявку
                  <img src={rigth} alt="" />
               </button>
            </div>
         </div>
      </Form>
   );
}

export default ModalConsultation;