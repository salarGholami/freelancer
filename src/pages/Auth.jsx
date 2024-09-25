import CheckOTPForm from "../features/authentication/CheckOTPForm";

function Auth() {
  return (
    <div className="flex justify-center items-center pt-10">
          <div className="w-full sm:max-w-sm">
        {/* <SendOTPForm /> */}
        <CheckOTPForm />
      </div>
    </div>
  );
}

export default Auth;
