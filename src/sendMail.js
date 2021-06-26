import React from 'react';
import "./sendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import {closeSendMessage} from "./features/mailSlice";

function SendMail() {
  // const { register, handleSubmit, errors } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data)=>{
    console.log(data);
  }


  // const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} 
        className="sendMail__close"
/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* <form onSubmit={handleSubmit}> */}
        <input
          name="to"
          placeholder="TO"
          type="text"
          {...register("name value", {required: true})}
          // ref={register({required: true})}
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("name value", {required: true})}
          // ref={register({required: true})}

        />
         {errors.to && <p className="sendMail__error">Subject is Required</p>}

        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("name value", {required: true})}
          // ref={register({required: true})}

        />
         {errors.to && <p className="sendMail__error">Message is Required</p>}

        <div className="sendMail__Options">
          <Button
            className="sendMail__send"
            varient="contained"
            color="primary"
            type="submit"
        >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
