import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendingOTP,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
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
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={sendOtpHandler}
            isSendingOTP={isSendingOTP}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
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
