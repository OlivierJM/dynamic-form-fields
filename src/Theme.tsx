import styled from 'styled-components'
import { MdControlPoint, MdDelete } from "react-icons/md";

export const Button = styled.button`
   height: 35px;
   width:45px;
   background-color: #3F84EC;
   border-radius:5px;
   margin-left:15px;
   border:none;
   display: flex;
   justify-content:center;
   align-items:center;
`
export const Input = styled.input`
  height: 5vh;
  width:20vw;
  border-radius:5px;
  border: 1px solid #3F84EC;
  text-indent:5px;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder{
    font-size:17px;
`
export const FormsContainer = styled.div`
display:flex;
width: fit-content;
padding: 5px;
justify-content: flex-end;
align-items: flex-end;
`

export const AddIcon = styled(MdControlPoint)`
color: #fff;
font-size:20px;
`
export const DeleteIcon = styled(MdDelete)`
color: #fff;
font-size:20px;
`
export const Select = styled.select`
   height: 30px;
   min-width:65px;
   background-color: #3F84EC;
   border-radius:15px;
   margin-right:10px;
   border:none;
   display: flex;
   justify-content:center;
   align-items:center;
   color:white;
   font-weight:bold;
   font-size:17px;
   padding-left:10px;
   
`
export const Option = styled.option`
   height: 30px;
   min-width:65px;
   background-color: #3F84EC;
   border:none;
   display: flex;
   justify-content:center;
   align-items:center;
   color:white;
   font-weight:bold;
   font-size:17px;
   outline: none;
   
`