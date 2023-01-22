import React from 'react';
import './style.scss'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { schemaConsultate } from '../shema/schema';
import { Form } from 'react-bootstrap';
import { TextField } from '@mui/material';
import rigth from '../../../sorce/icons/modal/rigth.svg'

function ModalConsultation({ setVisible }) {

   const { register, handleSubmit, formState: { errors } } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schemaConsultate),
   })

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
            type='text'
            id='phone'
            placeholder='Контактный телефон *'
            name="phone"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.phone}
            helperText={`${errors?.phone?.message || ''}`}
         />
         <TextField
            {...register('description')}
            id='description'
            className='text-area'
            name="description"
            multiline
            placeholder='Комментарий'
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