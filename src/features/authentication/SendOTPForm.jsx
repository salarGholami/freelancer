import TextFiled from "../../ui/TextFiled";
import Loading from "../../ui/Loading";

function SendOTPForm({ phoneNumber, onChange, onSubmit, isSendingOTP }) {
  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextFiled
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOTP ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
