import React from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const Container = styled.div`
.form2{
    background: #fff;
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column; 
}
.form2 h1{
    font-weight: 200;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #3e497a;
    margin-top: 50px;
    margin-bottom: 80px;
    font-size: 45px;
}

input{
    width: 600px;
    padding: 12px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    background-color: #eee;
    font-family: sans-serif;
    line-height: 30px;
}
input::placeholder{
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 700;
     font-family: 'Assistant', sans-serif; 
    font-family: 'Raleway', sans-serif;
    color: #ccc;
}
input text{
    
}
textarea{
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    resize: none;
    background-color: #eee;
    font-family: 'Assistant', sans-serif; 
    font-family: 'Raleway', sans-serif;
}
textarea::placeholder{
    font-weight: 700;
    font-size: 16px;
    font-family: 'Assistant', sans-serif; 
    font-family: 'Raleway', sans-serif;
    color: #ccc;
    letter-spacing: 2px;
}
button{
    border-radius: 4px;
    background-color: gray;
    border: none;
    color: #eee;
    font-family: 'Assistant', sans-serif; 
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2px;
    padding: 16px 32px;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 15px;
    position: relative;
    left: 38%;
}
button:hover{
    background-color: #3e497a;
    color: #ccc;
}    
p{
    color: red;
}
`

const Form = () => {
    
    const onSubmit = (data) => {
 console.log(data)
    }
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required("This Field is Required").email(),
        password: yup.string().required().min(10, 'Your Password is too short').max(20, 'your password is too long'),
        confirmpassword: yup.string().required().min(10).max(20).oneOf([yup.ref('password'), null], 'Passwords must match'),
        Age: yup.number().required().positive().integer(),
        Website: yup.string().required().url(),
        Message: yup.string().required(),
        CreatedOn: yup.date().required().default( function () {
            return new Date();
        }),
    })
    const{register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  return (
    <Container>
        <div className='form2'>
        <h1>Get In Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} class="input">
                    <div>
                        <input type="text"  id="N" placeholder="Name" {...register('name')}/>
                        {errors.name && <p>This Field is required</p>}
                    </div>
                    <div>
                        <input type="email"  id="E" placeholder="E-mail" class="form-control" {...register("email")}/>
                        <p>{errors.email?.message }</p>
                    </div>
                    <div>
                        <input type="password"  id="Sub" placeholder="Password" class="form-control" {...register("password")}/>
                        { <p>{errors.password?.message }</p> }
                    </div>
                    <div>
                        <input type="password"  id="Sue" placeholder="Comfirm Password" class="form-control" {...register("confirmpassword")}/>
                        { <p>{errors.confirmpassword?.message }</p> }
                    </div>
                    <div>
                        <input type="number"  id="Sub" placeholder="Age" class="form-control" {...register("Age")}/>
                        <p>{errors.Age?.message }</p>
                    </div>
                    <div>
                        <input type="text"  id="Sub" placeholder="Website" class="form-control" {...register("Website")}/>
                        <p>{errors.Website?.message }</p>
                    </div>
                    <div>
                        <input type="text"  id="Sub" placeholder="CreatedOn" class="form-control" {...register("CreatedOn")}/>
                        <p>{errors.CreatedOn?.message }</p>
                    </div>
                    <div>  
                        <textarea id="" cols="30" rows="10" placeholder="Your Message" {...register("Message")}/>
                        <p>{errors.Message?.message }</p>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                </div>
    </Container>
  )
}

export default Form