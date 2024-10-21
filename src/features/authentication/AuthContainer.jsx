import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");

  const {
    isPending: isSendingOTP,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  // const sendOtpHandler = async (e) => {
  //   try {
  //     const data = await mutateAsync({phoneNumber});
  //     setStep(2);
  //     toast.success(data.message);
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const { register, handleSubmit, getValues } = useForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            register={register}
            onSubmit={handleSubmit(sendOtpHandler)}
            // onSubmit={sendOtpHandler}
            isSendingOTP={isSendingOTP}
            // phoneNumber={phoneNumber}
            // onChange ={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            // phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            onReSendOTP={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm"> {renderStep()}</div>;
}

export default AuthContainer;
