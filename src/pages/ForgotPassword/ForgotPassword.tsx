import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { Link, useNavigate } from "react-router-dom";
import EmailForm from "../../components/ForgotPassword/emailForm/EmailForm";
import CodeInput from "../../components/ForgotPassword/codeInput/CodeInput";
import NewPassWordForm from "../../components/ForgotPassword/newPasswordForm/NewPassWordForm";

function ForgotPassword() {
  //let navigate = useNavigate();
  //const {isLoading} = useContext(AuthContext);

  const [emailFound, setEmailFound] = useState<boolean>(false);
  const handleEmailFound = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailFound(true);
  }

  const [ codeValid, setCodeValid ] = useState<boolean>(false);
  const handleCodeValid = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCodeValid(true);
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-12 bg-[#FAEBD7]">
        <div className="flex bg-[#FFF] rounded-lg shadow-lg overflow-hidden w-full sm:w-3/4">
          {!emailFound && !codeValid ? (
            (<EmailForm setEmailFound={handleEmailFound}/>)
          ) : emailFound && !codeValid ? ((<CodeInput setCodeValid={handleCodeValid}/>)) : ((<NewPassWordForm />))}
        </div>
    </div>
  )
};

export default ForgotPassword;