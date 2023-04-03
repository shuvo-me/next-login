import { signIn, useSession } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

import { VscGithubInverted } from "react-icons/vsc";
const Login = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-white max-w-[700px] mx-auto mt-[100px] p-10">
        <div className="bg-slate-50 flex flex-col justify-center gap-3 p-[50px] px-[200px]">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="bg-white px-4 py-4 flex items-center gap-2"
          >
            <span className="text-[1.5rem]">
              <FcGoogle />
            </span>
            <span>SignIn With Google</span>
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="bg-white px-4 py-4 flex items-center gap-2"
          >
            <span className="text-[1.5rem]">
              <VscGithubInverted />
            </span>
            <span>SignIn With Github</span>
          </button>
          {/* <button
            onClick={() => signIn("twitter", { callbackUrl: "/" })}
            className="bg-white px-4 py-4 flex items-center gap-2"
          >
            <span className="text-[1.5rem] text-blue-500">
              <FaTwitter />
            </span>
            <span>SignIn With Twitter</span>
          </button> */}
        </div>
      </div>
    );
  }
};

export default Login;
