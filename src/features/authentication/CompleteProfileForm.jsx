import { useState } from "react";
import TextFiled from "../../ui/TextFiled";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
          <TextFiled
            label="نام و نام خانوادگی"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextFiled
            label="ایمیل"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              id="OWNER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              id="FREELANCER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
