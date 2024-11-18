import { useEffect, useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues } = useForm();

  const { user } = useUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isSendingOTP,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            register={register}
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOTP={isSendingOTP}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
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
